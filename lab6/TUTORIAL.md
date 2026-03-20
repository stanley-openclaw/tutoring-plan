# Lab 6 — React 教學

React 是目前最主流的網頁開發方式（Facebook、Instagram、Airbnb 都在用）。
這個 Lab 你會學到 React 最核心的四個概念：**元件、props、state、事件處理**。

---

## 開始之前 — 如何執行專案

```
cd lab6/exercise
npm install        ← 下載 React 和 Vite（只需要做一次）
npm run dev        ← 啟動本地開發伺服器
```

然後在瀏覽器開啟 **http://localhost:5173**。
每次你儲存 `src/App.jsx`，瀏覽器會立即更新 — 不需要手動重新整理。

---

## 1. 什麼是 React？

在 Lab 1–5，你分別寫 HTML、CSS 和 JavaScript 三個檔案。
React 讓你用 **JSX** 把所有東西寫在同一個檔案裡。

| 原生 JS（舊方法） | React（新方法） |
|---|---|
| HTML 在 `.html`，邏輯在 `.js` | 全部寫在一個 `.jsx` 檔 |
| 要手動更新 DOM（`textContent = ...`） | React 自動幫你更新 DOM |
| 很難重複使用 UI 片段 | 輕鬆搞定 — 直接呼叫元件就好 |

React 不是取代 HTML 和 JavaScript，而是建立在它們之上。
JSX 在底層會編譯成一般的 JavaScript。

---

## 2. JSX — 在 JavaScript 裡寫 HTML

JSX 看起來像 HTML，但它住在 `.jsx` 檔案裡。

```jsx
// 一般的 JavaScript
const name = "Sunney"

// JSX — 看起來像 HTML，但其實是 JavaScript
const element = <h1>你好，{name}！</h1>
//                         ^^^^^^^^
//                         { } 可以插入任何 JS 表達式
```

**兩條要記住的規則：**

| HTML | JSX |
|---|---|
| `class="badge"` | `className="badge"`（class 在 JS 裡是保留字） |
| `<img>` | `<img />`（所有標籤都必須關閉） |

---

## 3. 元件（Component）— 可重複使用的積木

**元件**就是一個回傳 JSX 的 JavaScript 函式。
把它想成你自己定義的、可以重複使用的客製 HTML 標籤。

```jsx
// 定義一個元件
function SkillBadge({ skill }) {
  return <span className="badge">{skill}</span>
}

// 使用它 — 想用幾次就用幾次
<SkillBadge skill="HTML" />
<SkillBadge skill="CSS" />
<SkillBadge skill="React" />
```

Python 的類比：

```python
# Python 函式
def skill_badge(skill):
    return f'<span class="badge">{skill}</span>'
```

```jsx
// React 元件 — 概念相同，語法不同
function SkillBadge({ skill }) {
  return <span className="badge">{skill}</span>
}
```

**元件的規則：**
- 函式名稱**必須以大寫字母開頭**（`SkillBadge`，不是 `skillBadge`）
- 必須**回傳一個根元素**（如果有多個並排的元素，用 `<div>` 或 `<>...</>` 包起來）

---

## 4. Props — 把資料傳進元件

**Props** 是你傳給元件的引數 — 就像函式的參數一樣。

```jsx
// 傳入 props（寫法像 HTML 屬性）
<ProfileCard name="Sunney" bio="我喜歡設計和寫程式。" />
```

```jsx
// 接收 props（在函式簽名裡解構它們）
function ProfileCard({ name, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}
```

Python 的類比：

```python
def profile_card(name, bio):
    print(f"姓名：{name}")
    print(f"自介：{bio}")

profile_card(name="Sunney", bio="我喜歡設計和寫程式。")
```

Props 是**單向流動**的：從父元件 → 子元件。
元件不能修改自己的 props，只能讀取它們。

---

## 5. useState — 讓頁面變得互動

`useState` 讓元件**記住**一個會隨時間改變的值。
當值改變時，React 會自動重新渲染該元件。

```jsx
import { useState } from 'react'

function ProfileCard() {
  //        ↓ 目前的值     ↓ 更新用的函式           ↓ 初始值
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  )
}
```

