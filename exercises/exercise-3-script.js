/*
  練習 3 — JavaScript 互動 (JavaScript Interactivity)
  目標: 讓你的網站動起來！
  Goal: Add a little interactivity to your portfolio.

  說明: 找到所有寫著 "___" 的地方，把它們換成正確的內容。
  Instructions: Fill in every ___ with the correct value or code.

  Python 對照 / Python comparison:
    Python:       name = "Sunney"
    JavaScript:   const name = "Sunney";

    Python:       def greet():
    JavaScript:   function greet() {}
*/

// ── PART A: Variables ─────────────────────────────────────────────
// TODO 1: Store your name in a variable (replace the ___)
const myName = "___";

// TODO 2: Store the year you want to enter university
const targetYear = ___;

// Calculate how many years from now (2026) until university
const yearsUntil = targetYear - 2026;

// This line prints to the browser console — open DevTools (F12) to see it!
console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");


// ── PART B: Function ──────────────────────────────────────────────
// A function is a reusable block of code — just like in Python.
//
// Python version:
//   def greet(name):
//       return "Hi, I'm " + name
//
// JavaScript version below — fill in the blank:

function greet(name) {
  // TODO 3: Return a greeting string that includes the name
  // Example output: "Hi, I'm Sunney 👋"
  return "___" + name + "___";
}

// Test it — result should appear in the browser console
console.log(greet(myName));


// ── PART C: DOM Manipulation ──────────────────────────────────────
// DOM = the live HTML page. JavaScript can read and change it.
//
// document.getElementById("some-id")  →  finds the element with that id
// .textContent = "..."                →  changes its text

// This code runs as soon as the page finishes loading
window.addEventListener("load", function () {

  // TODO 4: Replace ___ with the id of the <h1> element in exercise-1-html.html
  //   Hint: look for id="___" near the <h1> tag.
  //   If there's no id yet, add one: <h1 id="main-title">
  const titleElement = document.getElementById("___");

  if (titleElement) {
    // TODO 5: Change the greeting text. It will replace whatever is in the <h1>.
    // Try something like: "Hey there! I'm " + myName + " 👋"
    titleElement.textContent = "___";
  }


  // ── BONUS (optional) ──────────────────────────────────────────
  // Make a button that shows an alert when clicked.
  // Uncomment the lines below (remove the "// " at the start) and fill in the blanks.

  // TODO 6 (bonus): In exercise-1-html.html, add this button somewhere in <body>:
  //   <button id="hello-btn">Say Hello</button>
  // Then fill in the blanks below:

  // const btn = document.getElementById("___");
  // if (btn) {
  //   btn.addEventListener("click", function () {
  //     // TODO 7: What message should pop up when the button is clicked?
  //     alert("___");
  //   });
  // }

});
