"use client";
import React, { useState, useEffect, useRef } from 'react';
import { insertData } from './utils';
import {getThesis, getPoints, getOutline, queueATest} from './databaseOperations';

export default function Page() {
  const [topic, setTopic] = useState('');
  const [school_class, setClassFor] = useState('');
  const [essay_type, setEssayType] = useState('');
  const [reference_piece, setReference] = useState('');
  const [additional_features, setInstructions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otherEssayType, setOtherEssayType] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [referenceOption, setReferenceOption] = useState('');

  const handleReferenceChange = (e) => {
    setReferenceOption(e.target.value);
  };

  const handleReferenceDetailChange = (e) => {
    setReference(e.target.value);
  };
  
  const handleNoneClick = () => {
    setInstructions(' ');
  };

  const handleEssayTypeChange = (e) => {
    setEssayType(e.target.value);
    setIsOtherSelected(e.target.value === "Other");
  };
  const fastForwardTesting = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      'topic': (topic == "") ? "Is the American Dream Possible? Did Gatsby achieve this?" : topic,
      'school_class': (school_class == "") ? "AP Lit" : school_class,
      'essay_type': (essay_type == "") ? "Theme Analysis" : essay_type,
      'reference_piece': (reference_piece == "") ? "Great Gastby" : "The " + referenceOption + " "+ reference_piece,
      'additional_features': (additional_features == "") ? "Relate to the social disparities of the 1920s. Include a counterargument." : additional_features,
    };

    try{
      insertData(formData);
      getThesis(formData);
      window.scrollTo(0, window.innerHeight*6);
    }catch(e){
      console.log("Error: ",e)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      'topic': topic,
      'school_class': school_class,
      'essay_type': essay_type,
      'reference_piece': "The " + referenceOption + " "+ reference_piece,
      'additional_features': additional_features,
    };
    try{
      
      insertData(formData);
      getThesis(formData);
    }catch(e){
      console.log("Error: ",e)
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollPiece = document.getElementById('floaterScroll');
      var value1 = document.body.offsetHeight - 1000;
      if (window.scrollY > value1) {
          scrollPiece.style.display = 'none';
      } else {
          scrollPiece.style.display = 'block';
      }
    }

    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div>
      {/* rest of your components */}
      <div className="floaterLogo">
        {/*<a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">
          <img src="/buddy.png" />
        </a>*/}
        <button onClick={fastForwardTesting}>Dev Test</button>
        <p>Select to generate and submit inputs <br /> using a preloaded assignment</p>
      </div>

      <div id="floaterScroll" onClick={()=>window.scrollBy(0, window.innerHeight/2)}>
        <img src="/scroll-down.gif" />
      </div>

      <div id="progressBar">
        <img src="/buddy.png" />
      </div>

      <div className="title">
        <h1>Writing Lens</h1>
        <p><b>Daniel Hadar, StuddyAI Inc.</b></p>
        <p><b>A Full-Stack Prototype</b></p>
        <p>React, Next.JS, PostgreSQL, OpenAI, CSS</p>
      </div>

      <section>
        <p className='stepLabel'>1/5</p>
        <h2>What is the topic of your essay?</h2>
        <h3>The main question it should answer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Is the American Dream Possible? Did Gatsby achieve this?" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <p className='stepLabel'>2/5</p>
        <h2>What class is this for?</h2>
        <h3>e.g., "AP COMP", "class about biology", "8th grade history"</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: AP LIT" value={school_class} onChange={(e) => setClassFor(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <p className='stepLabel'>3/5</p>
        <h2>Choose Essay Type</h2>
        <h3>"Theme Analysis", "Expository", "Character Analysis", "Persuasive"</h3>
        <form>
          {/* include question mark explanation on hover */}
            <select value={essay_type} onChange={handleEssayTypeChange}>
                <optgroup label="General">
                  <option value="" disabled>Select Essay Type</option>
                  <option value="Persuasive">Persuasive</option>
                  <option value="Expository">Expository</option>
                  <option value="Compare and Contrast">Compare and Contrast</option>
                  <option value="Narrative">Narrative Essay</option>
                  <option value="Descriptive">Descriptive Essay</option>
                </optgroup>
                <optgroup label='Literature'>
                  <option value="Theme Analysis">Theme Analysis</option>
                  <option value="Character Analysis">Character Analysis</option>
                  <option value="Dramatic Analysis">Dramatic Analysis</option>
                  <option value="Poetic Analysis">Poetic Analysis</option>
                </optgroup>
                <option value="Other">Other</option>
            </select>
            {isOtherSelected && (
                  <input type="text"
                     placeholder="Please Specify"
                     value={otherEssayType}
                     onChange={(e) => setOtherEssayType(e.target.value)}
                  />
                )}
        </form>
      </section>

      <section>
        <p className='stepLabel'>4/5</p>
        <h2>Select Reference Material</h2>
        <h3>Please select the type of source material used to direct this essay outline.</h3>
        <h4>Per your selection, you may need to include specification</h4>
        <form className="refForm"onSubmit={handleSubmit}>
          <select value={referenceOption} onChange={handleReferenceChange}>
              <option value="">Select Option</option>
              <optgroup label="Select By Name">
                <option value="Article">Article</option>
                <option value="Book">Book</option>
                <option value="Writing Passage">Writing Passage</option>
              </optgroup>
              <option value="Paste Reference Text">Paste Reference Text</option>
              <option value=" ">None</option>
          </select>
          {['Article', 'Book', 'Writing Passage'].includes(referenceOption) && 
            <input 
              type="text"
              placeholder="Please paste text or input the name of source to reference" 
              value={reference_piece} 
              onChange={handleReferenceDetailChange}
            />
          }
          {(referenceOption === 'Paste Reference Text') && 
            <textarea
              value={reference_piece} // ...force the input's value to match the state variable...
              onChange={handleReferenceDetailChange} // ... and update the state variable on any edits!
            />
          }
          </form>
        {/* examples and so on */}
      </section>

      <section>
        <p className='stepLabel'>5/5</p>
        <h2>Any additional instructions or information</h2>
        <h3>Please include any further instruction to help direct the writing process for this assignment</h3>
        <form id="additional" onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Relate to the social disparities of the 1920s. Include a counterargument." value={additional_features} onChange={(e) => setInstructions(e.target.value)} />
          <button className="noneButton" type="button" onClick={handleNoneClick}>None</button>
        </form>
        {/* examples and so on */}
      </section>

      <form onSubmit={handleSubmit}>
        <button type="submit" id="submitButton" className="submitButton" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
      </form>

      
      <section id="thesisSection">
      <h3>Main Idea</h3>
        <div id="thesisLoading" className="loadingDiv">
          <img src='https://emoji.slack-edge.com/T051NFX029F/studdyhappyparty/c79fcac2d48dea37.gif' />
          <h4>Loading...</h4>
        </div>
        <p id="thesisText"></p>
      </section>

      <section id="pointsSection">
      <h3>Supporting Ideas</h3>
        <div id="pointsLoading" className="loadingDiv">
          <img src='https://emoji.slack-edge.com/T051NFX029F/studdyhappyparty/c79fcac2d48dea37.gif' />
          <h4>Loading...</h4>
        </div>
        <p id="pointsText"></p>
      </section>

      <section id="outlineSection">
        <h3>Outline</h3>
        <div id="outlineLoading" className="loadingDiv">
          <img src='https://emoji.slack-edge.com/T051NFX029F/studdyhappyparty/c79fcac2d48dea37.gif' />
          <h4>Loading...</h4>
        </div>
        <p id="outlineText"></p>
      </section>
      
    
    {/*<footer>
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">Studdy</a>
        <a href="mailto:daniel@studdy.ai">Email</a>
        <a href="https://github.com/dh-bear">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-hadar-689338253/">LinkedIn</a>
    </footer>*/}
    </div>
  )
}