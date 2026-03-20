/*
  Lab 6 — src/App.jsx
  ====================
  這是你要編輯的檔案。請完成下面的 5 個 TODO。

  React = 用「元件（component）」來建立使用者介面。
  元件就是一個 JavaScript 函式，負責回傳 JSX（在 JavaScript 裡寫 HTML）。

  Python vs React 比較：

    Python                        React
    ──────────────────────        ────────────────────────────────
    def greet(name):              function Greet({ name }) {
        return f"Hi {name}"           return <p>Hi {name}</p>
                                  }

  四個核心觀念：
    Component（元件）  — 一個回傳 JSX 的函式
    Props（屬性）      — 傳進元件的資料（就像函式的參數）
    useState           — 讓元件記住一個會改變的值（例如計數器）
    JSX 規則           — 要用 className 取代 class（因為 class 在 JS 中是保留字）

  ── 如何看懂這個檔案的結構 ──────────────────────────────────────────────────
    從「最下面」開始看：<App /> 由 main.jsx 掛載到頁面上。
    App 裡面有 <ProfileCard />，ProfileCard 裡面有多個 <SkillBadge />。
    每個元件都是一個函式 → 回傳 JSX → 變成真正的 HTML。
  ─────────────────────────────────────────────────────────────────────────────
*/

import { useState } from 'react'


// ── 元件 1：SkillBadge ────────────────────────────────────────────────────
//
// 顯示「一個」技能標籤（badge）。
// { skill } 是 prop — 由下方的 ProfileCard 傳入的資料。
//
// 原生 JS：   document.createElement('span') + textContent = "HTML"
// React：     <SkillBadge skill="HTML" />   ← 簡單多了！

function SkillBadge({ skill }) {
  return (
    // TODO 1：把 ___ 換成 {skill}，讓 prop 顯示在標籤裡。
    //         在 JSX 中，用 { 大括號 } 包住任何 JavaScript 表達式。
    //         範例：<span className="badge">{someVariable}</span>
    <span className="badge">___</span>
  )
}


// ── 元件 2：ProfileCard ───────────────────────────────────────────────────
//
// 顯示完整的卡片：姓名、自介、技能標籤，還有按讚按鈕。
// 從下方的 App 接收兩個 props：name 和 bio。

function ProfileCard({ name, bio }) {

  // TODO 2：在 useState( ___ ) 裡填入初始值。
  //
  //         useState 讓元件在重新渲染之間記住一個值。
  //         當你呼叫 setLikes(...)，React 會重新渲染這個元件，
  //         顯示最新的值 — 不需要重新載入頁面！
  //
  //         useState 回傳一個有兩個項目的陣列：
  //           [目前的值, 更新用的函式]
  //         所以：const [likes, setLikes] = useState(0)
  //           → likes     = 目前的數字（從 0 開始）
  //           → setLikes  = 呼叫這個來更新數字
  //
  //         把按讚數的初始值設為 0。
  const [likes, setLikes] = useState(___)

  const skills = ['HTML', 'CSS', 'JavaScript', 'React']

  return (
    <div className="card">

      {/* TODO 3：在 <h2> 標籤裡顯示 name 這個 prop。
                  在 JSX 中，用 {大括號} 插入 JavaScript 變數。
                  把 ___ 換成正確的 JSX 表達式。
                  提示：<h2>{name}</h2> */}
      <h2>___</h2>

      <p className="bio">{bio}</p>

      {/* 技能列表 — 這部分已經幫你寫好了！
          .map() 遍歷陣列，每個項目回傳一個 <SkillBadge>。
          key= 是 React 用來追蹤清單中每個項目的必要屬性。 */}
      <div className="skills">
        {skills.map(skill => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* TODO 4：讓按鈕在點擊時呼叫 setLikes。
                  JSX 中的 onClick = 原生 JS 的 addEventListener("click", ...)。
                  處理函式必須是箭頭函式：() => ...
                  這樣它只會在點擊時執行，而不是在渲染時就立刻執行。

                  原生 JS：   btn.addEventListener("click", () => { count++ })
                  JSX：       <button onClick={() => setLikes(likes + 1)}>

                  把 ___ 換成 onClick 的處理函式。 */}
      <button className="like-btn" onClick={___}>
        ❤️ {likes}
      </button>

    </div>
  )
}


// ── 元件 3：App ───────────────────────────────────────────────────────────
//
// 根元件 — 整個頁面的起點。
// 它負責渲染 ProfileCard，並把你的資料當作 props 傳進去。

function App() {
  return (
    <div>
      <h1>Lab 6 — My First React App</h1>

      {/* TODO 5：把兩個 ___ 換成你真實的名字和一段簡短的自介。
                  Props 的寫法就像 HTML 屬性：name="Sunney"
                  ProfileCard 會以 { name } 和 { bio } 的方式接收它們。 */}
      <ProfileCard
        name="___"
        bio="___"
      />
    </div>
  )
}

export default App
