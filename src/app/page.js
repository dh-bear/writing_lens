"use client";
import React, { useState, useEffect, useRef } from 'react';
import { insertData } from './utils';
import {getThesis, getPoints, getOutline} from './databaseOperations';

export default function Page() {
  const [topic, setTopic] = useState('');
  const [school_class, setClassFor] = useState('');
  const [essay_type, setEssayType] = useState('');
  const [reference_piece, setReference] = useState('');
  const [additional_features, setInstructions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  // TODO change the values back
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      'topic': (topic == "") ? "Is the American Dream Possible? Did Gatsby achieve this?" : topic,
      'school_class': (school_class == "") ? "AP Lit" : school_class,
      'essay_type': (essay_type == "") ? "Theme Analysis" : essay_type,
      'reference_piece': (reference_piece == "") ? "Great Gastby" : reference_piece,
      'additional_features': (additional_features == "") ? "Relate to the social disparities of the 1920s. Include a counterargument." : additional_features,
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
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">
          <img src="/buddy.png" />
        </a>
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
      </div>

      <section>
        <h2>What is the topic of your essay?</h2>
        <h3>The main question it should answer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Is the American Dream Possible? Did Gatsby achieve this?" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>What class is this for?</h2>
        <h3>e.g., "AP COMP", "class about biology", "8th grade history"</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: AP LIT" value={school_class} onChange={(e) => setClassFor(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Choose Essay Type</h2>
        <h3>"Theme Analysis", "Expository", "Character Analysis", "Persuasive</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Theme Analysis" value={essay_type} onChange={(e) => setEssayType(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Select Reference Material</h2>
        <h3>Please refer to the name of the book, article, or passage that will be used as source material for the writing process</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Great Gatsby" value={reference_piece} onChange={(e) => setReference(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Any additional instructions or information</h2>
        <h3>Please include any further instruction to help direct the writing process for this assignment</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ex: Relate to the social disparities of the 1920s. Include a counterargument." value={additional_features} onChange={(e) => setInstructions(e.target.value)} />
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