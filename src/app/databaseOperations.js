import './prompts';
import { thesis_user } from './prompts';
import {chatGPT, insertData} from './utils';
//testString = thesis_user

export const getThesis = async (input_data) => {
    try{
        const thesis_system_prompt = "You are an essay outlining expert, that can take in user inputs and craft a well written theis for an assignment.";
        const thesis_user_prompt = "User inputs below: \n"+ JSON.stringify(input_data)+"\n please craft a thesis or main idea";
        const response = await chatGPT(thesis_system_prompt, thesis_user_prompt);
        // can replace above with fetch, so chatgpt calls on server side and not client side
        console.log(response);
        console.log("Done")
        document.getElementById('submitButton').style.display = "none";
        document.getElementById('outputSection').style.display = "block";
        document.getElementById("thesisSection").style.display = "block";
        document.getElementById("thesisText").innerText = JSON.stringify(response);
        document.getElementById("pointsSection").style.display = "block";
        document.getElementById("pointsText").innerText = "Loading...";
        document.getElementById("outlineSection").style.display = "block";
        document.getElementById("outlineText").innerText = "Loading...";
        getPoints(input_data, JSON.stringify(response));
    } catch (err) {
        console.error('An error occurred:', err);
    }
}


export const getPoints = async (input_data, thesis_data) => {
    try{
        const thesis_system_prompt = "You are an essay outlining expert, that can come up with supporting points to formulate an argument";
        const thesis_user_prompt = "Assignment: user_inputs:"+ JSON.stringify(input_data) +" please list 3-5 terse supporting ideas to support:"+thesis_data;
        const response = await chatGPT(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
        document.getElementById("pointsSection").style.display = "block";
        document.getElementById("pointsText").innerText = JSON.stringify(response);
        getOutline(input_data, thesis_data, JSON.stringify(response))
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
export const getOutline = async (input_data, thesis_data, points_data) => {
    try{
        const thesis_system_prompt = "You are an essay outlining expert. DO NOT CITE DIRECT SOURCES";
        const thesis_user_prompt = "Assignment: user_inputs:"+ JSON.stringify(input_data) +" please craft an outline for an essay using these ideas"+JSON.stringify(points_data)+" to support "+thesis_data;
        const response = await chatGPT(thesis_system_prompt, thesis_user_prompt);
        console.log(response);
        document.getElementById("outlineSection").style.display = "block";
        document.getElementById("outlineText").innerText = JSON.stringify(response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}