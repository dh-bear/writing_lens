export async function chatGPT(system_msg, user_msg) {
    const res = await window.fetch('/api/openai', {
        method: 'POST',
        body: JSON.stringify({ userMessage: user_msg, systemMessage: system_msg })
    });
    const response = await res.json();
    console.log(response.content)
    return response.content;
}

export async function insertData(user_data) {
    const res = await window.fetch('/api/supabase', {
        method: 'POST',
        body: JSON.stringify({
            table: 'FirstInputTable',
            data: [
                {
                    topic: user_data.topic,
                    school_class: user_data.school_class,
                    essay_type: user_data.essay_type,
                    reference_piece: user_data.reference_piece,
                    additional_features: user_data.additional_features
                }
            ]
        })
    });
    const response = await res.json();
    if (response.error) {
        console.error('Error:', response.error);
    } else {
        console.log('Inserted data into the table:', response.data);
    }
    return response.content;
};


