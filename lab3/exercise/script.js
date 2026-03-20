/*
  Lab 3 — JavaScript 互動 (JavaScript Interactivity)
  =====================================================
  目標 Goal:
    Add interactivity to your portfolio using JavaScript.

  說明 Instructions:
    Find every ___ and replace it with the correct value or code.
    Open DevTools (F12 → Console tab) to see console.log output!

  Python vs JavaScript 對照:
  ┌─────────────────────────────┬──────────────────────────────────┐
  │ Python                      │ JavaScript                       │
  ├─────────────────────────────┼──────────────────────────────────┤
  │ name = "Sunney"             │ const name = "Sunney";           │
  │ age = 17                    │ const age = 17;                  │
  │ def greet(n):               │ function greet(n) {              │
  │     return "Hi " + n        │   return "Hi " + n;              │
  │                             │ }                                │
  │ print(name)                 │ console.log(name);               │
  └─────────────────────────────┴──────────────────────────────────┘
*/

// ── PART A: Variables ─────────────────────────────────────────────

// TODO 1: Store your name in a variable (replace the ___)
const myName = "___";

// TODO 2: Store the year you want to enter university (a number, no quotes)
const targetYear = ___;

// Calculate years until university — no need to change this line
const yearsUntil = targetYear - 2026;

// This prints to the browser console. Press F12 to open DevTools and see it!
console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");


// ── PART B: Function ──────────────────────────────────────────────
// A function is a reusable block of code — same idea as Python.

function greet(name) {
  // TODO 3: Return a greeting string that uses the name.
  // Example output: "Hi, I'm Sunney 👋"
  // Hint: use the + operator to join strings, like: "Hi, I'm " + name + " 👋"
  return ___;
}

// Test it — check the console for the output
console.log(greet(myName));


// ── PART C: DOM Manipulation ──────────────────────────────────────
// DOM = the live HTML page. JS can read it and change it.
//
// document.getElementById("some-id")  →  finds the element with that id
// element.textContent = "new text"    →  changes the text inside it

window.addEventListener("load", function () {

  // TODO 4: Get the <h1> element. Its id is "main-title" (check index.html).
  // Fill in the id string inside the quotes:
  const titleElement = document.getElementById("___");

  if (titleElement) {
    // TODO 5: Change the heading text. It will replace whatever is in the <h1>.
    // Try: "Hey there! I'm " + myName + " 👋"
    titleElement.textContent = ___;
  }


  // ── BONUS ─────────────────────────────────────────────────────
  // Make the "Say Hello" button show a pop-up message when clicked.

  // TODO 6: Get the button element. Its id is "hello-btn".
  const btn = document.getElementById("___");

  if (btn) {
    btn.addEventListener("click", function () {
      // TODO 7: Write a message to show in the pop-up.
      // Try: "Hello! Nice to meet you, I'm " + myName + "!"
      alert(___);
    });
  }

});
