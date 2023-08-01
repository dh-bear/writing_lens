import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-4VnBH7F43k5fSchEhWpLxMB0",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);


async function getChatResponse(userMessage, systemMessage) {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": systemMessage}, 
        {"role": "user", "content": userMessage}
      ],
    });
    
    return completion.data.choices[0].message;
  }
  
  module.exports = {
    getChatResponse
  };