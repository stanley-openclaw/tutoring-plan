/*
  Lab 6 — src/App.jsx
  ====================
  THIS is the file you edit. Fill in all 5 TODOs below.

  React = building UIs with "components".
  A component is just a function that returns JSX (HTML written inside JavaScript).

  Python vs React:

    Python                        React
    ──────────────────────        ────────────────────────────────
    def greet(name):              function Greet({ name }) {
        return f"Hi {name}"           return <p>Hi {name}</p>
                                  }

  Key ideas:
    Component  — a function that returns JSX
    Props      — data passed into a component  (like function arguments)
    useState   — lets a component remember a changing value (e.g. a counter)
    JSX rule   — use className instead of class  (class is a reserved word in JS)

  ── How to trace this file ──────────────────────────────────────────────────
    Start at the BOTTOM: <App /> is rendered by main.jsx into the page.
    App renders <ProfileCard />, which renders one <SkillBadge /> per skill.
    Each component is a function → returns JSX → becomes real HTML.
  ────────────────────────────────────────────────────────────────────────────
*/

import { useState } from 'react'


// ── Component 1: SkillBadge ───────────────────────────────────────────────
//
// Renders ONE skill pill badge.
// { skill } is a prop — data passed in from ProfileCard below.
//
// Vanilla JS:   document.createElement('span') + textContent = "HTML"
// React:        <SkillBadge skill="HTML" />   ← much simpler!

function SkillBadge({ skill }) {
  return (
    // TODO 1: Replace ___ with {skill} to display the prop inside the badge.
    //         In JSX, wrap any JavaScript expression in { curly braces }.
    //         Example: <span className="badge">{someVariable}</span>
    <span className="badge">___</span>
  )
}


// ── Component 2: ProfileCard ──────────────────────────────────────────────
//
// Renders the full card: name, bio, skill badges, and a like button.
// Receives two props from App below: name and bio.

function ProfileCard({ name, bio }) {

  // TODO 2: Fill in the starting value inside useState( ___ ).
  //
  //         useState lets the component remember a value across re-renders.
  //         When you call setLikes(...), React re-renders this component
  //         with the new value — no page reload needed!
  //
  //         useState returns an array with two items:
  //           [currentValue, setterFunction]
  //         So: const [likes, setLikes] = useState(0)
  //           → likes     = current number (starts at 0)
  //           → setLikes  = call this to update the number
  //
  //         Start the like count at 0.
  const [likes, setLikes] = useState(___)

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <div className="card">

      {/* TODO 3: Show the name prop inside an <h2> tag.
                  In JSX, use {curly braces} to insert a JavaScript variable.
                  Replace ___ with the correct JSX expression.
                  Hint: <h2>{name}</h2> */}
      <h2>___</h2>

      <p className="bio">{bio}</p>

      {/* Skills row — already complete for you!
          .map() loops over the array and returns one <SkillBadge> per item.
          key= is required by React to keep track of each item in the list. */}
      <div className="skills">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* TODO 4: Make the button call setLikes when clicked.
                  onClick in JSX = addEventListener("click", ...) in vanilla JS.
                  The handler must be an arrow function: () => ...
                  so it only runs when clicked, not immediately.

                  Vanilla JS:   btn.addEventListener("click", () => { count++ })
                  JSX:          <button onClick={() => setLikes(likes + 1)}>

                  Replace ___ with the onClick handler. */}
      <button className="like-btn" onClick={___}>
        ❤️ {likes}
      </button>

    </div>
  )
}


// ── Component 3: App ──────────────────────────────────────────────────────
//
// The root component — the starting point of the whole page.
// It renders ProfileCard and passes your info as props.

function App() {
  return (
    <div>
      <h1>Lab 6 — My First React App</h1>

      {/* TODO 5: Replace both ___ with YOUR real name and a short bio.
                  Props are passed like HTML attributes: name="Sunney"
                  ProfileCard will receive them as { name } and { bio }. */}
      <ProfileCard
        name="___"
        bio="___"
      />
    </div>
  )
}

export default App
