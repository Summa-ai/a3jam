"use server";
import OpenAI from "openai";
import { MessageContentText } from "openai/resources/beta/threads/messages/messages.mjs";
import { IMessageResponse, IRequest } from "../types/message";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getResponse(
  message: IRequest
): Promise<IMessageResponse | undefined> {
  console.log("Begain");
  console.log(message);
  const thread = await openai.beta.threads.create({});
  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: JSON.stringify(message),
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: "asst_Exxf6gFWDd9wVQLBHREoxs34",
  });

  let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  while (runStatus.status !== "completed") {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
  }

  const messages = await openai.beta.threads.messages.list(thread.id);

  const lastMessageForRun = messages.data
    .filter(
      (message) => message.run_id === run.id && message.role === "assistant"
    )
    .pop();

  // If an assistant message is found, console.log() it
  if (lastMessageForRun) {
    console.log(
      (lastMessageForRun.content[0] as MessageContentText).text.value
    );
    const json = (
      lastMessageForRun.content[0] as MessageContentText
    ).text.value.replace(/```json|```/g, "");
    return JSON.parse(json);
  }
}
