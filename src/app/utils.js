import supabase from './api/supabase';


export async function chatGPT(system_msg, user_msg) {
    const res = await window.fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify({ userMessage: user_msg, systemMessage: system_msg })
    });
    const response = await res.json();
    return response.content;
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