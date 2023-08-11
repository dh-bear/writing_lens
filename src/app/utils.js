import supabase from './api/supabase';


export async function chatGPT(system_msg, user_msg, max_tokens) {
    const res = await window.fetch('/api/openai', {
      method: 'POST',
      body: JSON.stringify({ userMessage: user_msg, systemMessage: system_msg, maxTokens: max_tokens})
    });
    const response = await res.json();
    const generated_content = response.content.replace(/\n/g, "<br />");
    return generated_content;
  }

export async function insertData(formData) {
    try {
    /*
      // Destructure formData
      const { topic, school, essay_type } = formData;
  
      // Check if all necessary properties are present
      if (!topic || !school || !essay_type) {
        throw new Error('All necessary properties are not provided in formData');
      }
      */
  
      // Insert data into FirstInputTable
      const response = await supabase
        .from('FirstInputTable')
        .insert([
          { 
            topic: formData.topic, 
            school_class: formData.school_class, 
            essay_type: formData.essay_type, 
            reference_piece: formData.reference_piece, 
            additional_features: formData.additional_features 
          },
        ]);
        
        if (response.error) throw response.error;
  
        return response;
  
    } catch (error) {
      console.error(error);
      return error;
    }
}

/**
 * Make sure to include error handling for when the response is not as such
 */
export async function gptClassifier(system_msg, user_msg, response_to_validate) {
  const prompt_log = `<SYSTEM_PROMPT>\n${system_msg}. ${user_msg} \n\n <CURRENT_RESPONSE>\n${response_to_validate}`;
  const classification_prompt = 
  `If <CURRENT_RESPONSE> includes the <END> tag:
    - respond with 'y';
  Else
    - respond with 'n' (no single quotes);`;
  const res = await window.fetch('/api/openai', {
    method: 'POST',
    body: JSON.stringify({ userMessage: classification_prompt, systemMessage: prompt_log, maxTokens: 1})
  });
  const response = await res.json();
  return response.content === 'y'; //returns true if 'y' and false if 'no'
}
