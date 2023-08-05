import {dummyPrompt, thesis_sys, thesis_user} from '../prompts';
import { fetchFromOpenAI, fetchFromSupabaseDB } from './utils';

export async function handleFormInput(input) {
    const data = { input };
  
    await getOutputContent(data);
    await fetchFromSupabaseDB(data);
  
    // Handle the responses accordingly.
    // If you need to save the data to a database, you can do it here.
}

const createPrompt = async (json_data, step_name) => {
    // todo: make switch statement for the type of prompts
    //const sys_msg = thesis_sys
    //const user_msg = thesis_user
    const user = dummyPrompt(json_data).user
    const system = dummyPrompt(json_data).system
    return {system, user}
}



export async function getOutputContent(data_in_json){
    try{
        const thesis_response = await fetchFromOpenAI(createPrompt(data_in_json, "thesis").system, createPrompt(data_in_json, "thesis").user);
        updateGUI("thesis", JSON.stringify(thesis_response))

        const points_response = await fetchFromOpenAI(createPrompt(data_in_json, "points").system, createPrompt(data_in_json, "points").user);
        updateGUI("points", JSON.stringify(points_response))

        const outline_response = await fetchFromOpenAI(createPrompt(data_in_json, "outline").system, createPrompt(data_in_json, "outline").user);
        updateGUI("outline", JSON.stringify(outline_response))
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

function updateGUI(step_name, text_input){
    if (step_name == "thesis"){ // first pass
        document.getElementById('submitButton').style.display = "none";
        document.getElementById('outputSection').style.display = "block";
        document.getElementById("thesisText").innerText = JSON.stringify(text_input);
        document.getElementById("pointsText").innerText = "Loading...";
        document.getElementById("outlineText").innerText = "Loading...";
    }
    else if (step_name == "points"){ // second pass
        document.getElementById("pointsText").innerText = JSON.stringify(text_input);
    }
    else if (step_name == "outline"){ // third pass
        document.getElementById("outlineText").innerText = JSON.stringify(text_input);
    }    
}
