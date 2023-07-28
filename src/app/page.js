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
        <h2>What is the topic of your essay</h2>
        <h3>The main question it should answer</h3>
        <form>
          <input type="text" />
        </form>
        <p>Other Examples: "How did the spread of coffee model imperialsm?", "Supercars from around the world", "What does the eye symbolize in the story?"</p>
      </section>

      <section>
        <h2>What class is this for</h2>
        <h3>e.g., "AP COMP", "class about biology", "8th grade history"</h3>
        <form>
          <input type="text" />
        </form>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum purus diam, at facilisis quam.</p>
      </section>

      <section>
        <h2>Choose Essay Type</h2>
        <input type="text" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum purus diam, at facilisis quam.</p>
      </section>

      <section>
        <h2>Select Reference Material</h2>
        <h3>The main question it should answer</h3>
        <form>
          <input type="text" />
        </form>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum purus diam, at facilisis quam.</p>
      </section>

      <footer>
        <p>Thank you for visiting my page!</p>
      </footer>
    </div>
  )
}