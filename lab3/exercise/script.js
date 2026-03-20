/*
  Lab 3 — JavaScript 互動
  ==========================
  目標：用 JavaScript 為你的作品集加入互動效果。

  說明：
    找到每一個 ___ 並換成正確的值或程式碼。
    開啟開發者工具（F12 → Console 分頁）查看 console.log 的輸出！

  Python vs JavaScript 對照：
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

// ── 第一部分：變數 ────────────────────────────────────────────────

// TODO 1：把你的名字存到一個變數裡（換掉 ___）
const myName = "___";

// TODO 2：存入你想進大學的年份（數字，不加引號）
const targetYear = ___;

// 計算距離大學還有幾年 — 不需要修改這行
const yearsUntil = targetYear - 2026;

// 這行會輸出到瀏覽器的 console。按 F12 開啟開發者工具就能看到！
console.log("Hello, I am " + myName + ". University in " + yearsUntil + " years!");


// ── 第二部分：函式 ────────────────────────────────────────────────
// 函式是可以重複使用的程式碼區塊 — 和 Python 的概念一樣。

function greet(name) {
  // TODO 3：回傳一個包含名字的問候字串。
  // 輸出範例："Hi, I'm Sunney 👋"
  // 提示：用 + 把字串連接起來，例如："Hi, I'm " + name + " 👋"
  return ___;
}

// 測試一下 — 在 console 查看輸出
console.log(greet(myName));


// ── 第三部分：DOM 操作 ────────────────────────────────────────────
// DOM = 瀏覽器裡的即時 HTML 頁面。JS 可以讀取並修改它。
//
// document.getElementById("some-id")  →  找到有該 id 的元素
// element.textContent = "new text"    →  修改裡面的文字

window.addEventListener("load", function () {

  // TODO 4：取得 <h1> 元素。它的 id 是 "main-title"（查看 index.html）。
  // 在引號裡填入正確的 id：
  const titleElement = document.getElementById("___");

  if (titleElement) {
    // TODO 5：修改標題文字。它會取代 <h1> 裡原有的內容。
    // 試試："Hey there! I'm " + myName + " 👋"
    titleElement.textContent = ___;
  }


  // ── 加分題 ─────────────────────────────────────────────────────
  // 讓「Say Hello」按鈕在點擊時顯示一個彈出訊息。

  // TODO 6：取得按鈕元素。它的 id 是 "hello-btn"。
  const btn = document.getElementById("___");

  if (btn) {
    btn.addEventListener("click", function () {
      // TODO 7：寫一段要在彈出視窗顯示的訊息。
      // 試試："Hello! Nice to meet you, I'm " + myName + "!"
      alert(___);
    });
  }

});
