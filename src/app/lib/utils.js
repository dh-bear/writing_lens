import {supabase} from '../supabaseClient';
/*
export async function fetchFromOpenAI(data) {
  const response = await fetch(`/api/openai`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
  }

*/

export async function fetchFromOpenAI(system_msg, user_msg) {
    const res = await window.fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify({ userMessage: user_msg, systemMessage: system_msg })
    });
    const response = await res.json();
    //console.log(response.content)
    return response.content;
}

export async function fetchFromSupabaseDB(user_data) {
    const { data, error } =  await supabase
        .from('FirstInputTable')
        .insert([
            {
                topic: user_data.topic,
                school_class: user_data.school_class,
                essay_type: user_data.essay_type,
                reference_piece: user_data.reference_piece,
                additional_features: user_data.additional_features
            }
        ]).select();

    if (error) {
        console.error(error);
        throw error;
    }

    return user_data;
};
