import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from 'next/server';

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getChatResponse(userMessage, systemMessage) {
    const completion = await openai.createChatCompletion({
      model: "gpt-4-32k",
      messages: [
        {"role": "system", "content": systemMessage}, 
        {"role": "user", "content": userMessage}
      ],
      temperature: 1,
    });

    return completion.data.choices[0].message.content;
}

// const res = await window.fetch('/api/openai', {
// body: JSON.stringify({ userMessage: 'hello world', systemMessage: 'be nice' })
// });
// const essayBulletPoints = await res.json();

// TODO ONLY SEND JSON OBJECT
export async function POST(req) {
  // Extract the `messages` from the body of the request
  const { userMessage, systemMessage } = await req.json()

  const content = await getChatResponse(userMessage, systemMessage);

  return new NextResponse(JSON.stringify({ content }));
}