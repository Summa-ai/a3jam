import { HttpService } from '@nestjs/axios';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { Repository } from 'typeorm';
import {
  CreateDictionaryDto,
  CreateEntryDto,
} from './dto/create-dictionary.dto';
import { Dictionary } from './entities/dictionary.entity';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectRepository(Dictionary)
    private readonly dictionary: Repository<Dictionary>,
    private eventEmitter: EventEmitter2,
    private readonly httpService: HttpService,
    @InjectQueue('dictionary') private queue: Queue,
  ) {}
  async create(createDictionaryDto: CreateDictionaryDto) {
    const results = await this.dictionary.save(createDictionaryDto);

    this.eventEmitter.emit('order.created', {
      id: results.id,
      word: results.word,
    });

    await this.queue.add({
      id: results.id,
      word: results.word,
    });

    return { message: 'ok' };
  }

  async createEntry(createEntryDto: CreateEntryDto) {
    return this.httpService
      .post('/create/entry', {
        ...createEntryDto.entry,
      })
      .toPromise()
      .then((res) => res.status);
  }
}
