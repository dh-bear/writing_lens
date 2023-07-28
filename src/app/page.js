export default function Page() {
  return (
    <div>
      <div className="floaterLogo">
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">
          <img src="/buddy.png" />
        </a>
      </div>

      <div className="floaterScroll">
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
        <form>
          <input type="text" />
        </form>
        <p>Ex: "How did the spread of coffee model imperialsm?", "Supercars from around the world", "What does the eye symbolize in the story?"</p>
      </section>

      <section>
        <h2>What class is this for?</h2>
        <h3>e.g., "AP COMP", "class about biology", "8th grade history"</h3>
        <form>
          <input type="text" />
        </form>
        <p>Or you could write the purpose for writing this essay</p>
      </section>

      <section>
        <h2>Choose Essay Type</h2>
        <h3>"Theme Analysis", "Expository", "Character Analysis", "Persuasive</h3>
        <input type="text" />
        <p>This will help to structure the essay in the way that suits the assignment</p>
      </section>

      <section>
        <h2>Select Reference Material</h2>
        <h3>Please refer to the name of the book, article, or passage that will be used as source material for the writing process</h3>
        <form>
          <input type="text" />
        </form>
        <p>Ex: "The Great Gatsby", "Biology of Plants, by Robert Stephens", " 'A Real Education' - James Baldwin"</p>
      </section>

      <section>
        <h2>Any additional instructions or information</h2>
        <h3>Please include any further instruction to help direct the writing process for this assignment</h3>
        <form>
          <input type="text" />
        </form>
        <p>Ex: "Include a counterargument", "Emphasize the voices of the steel laborers"</p>
      </section>

      <button type="submit" className="submitButton">Submit</button>

    {/*
      <footer>
        <a href="https://apps.apple.com/us/app/studdy-ai-pocket-tutor/id6450114499">Studdy</a>
        <a href="mailto:daniel@studdy.ai">Email</a>
        <a href="https://github.com/dh-bear">GitHub</a>
        <a href="https://www.linkedin.com/in/daniel-hadar-689338253/">LinkedIn</a>
      </footer>
  */}
    </div>
  )
}