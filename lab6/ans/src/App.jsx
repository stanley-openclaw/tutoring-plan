/* 解答 — Lab 6 */

import { useState } from 'react'

// ── 元件 1：SkillBadge ────────────────────────────────────────────────────

function SkillBadge({ skill }) {
  return (
    <span className="badge">{skill}</span>  // TODO 1 ✅  {skill} 顯示傳入的 prop
  )
}

// ── 元件 2：ProfileCard ───────────────────────────────────────────────────

function ProfileCard({ name, bio }) {

  const [likes, setLikes] = useState(0)  // TODO 2 ✅  初始值設為 0

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <div className="card">

      <h2>{name}</h2>  {/* TODO 3 ✅  {name} 顯示傳入的 prop */}

      <p className="bio">{bio}</p>

      <div className="skills">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* TODO 4 ✅  () => setLikes(likes + 1) 每次點擊加 1 */}
      <button className="like-btn" onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>

    </div>
  )
}

// ── 元件 3：App ───────────────────────────────────────────────────────────

function App() {
  return (
    <div>
      <h1>Lab 6 — My First React App</h1>

      {/* TODO 5 ✅  把真實姓名和自介當作 props 傳入 */}
      <ProfileCard
        name="Sunney"
        bio="High school student from Taipei, passionate about design and technology."
      />
    </div>
  )
}

export default App
