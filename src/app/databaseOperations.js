import {chatGPT} from './utils';

function loadString(step){
    var loading_embedded_div = `<p>Loading</p><img src='https://emoji.slack-edge.com/T051NFX029F/studdyhappyparty/c79fcac2d48dea37.gif' /><p>${step}</p>`;
    return loading_embedded_div;
}

const format_instructions_thesis = "";
const format_instructions = "";
const total_length_thesis = 200;
const total_length_points = 500;
const total_length_outline = 700;

// export const queueATest = async () => {
//     console.log("Loading");
//     const story_max_tokens = 300;
//     const story_user = "Write me a short story about a fictional teddy bear named barney";
//     const story_system = "you are a storyteller who ends the story with <<END>> ";
//     const raw_response = await chatGPT(story_system, story_user, story_max_tokens);
//     const response = JSON.stringify(raw_response);
// }




function updateGUI(step, step_text_content){
    if (step == "thesis"){
        document.getElementById('thesisLoading').style.display = "none";
        document.getElementById("thesisText").innerHTML = step_text_content;
        document.getElementById("thesisText").style.display = "block";

        document.getElementById('pointsSection').style.display = "block";
        document.getElementById('pointsLoading').style.display = "block";

    } else if (step == "points"){
        document.getElementById('pointsLoading').style.display = "none";
        document.getElementById("pointsText").innerHTML = step_text_content;
        document.getElementById("pointsText").style.display = "block";

        document.getElementById('outlineLoading').style.display = "block";
        document.getElementById('outlineSection').style.display = "block";

    }else if (step == "outline"){
        document.getElementById("outlineText").style.display = "block";
        document.getElementById('outlineLoading').style.display = "none";
        document.getElementById('outlineSection').style.display = "block";
        document.getElementById("outlineText").innerHTML = step_text_content;

    }
}

export const getThesis = async (input_data) => {
    try{
        document.getElementById("submitButton").style.display = "none";
        document.getElementById('thesisSection').style.display = "block";
        document.getElementById('thesisLoading').style.display = "block";
        document.getElementById("progressBar").innerHTML = `<img src='./quill.gif' /><p style="font-size: 10%">Loading main idea</p>`;

        const inputString = JSON.stringify(input_data);
        const thesis_system_prompt = "You are an expert in generating and concisely capturing the main idea for an essay assignment."+format_instructions_thesis;
        const thesis_user_prompt = "Assignment Details:\n"+ inputString+"\nPlease craft a clear and concise main idea or thesis for the assignment";
        const raw_response = await chatGPT(thesis_system_prompt, thesis_user_prompt, total_length_thesis);
        const response = JSON.stringify(raw_response);
        updateGUI("thesis", response);
        const timeout = setTimeout(window.scrollBy(0, window.innerHeight/2), 2000);
        
        getPoints(inputString, response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}


export const getPoints = async (inputString, thesis) => {
    try{
        document.getElementById("progressBar").innerHTML = `<img src='./quill.gif' /><p style="font-size: 10%">Loading Supporting Points</p>`;

        const points_max_tokens = total_length_points;
        const points_system_prompt = "You are an essay outlining expert, that can come up with supporting points to formulate an argument";
        const points_user_prompt = "Assignment: user_inputs:"+ inputString +" please list 3-5 terse supporting ideas to support the essay's main idea/thesis: "+thesis;
        //document.getElementById("progressBar").innerHTML = loadString("supporting points");
        const raw_response = await chatGPT(points_system_prompt, points_user_prompt, points_max_tokens);
        const response = JSON.stringify(raw_response);
        updateGUI("points", response);
        const timeout = setTimeout(window.scrollBy(0, window.innerHeight/2), 2000);

        getOutline(inputString, thesis, response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
export const getOutline = async (inputString, thesis, points) => {
    try{
        document.getElementById("progressBar").innerHTML = `<img src='./quill.gif' /><p style="font-size: 10%">Loading Outline</p>`;

        const outline_max_tokens = total_length_outline;
        const outline_system_prompt = "You are an essay outlining expert. DO NOT CITE DIRECT SOURCES."+format_instructions;
        const outline_user_prompt = "Assignment: user_inputs:"+ inputString +" please craft an outline for an essay using these ideas"+points+" to support "+thesis;
        //document.getElementById("progressBar").innerHTML = loadString("outline");
        const raw_response = await chatGPT(outline_system_prompt, outline_user_prompt, outline_max_tokens);
        const response = JSON.stringify(raw_response);
        updateGUI("outline", response);
        document.getElementById("progressBar").innerHTML = `<img src='./buddy.png'/>`;
    } catch (err) {
        console.error('An error occurred:', err);
    }
}