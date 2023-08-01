"use client";
import React, { useState } from 'react';

export default function Page() {
  const [topic, setTopic] = useState('');
  const [classFor, setClassFor] = useState('');
  const [essayType, setEssayType] = useState('');
  const [reference, setReference] = useState('');
  const [instructions, setInstructions] = useState('');

  // Convert the form data into a JSON object then log it
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      'Topic': topic,
      'Class': classFor,
      'EssayType': essayType,
      'Reference': reference,
      'Instructions': instructions
    };
    console.log(JSON.stringify(formData));
  };

  return (
    <div>
      {/* rest of your components */}

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
          <input type="text" value={classFor} onChange={(e) => setClassFor(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Choose Essay Type</h2>
        <h3>"Theme Analysis", "Expository", "Character Analysis", "Persuasive</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={essayType} onChange={(e) => setEssayType(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Select Reference Material</h2>
        <h3>Please refer to the name of the book, article, or passage that will be used as source material for the writing process</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <section>
        <h2>Any additional instructions or information</h2>
        <h3>Please include any further instruction to help direct the writing process for this assignment</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </form>
        {/* examples and so on */}
      </section>

      <form onSubmit={handleSubmit}>
        <button type="submit" className="submitButton">Submit</button>
      </form>

    {/*<footer>
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">Studdy</a>
        <a href="mailto:daniel@studdy.ai">Email</a>
        <a href="https://github.com/dh-bear">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-hadar-689338253/">LinkedIn</a>
      </footer>*/}
    </div>
  )
}