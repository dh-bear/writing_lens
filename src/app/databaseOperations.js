import supabase from './db.js';
import Page from './page.js';
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
        console.log('SHOOT Error: ', error);
    } else {
        console.log('Inserted data into the table.');
        thesis(user_data);
    }
}



async function thesis(input_data){
    try{
        const thesis_system_prompt = "You are an essay outlining expert, that can take in user inputs and craft a well written theis for an assignment.";
        const thesis_user_prompt = "User inputs below: \n"+ JSON.stringify(input_data)+"\n please craft a thesis or main idea";
        const response = await getChatResponse(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
        console.log("Done")
        document.getElementById("thesisSection").style.display = "block";
        document.getElementById("thesisText").innerText = JSON.stringify(response);
        getPoints(input_data, response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}


export const getPoints = async (input_data, thesis_data) => {
    try{
        const thesis_system_prompt = "You are an essay outlining expert, that can come up with supporting points to formulate an argument";
        const thesis_user_prompt = "Assignment: \n user_inputs:"+ JSON.stringify(input_data) +"\n please list 3-5 terse supporting ideas to support:\n"+thesis_data;
        const response = await getChatResponse(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
        console.log("Done")
        document.getElementById("pointsSection").style.display = "block";
        document.getElementById("pointsText").innerText = JSON.stringify(response);
        getOutline(input_data, thesis_data, response)
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
export const getOutline = async (input_data, thesis_data, points_data) => {
    try{
        const thesis_system_prompt = "You are an essay outlining expert. DO NOT CITE DIRECT SOURCES";
        const thesis_user_prompt = "Assignment: \n user_inputs:"+ JSON.stringify(input_data) +"\n please craft an outline for an essay using these ideas \n"+JSON.stringify(points_data)+"\n to support \n"+thesis_data;
        const response = await getChatResponse(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
        console.log("Done")
        document.getElementById("outlineSection").style.display = "block";
        document.getElementById("outlineText").innerText = JSON.stringify(response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
