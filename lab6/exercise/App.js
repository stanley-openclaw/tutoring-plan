/*
  Lab 6 — App.js
  ==============
  React lets you build UIs with "components".
  A component is just a JavaScript FUNCTION that returns JSX.

  Python vs React:

    Python function               React component
    ─────────────────────         ─────────────────────────────────
    def greet(name):              function Greet({ name }) {
        return f"Hi {name}"           return <p>Hi {name}</p>;
                                  }

  JSX = HTML written inside JavaScript. It looks like HTML but lives in a .js file.
  Rule: use className instead of class  (class is a reserved word in JS)

  ── How to read this file ────────────────────────────────────────────────
    Start at the BOTTOM where App() and root.render() are.
    → App renders ProfileCard
    → ProfileCard renders SkillBadge (once per skill)
    → Each component returns JSX that becomes real HTML in the browser
  ─────────────────────────────────────────────────────────────────────────
*/


// ── Component 1: SkillBadge ───────────────────────────────────────────────
//
// This component shows ONE skill pill badge.
// { skill } is a "prop" — data passed in from the parent (ProfileCard below).
//
// Vanilla JS way:            React way:
//   <span>HTML</span>          <SkillBadge skill="HTML" />

function SkillBadge({ skill }) {
  return (
    // TODO 1: Replace ___ with {skill} to display the prop text inside the badge.
    //         In JSX, use curly braces { } to insert any JavaScript value.
    //         Example: <span className="badge">{someVariable}</span>
    <span className="badge">___</span>
  );
}


// ── Component 2: ProfileCard ──────────────────────────────────────────────
//
// This component shows the full card: name, bio, skill badges, and a like button.
// It receives two props from App: { name } and { bio }.

function ProfileCard({ name, bio }) {

  // TODO 2: Add the starting number inside React.useState( ___ ).
  //         useState lets the component remember the like count across clicks.
  //         Start it at 0.
  //
  //         React.useState(0) returns an array: [currentValue, setterFunction]
  //         const [likes, setLikes] = React.useState(0);
  //           → likes     = current number (starts at 0)
  //           → setLikes  = function that updates the number and re-renders
  const [likes, setLikes] = React.useState(___);

  // These are the skill badges to display — already set up for you!
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="card">

      {/* TODO 3: Show the name prop inside an <h2> tag.
                  Hint: <h2>{name}</h2>
                  (Replace ___ with the right JSX expression) */}
      <h2>___</h2>

      <p className="bio">{bio}</p>

      {/* Skills — already complete. Notice:
            .map() loops over the array and returns one SkillBadge per item.
            key= is required by React to track each item in a list. */}
      <div className="skills">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* TODO 4: Make the button increase likes by 1 when clicked.
                  onClick in JSX works like addEventListener("click", ...) in vanilla JS.

                  Vanilla JS:   button.addEventListener("click", function() { count++ })
                  JSX:          <button onClick={() => setLikes(likes + 1)}>

                  Replace ___ with the correct onClick handler.
                  Hint: onClick={() => setLikes(likes + 1)} */}
      <button className="like-btn" onClick={___}>
        ❤️ {likes}
      </button>

    </div>
  );
}


// ── Component 3: App ──────────────────────────────────────────────────────
//
// App is the ROOT component — the starting point of the whole page.
// It renders ProfileCard and passes YOUR info as props.

function App() {
  return (
    <div>
      <h1>Lab 6 — My First React App</h1>

      {/* TODO 5: Replace both ___ with YOUR real name and a short one-sentence bio.
                  Props work like HTML attributes:  name="Sunney"  bio="..."
                  The ProfileCard component will receive them as { name } and { bio }. */}
      <ProfileCard
        name="___"
        bio="___"
      />

    </div>
  );
}


// ── Render ─────────────────────────────────────────────────────────────────
// This is how React connects to your HTML.
// It finds <div id="root"> in index.html and puts the App component inside it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
