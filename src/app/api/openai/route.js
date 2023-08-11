import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from 'next/server';

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function getChatResponse(userMessage, systemMessage, maxTokens) {
    const completion = await openai.createChatCompletion({
      model: "gpt-4-32k",
      messages: [
        {"role": "system", "content": systemMessage}, 
        {"role": "user", "content": userMessage}
      ],
      temperature: 1,
      max_tokens: maxTokens,
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
  const { userMessage, systemMessage, maxTokens } = await req.json()

  const content = await getChatResponse(userMessage, systemMessage, maxTokens);

  return new NextResponse(JSON.stringify({ content }));
}