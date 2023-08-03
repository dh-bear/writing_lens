import { Configuration, OpenAIApi } from "openai";
var key = require("../../key.js");
const configuration = new Configuration({
    apiKey: key.openai,
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