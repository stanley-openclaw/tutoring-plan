/* ANSWER KEY — Lab 4 */

// TODO 2 ✅
const toggleBtn = document.getElementById("dark-toggle");

// TODO 3 ✅
const body = document.body;

// TODO 4 ✅
toggleBtn.addEventListener("click", function () {

  // TODO 5 ✅
  body.classList.toggle("dark");

  // TODO 6 ✅
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }

  // BONUS ✅ — save preference
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");

});

// BONUS ✅ — load preference on page open
window.addEventListener("load", function () {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }
});
