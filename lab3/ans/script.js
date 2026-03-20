/* 解答 — Lab 3 */

// ── 第一部分：變數 ────────────────────────────────────────────────

// TODO 1 ✅
const myName = "Sunney";

// TODO 2 ✅
const targetYear = 2028;

const yearsUntil = targetYear - 2026;

console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");
// console 輸出："Hello, I am Sunney. University in 2 years!"


// ── 第二部分：函式 ────────────────────────────────────────────────

function greet(name) {
  // TODO 3 ✅
  return "Hi, I'm " + name + " 👋";
}

console.log(greet(myName));
// console 輸出："Hi, I'm Sunney 👋"


// ── 第三部分：DOM 操作 ────────────────────────────────────────────

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
