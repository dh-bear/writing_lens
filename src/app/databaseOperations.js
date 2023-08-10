import {chatGPT} from './utils';

function loadString(step){
    var loading_embedded_div = `<p>Loading</p><img src='https://emoji.slack-edge.com/T051NFX029F/studdyhappyparty/c79fcac2d48dea37.gif' /><p>${step}</p>`;
    return loading_embedded_div;
}

const format_instructions_thesis = "";
const format_instructions = "";


function updateGUI(step, step_text_content){
    document.getElementById("progressBar").innerHTML = "<img src='./buddy.png' />";
    if (step == "thesis"){
        document.getElementById('thesisLoading').style.display = "none";
        document.getElementById("thesisText").innerText = step_text_content;
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
        const thesis_system_prompt = "You are an essay outlining expert, that can take in user inputs and craft a well written theis for an assignment."+format_instructions_thesis;
        const thesis_user_prompt = "User inputs: "+ JSON.stringify(input_data)+". Please craft a thesis or main idea";
        //document.getElementById("progressBar").innerHTML = loadString("main idea");
        const raw_response = await chatGPT(thesis_system_prompt, thesis_user_prompt);
        const response = JSON.stringify(raw_response);
        updateGUI("thesis", response);
        getPoints(input_data, response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}


export const getPoints = async (input_data, thesis) => {
    try{
        const points_system_prompt = "You are an essay outlining expert, that can come up with supporting points to formulate an argument"+format_instructions;
        const points_user_prompt = "Assignment: user_inputs:"+ JSON.stringify(input_data) +" please list 3-5 terse supporting ideas to support:"+thesis;
        //document.getElementById("progressBar").innerHTML = loadString("supporting points");
        const raw_response = await chatGPT(points_system_prompt, points_user_prompt);
        const response = JSON.stringify(raw_response);
        updateGUI("points", response);
        window.scrollBy(0, window.innerHeight/2);

        getOutline(input_data, thesis, response);
    } catch (err) {
        console.error('An error occurred:', err);
    }
}
export const getOutline = async (input_data, thesis, points) => {
    try{
        const outline_system_prompt = "You are an essay outlining expert. DO NOT CITE DIRECT SOURCES."+format_instructions;
        const outline_user_prompt = "Assignment: user_inputs:"+ JSON.stringify(input_data) +" please craft an outline for an essay using these ideas"+points+" to support "+thesis;
        //document.getElementById("progressBar").innerHTML = loadString("outline");
        const raw_response = await chatGPT(outline_system_prompt, outline_user_prompt);
        const response = JSON.stringify(raw_response);
        updateGUI("outline", response);

    } catch (err) {
        console.error('An error occurred:', err);
    }
}