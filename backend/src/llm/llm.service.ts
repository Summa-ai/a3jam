import { Process, Processor } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bull';
import OpenAI from 'openai';
import { MessageContentText } from 'openai/resources/beta/threads/messages/messages';
import { Repository } from 'typeorm';
import { Dictionary } from '../dictionary/entities/dictionary.entity';

@Processor('dictionary')
@Injectable()
export class LlmService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly dictionary: Repository<Dictionary>,
  ) {}
  @Process()
  async llm(job: Job) {
    console.log('Event start');
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const thread = await openai.beta.threads.create({});
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: JSON.stringify(job.data.word),
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: 'asst_gY578occygKVUqdFehcaUs7r',
    });

    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    while (runStatus.status !== 'completed') {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    }

    const messages = await openai.beta.threads.messages.list(thread.id);

    const lastMessageForRun = messages.data
      .filter(
        (message) => message.run_id === run.id && message.role === 'assistant',
      )
      .pop();

    if (lastMessageForRun) {
      console.log(
        (lastMessageForRun.content[0] as MessageContentText).text.value,
      );
      const json = (
        lastMessageForRun.content[0] as MessageContentText
      ).text.value.replace(/```json|```/g, '');
      await this.dictionary.update(job.data.id, {
        dictionary: JSON.parse(json),
      });
      return JSON.parse(json);
    }
  }
}
