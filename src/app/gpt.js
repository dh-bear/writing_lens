import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-4VnBH7F43k5fSchEhWpLxMB0",
    apiKey: "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",
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
  
  module.exports = {
    getChatResponse
  };