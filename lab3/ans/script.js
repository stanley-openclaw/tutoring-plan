/* ANSWER KEY — Lab 3 */

// ── PART A: Variables ─────────────────────────────────────────────

// TODO 1 ✅
const myName = "Sunney";

// TODO 2 ✅
const targetYear = 2028;

const yearsUntil = targetYear - 2026;

console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");
// Console output: "Hello, I am Sunney. University in 2 years!"


// ── PART B: Function ──────────────────────────────────────────────

function greet(name) {
  // TODO 3 ✅
  return "Hi, I'm " + name + " 👋";
}

console.log(greet(myName));
// Console output: "Hi, I'm Sunney 👋"


// ── PART C: DOM Manipulation ──────────────────────────────────────

window.addEventListener("load", function () {

  // TODO 4 ✅
  const titleElement = document.getElementById("main-title");

  if (titleElement) {
    // TODO 5 ✅
    titleElement.textContent = "Hey there! I'm " + myName + " 👋";
  }

  // TODO 6 ✅
  const btn = document.getElementById("hello-btn");

  if (btn) {
    btn.addEventListener("click", function () {
      // TODO 7 ✅
      alert("Hello! Nice to meet you, I'm " + myName + "!");
    });
  }

});
