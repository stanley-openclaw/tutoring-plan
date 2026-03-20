/* ANSWER KEY — Lab 6 */

import { useState } from 'react'

// ── Component 1: SkillBadge ───────────────────────────────────────────────

function SkillBadge({ skill }) {
  return (
    <span className="badge">{skill}</span>  // TODO 1 ✅  {skill} displays the prop
  )
}

// ── Component 2: ProfileCard ──────────────────────────────────────────────

function ProfileCard({ name, bio }) {

  const [likes, setLikes] = useState(0)  // TODO 2 ✅  start at 0

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <div className="card">

      <h2>{name}</h2>  {/* TODO 3 ✅  {name} displays the prop */}

      <p className="bio">{bio}</p>

      <div className="skills">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* TODO 4 ✅  () => setLikes(likes + 1) adds 1 on each click */}
      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>

    </div>
  )
}

// ── Component 3: App ──────────────────────────────────────────────────────

function App() {
  return (
    <div>
      <h1>Lab 6 — My First React App</h1>

      {/* TODO 5 ✅  real name and bio passed as props */}
      <ProfileCard
        name="Sunney"
        bio="High school student from Taipei, passionate about design and technology."
      />
    </div>
  )
}

export default App
