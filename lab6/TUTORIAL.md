# Lab 6 — React Tutorial

React is the most popular way to build modern websites (used by Facebook, Instagram, Airbnb, and many others).
In this lab you'll learn the four core ideas that make up 90% of React: **components, props, state, and events**.

---

## Before you start — how to run the project

```
cd lab6/exercise
npm install        ← downloads React and Vite (only needed once)
npm run dev        ← starts a local server
```

Then open **http://localhost:5173** in your browser.
Every time you save `src/App.jsx`, the browser updates instantly — no refresh needed.

---

## 1. What is React?

In labs 1–5 you wrote HTML, CSS, and JavaScript separately.
React lets you write everything together in one file using **JSX**.

| Vanilla JS (old way) | React (new way) |
|---|---|
| HTML in `.html`, logic in `.js` | Everything in one `.jsx` file |
| Update DOM manually (`textContent = ...`) | React updates the DOM for you |
| Hard to reuse UI pieces | Easy — just call a component |

React is not a replacement for HTML and JavaScript — it's built on top of them.
Under the hood, JSX compiles to regular JavaScript.

---

## 2. JSX — HTML inside JavaScript

JSX looks like HTML, but it lives inside a `.jsx` file.

```jsx
// Regular JavaScript
const name = "Sunney"

// JSX — looks like HTML, but it's JavaScript
const element = <h1>Hello, {name}!</h1>
//                         ^^^^^^^^
//                         { } lets you insert any JS expression
```

**Two rules to remember:**

| HTML | JSX |
|---|---|
| `class="badge"` | `className="badge"` (class is a reserved word in JS) |
| `<img>` | `<img />` (all tags must be closed) |

---

## 3. Components — reusable building blocks

A **component** is just a JavaScript function that returns JSX.
Think of it as a reusable custom HTML tag you define yourself.

```jsx
// Define a component
function SkillBadge({ skill }) {
  return <span className="badge">{skill}</span>
}

// Use it — as many times as you want
<SkillBadge skill="HTML" />
<SkillBadge skill="CSS" />
<SkillBadge skill="React" />
```

Python analogy:

```python
# Python function
def skill_badge(skill):
    return f'<span class="badge">{skill}</span>'
```

```jsx
// React component — same idea, different syntax
function SkillBadge({ skill }) {
  return <span className="badge">{skill}</span>
}
```

**Rules for components:**
- The function name **must start with a capital letter** (`SkillBadge`, not `skillBadge`)
- It must **return one root element** (wrap siblings in a `<div>` or `<>...</>` if needed)

---

## 4. Props — passing data into a component

**Props** are the arguments you pass to a component — like parameters in a function.

```jsx
// Passing props (like HTML attributes)
<ProfileCard name="Sunney" bio="I love design and code." />
```

```jsx
// Receiving props (destructure them in the function signature)
function ProfileCard({ name, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}
```

Python analogy:

```python
def profile_card(name, bio):
    print(f"Name: {name}")
    print(f"Bio: {bio}")

profile_card(name="Sunney", bio="I love design and code.")
```

Props flow **one way**: from parent → child.
A component cannot change its own props — it can only read them.

---

## 5. useState — making things interactive

`useState` lets a component **remember** a value that can change over time.
When the value changes, React automatically re-renders the component.

```jsx
import { useState } from 'react'

function ProfileCard() {
  //        ↓ current value    ↓ function to update it     ↓ starting value
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes}
    </button>
  )
}
```

Step by step:

| Line | What it does |
|---|---|
| `useState(0)` | Creates a state variable starting at `0` |
| `likes` | The current value — use this to display |
| `setLikes` | Call this to update the value |
| `setLikes(likes + 1)` | Adds 1 to likes, then React re-renders |

**Why not just use a regular variable?**

```jsx
// ❌ This does NOT work — changing a variable doesn't update the screen
let likes = 0
likes = likes + 1   // React doesn't know this changed

// ✅ This works — setLikes tells React to re-render
const [likes, setLikes] = useState(0)
setLikes(likes + 1)
```

---

## 6. onClick — handling events

In vanilla JS you wrote `addEventListener("click", ...)`.
In JSX, you write `onClick={...}` directly on the element.

```jsx
// Vanilla JS
button.addEventListener("click", function() {
  console.log("clicked!")
})

// JSX
<button onClick={() => console.log("clicked!")}>
  Click me
</button>
```

The value inside `onClick={...}` must be a **function** (not a function call):

```jsx
// ❌ Wrong — setLikes(likes + 1) runs immediately when the component renders
<button onClick={setLikes(likes + 1)}>

// ✅ Correct — () => ... is a function that runs only when clicked
<button onClick={() => setLikes(likes + 1)}>
```

---

## 7. How components fit together

In this lab you have three components nested inside each other:

```
App
└── ProfileCard  (receives name and bio as props)
    └── SkillBadge  (rendered once per skill using .map())
```

React renders from the **outside in**: `App` → `ProfileCard` → `SkillBadge`.
Data flows from the **outside in** too: `App` passes props to `ProfileCard`.

```jsx
// App passes data down
function App() {
  return <ProfileCard name="Sunney" bio="..." />
}

// ProfileCard receives it and uses it
function ProfileCard({ name, bio }) {
  return <h2>{name}</h2>
}
```

---

## 8. Rendering a list with `.map()`

To display a list of items, use the JavaScript `.map()` method inside JSX.

```jsx
const skills = ['HTML', 'CSS', 'JavaScript', 'React']

// .map() returns one <SkillBadge> for each item in the array
{skills.map(skill => (
  <SkillBadge key={skill} skill={skill} />
))}
```

`key=` is **required** when rendering lists — React uses it to track which item is which.
Use something unique like the item's name or an ID.

Python analogy:

```python
skills = ['HTML', 'CSS', 'JavaScript', 'React']
for skill in skills:
    print(f'<SkillBadge skill="{skill}" />')
```

---

## 9. Project file structure

```
lab6/exercise/
├── package.json          — project info and list of dependencies
├── package-lock.json     — exact versions locked for reproducibility
├── vite.config.js        — Vite config (tells Vite to use the React plugin)
├── index.html            — the only HTML file; React fills in <div id="root">
└── src/
    ├── main.jsx          — entry point: mounts <App /> into <div id="root">
    ├── App.jsx           — ← THIS is where you write your components
    └── App.css           — styles imported by main.jsx
```

You only need to edit **`src/App.jsx`** for this lab.

---

## 10. Quick reference

```jsx
// Import hooks from React
import { useState } from 'react'

// Component
function MyComponent({ propName }) {
  return <div>{propName}</div>
}

// State
const [count, setCount] = useState(0)

// Display state
<p>{count}</p>

// Update state on click
<button onClick={() => setCount(count + 1)}>+1</button>

// Render a list
{items.map(item => <li key={item}>{item}</li>)}

// Pass props
<MyComponent propName="hello" />

// Export (required at the bottom of App.jsx)
export default App
```
