require('dotenv').config()
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORG,
    apiKey: process.env.OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);


async function getChatResponse(userMessage, systemMessage) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": systemMessage}, 
        {"role": "user", "content": userMessage}
      ],
      temperature: 1
    });
    
    return completion.data.choices[0].message.content;
  }
  
  module.exports = {
    getChatResponse
  };