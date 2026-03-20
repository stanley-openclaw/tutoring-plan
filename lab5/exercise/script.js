/*
  Lab 5 — script.js
  ==================
  The dark mode toggle is pre-provided from Lab 4 — no changes needed there.

  TODO 9: Replace "___" with YOUR real name.
  TODO 10: Replace ___ with the year YOU want to enter university (e.g. 2028).
*/

// TODO 9: your name
const myName = "___";

// TODO 10: your university target year
const targetYear = ___;

const yearsUntil = targetYear - 2026;
console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");

function greet(name) {
  return "Hi, I'm " + name + " 👋";
}
console.log(greet(myName));

window.addEventListener("load", function () {
  const titleElement = document.getElementById("main-title");
  if (titleElement) {
    titleElement.textContent = "Hey there! I'm " + myName + " 👋";
  }
});

// ── Dark Mode Toggle (pre-provided from Lab 4) ────────────────────
const toggleBtn = document.getElementById("dark-toggle");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light Mode";
  }
});
