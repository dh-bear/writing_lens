"use client";
import React, { useState, useEffect, useRef } from 'react';
import {insertData} from './databaseOperations';

export default function Page() {
  const [topic, setTopic] = useState('');
  const [school_class, setClassFor] = useState('');
  const [essay_type, setEssayType] = useState('');
  const [reference_piece, setReference] = useState('');
  const [additional_features, setInstructions] = useState('');

  // Convert the form data into a JSON object then log it
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      'topic': topic,
      'school_class': school_class,
      'essay_type': essay_type,
      'reference_piece': reference_piece,
      'additional_features': additional_features
    };

    // Used to display data on the web page
    document.getElementById("demo").innerText = JSON.stringify(formData.topic);

    insertData(formData.topic, formData.school_class, formData.essay_type, formData.reference_piece, formData.additional_features)
    
  };


  

  return (
    <div>
      {/* rest of your components */}
      <div className="floaterLogo">
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">
          <img src="/buddy.png" />
        </a>
      </div>

      <div className="floaterScroll" onClick={()=>window.scrollBy(0, window.innerHeight/2)}>
        <img src="/scroll-down.gif" />
      </div>

      <div className="progressBar">
        <p>Placeholder</p>
      </div>

      <div className="title">
        <h1>Writing Lens</h1>
        <p><b>Daniel Hadar, StuddyAI Inc.</b></p>
      </div>

      <section>
        <h2>What is the topic of your essay?</h2>
        <h3>The main question it should answer</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>What class is this for?</h2>
        <h3>e.g., "AP COMP", "class about biology", "8th grade history"</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={school_class} onChange={(e) => setClassFor(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Choose Essay Type</h2>
        <h3>"Theme Analysis", "Expository", "Character Analysis", "Persuasive</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={essay_type} onChange={(e) => setEssayType(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Select Reference Material</h2>
        <h3>Please refer to the name of the book, article, or passage that will be used as source material for the writing process</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={reference_piece} onChange={(e) => setReference(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Any additional instructions or information</h2>
        <h3>Please include any further instruction to help direct the writing process for this assignment</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={additional_features} onChange={(e) => setInstructions(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <form onSubmit={handleSubmit}>
        <button type="submit" className="submitButton">Submit</button>
      </form>

      <p id="demo"></p>

    <footer>
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">Studdy</a>
        <a href="mailto:daniel@studdy.ai">Email</a>
        <a href="https://github.com/dh-bear">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-hadar-689338253/">LinkedIn</a>
      </footer>
    </div>
  )
}