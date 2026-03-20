/*
  Lab 5 — script.js
  ==================
  深色模式切換的程式碼已從 Lab 4 沿用 — 不需要修改那個部分。

  TODO 9：把 "___" 換成你真實的名字。
  TODO 10：把 ___ 換成你想進大學的年份（例如 2028）。
*/

// TODO 9：你的名字
const myName = "___";

// TODO 10：你的目標大學入學年份
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

// ── 深色模式切換（從 Lab 4 沿用）────────────────────────────────
const toggleBtn = document.getElementById("dark-toggle");
const body = document.body;

toggleBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "🌙";
  }
});
