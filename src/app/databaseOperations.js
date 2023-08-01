import supabase from './db.js';

const {getChatResponse} = require('./gpt.js');

export const insertData = async (user_data) => {
    let { data, error } = await supabase
        .from('FirstInputTable')  // Replace 'tableName' with your table's name
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
        console.log('Error: ', error);
    } else {
        console.log('Inserted data into the table.');
        //thesis(user_data);
    }
}



function thesis(input_data){
    const thesis_system_prompt = "You are an essay outlining expert, that can take in user inputs and craft a well written theis for an assignment.";
    const thesis_user_prompt = "User inputs below: \n"+ JSON.stringify(input_data)+"\n please craft a thesis or main idea";
    (async () => {
        const response = await getChatResponse(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
      })();
}