逐行說明：

| 這行 | 它做什麼 |
|---|---|
| `useState(0)` | 建立一個從 `0` 開始的 state 變數 |
| `likes` | 目前的值 — 用它來顯示 |
| `setLikes` | 呼叫它來更新值 |
| `setLikes(likes + 1)` | 把 likes 加 1，然後 React 重新渲染 |

**為什麼不能用一般的變數？**

```jsx
// ❌ 這樣不行 — 改變變數不會更新畫面
let likes = 0
likes = likes + 1   // React 不知道這個值改了

// ✅ 這樣才對 — setLikes 告訴 React 要重新渲染
const [likes, setLikes] = useState(0)
setLikes(likes + 1)
```

---

## 6. onClick — 處理事件

在原生 JS 你會寫 `addEventListener("click", ...)`。
在 JSX，你直接在元素上寫 `onClick={...}`。

```jsx
// 原生 JS
button.addEventListener("click", function() {
  console.log("被點了！")
})

// JSX
<button onClick={() => console.log("被點了！")}>
  點我
</button>
```

`onClick={...}` 裡面的值必須是一個**函式**（不是函式呼叫）：

```jsx
// ❌ 錯誤 — setLikes(likes + 1) 會在元件渲染時立刻執行
<button onClick={setLikes(likes + 1)}>

// ✅ 正確 — () => ... 是一個函式，只有在點擊時才執行
<button onClick={() => setLikes(likes + 1)}>
```

---

## 7. 元件如何組合在一起

這個 Lab 有三個元件互相嵌套：

```
App
└── ProfileCard  （接收 name 和 bio 作為 props）
    └── SkillBadge  （每個技能用 .map() 渲染一個）
```

React 從**外到內**渲染：`App` → `ProfileCard` → `SkillBadge`。
資料也從**外到內**流動：`App` 把 props 傳給 `ProfileCard`。

```jsx
// App 把資料往下傳
function App() {
  return <ProfileCard name="Sunney" bio="..." />
}

// ProfileCard 接收並使用它
function ProfileCard({ name, bio }) {
  return <h2>{name}</h2>
}
```

---

## 8. 用 `.map()` 渲染列表

要顯示一組項目，在 JSX 裡使用 JavaScript 的 `.map()` 方法。

```jsx
const skills = ['HTML', 'CSS', 'JavaScript', 'React']

// .map() 為陣列中每個項目回傳一個 <SkillBadge>
{skills.map(skill => (
  <SkillBadge key={skill} skill={skill} />
))}
```

渲染列表時**必須加上 `key=`** — React 用它來追蹤每個項目是哪一個。
用唯一的值來當 key，例如項目的名稱或 ID。

Python 的類比：

```python
skills = ['HTML', 'CSS', 'JavaScript', 'React']
for skill in skills:
    print(f'<SkillBadge skill="{skill}" />')
```

---

## 9. 專案的檔案結構

```
lab6/exercise/
├── package.json          — 專案資訊與相依套件清單
├── package-lock.json     — 鎖定確切版本，讓安裝可以重現
├── vite.config.js        — Vite 設定（告訴 Vite 使用 React 插件）
├── index.html            — 唯一的 HTML 檔案；React 會填入 <div id="root">
└── src/
    ├── main.jsx          — 進入點：把 <App /> 掛載到 <div id="root">
    ├── App.jsx           — ← 這就是你要寫元件的地方
    └── App.css           — 由 main.jsx 引入的樣式
```

這個 Lab 你只需要編輯 **`src/App.jsx`**。

---

## 10. 快速參考

```jsx
// 從 React 引入 hook
import { useState } from 'react'

// 定義元件
function MyComponent({ propName }) {
  return <div>{propName}</div>
}

// 建立 state
const [count, setCount] = useState(0)

// 顯示 state
<p>{count}</p>

// 點擊時更新 state
<button onClick={() => setCount(count + 1)}>+1</button>

// 渲染列表
{items.map(item => <li key={item}>{item}</li>)}

// 傳入 props
<MyComponent propName="hello" />

// 匯出（App.jsx 最後必須加這行）
export default App
```
