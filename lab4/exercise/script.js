/*
  Lab 4 — 深色模式切換的 JavaScript
  =====================================
  目標：
    點擊按鈕時，把 "dark" class 加到 <body>。
    再點一次 → 移除它。就這樣而已！

  核心語法：
    element.classList.toggle("dark")
      → 如果 "dark" 不存在就加上去，如果已存在就移除

    element.textContent = "..."
      → 修改元素裡顯示的文字

  Python vs JavaScript 提示：
    if "dark" in body.classList:   →   if (body.classList.contains("dark")) {
*/

// TODO 2：用 id "dark-toggle" 取得切換按鈕
const toggleBtn = document.getElementById("___");

// TODO 3：取得 <body> 元素。
// 提示：document.body 可以直接取得 <body> — 不需要 id！
const body = ___;

// TODO 4：幫按鈕加上 "click" 事件監聽器。
// 點擊時執行下方的函式。
// 提示：toggleBtn.addEventListener("___", function () { ... });
toggleBtn.addEventListener("___", function () {

  // TODO 5：切換 body 上的 "dark" class。
  // 提示：body.classList.toggle("___");
  body.classList.toggle("___");

  // TODO 6：根據目前是哪種模式，更新按鈕的文字。
  // 深色模式開啟 → 按鈕顯示 "☀️ Light Mode"
  // 深色模式關閉 → 按鈕顯示 "🌙 Dark Mode"
  //
  // 提示：用 if 判斷式：
  //   if (body.classList.contains("dark")) {
  //     toggleBtn.textContent = "___";
  //   } else {
  //     toggleBtn.textContent = "___";
  //   }
  // 深色模式開啟 → 顯示太陽圖示 ☀️
  // 深色模式關閉 → 顯示月亮圖示 🌙
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "🌙";
  } else {
    toggleBtn.textContent = "☀️";
  }

});


// ── 加分題：記住使用者的偏好設定 ──────────────────────────────────
// localStorage 讓你在瀏覽器裡儲存小量資料。
// 即使頁面重新整理，設定也會被記住！
//
// 取消下面的註解（移除每行開頭的 "// "）並填入空白處。

// // 點擊按鈕時儲存偏好 — 加到上方的 click 監聽器裡：
// localStorage.setItem("theme", body.classList.contains("dark") ? "___" : "___");

// // 頁面第一次開啟時載入偏好：
// window.addEventListener("load", function () {
//   if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("___");
//     toggleBtn.textContent = "___";
//   }
// });
