/*
  Lab 4 — JavaScript for Dark Mode Toggle
  ==========================================
  目標 Goal:
    When the button is clicked, add the class "dark" to <body>.
    Click again → remove it. That's all it takes!

  Key concepts:
    element.classList.toggle("dark")
      → adds "dark" if it's not there, removes it if it is

    element.textContent = "..."
      → changes the text shown inside an element

  Python vs JavaScript reminder:
    if "dark" in body.classList:   →   if (body.classList.contains("dark")) {
*/

// TODO 2: Get the toggle button using its id "dark-toggle"
const toggleBtn = document.getElementById("___");

// TODO 3: Get the <body> element.
// Hint: document.body gives you the <body> directly — no id needed!
const body = ___;

// TODO 4: Add a "click" event listener to the button.
// When clicked, it should run the function below.
// Hint: toggleBtn.addEventListener("___", function () { ... });
toggleBtn.addEventListener("___", function () {

  // TODO 5: Toggle the "dark" class on body.
  // Hint: body.classList.toggle("___");
  body.classList.toggle("___");

  // TODO 6: Update the button text based on which mode is now active.
  // If dark mode is ON  → button should say "☀️ Light Mode"
  // If dark mode is OFF → button should say "🌙 Dark Mode"
  //
  // Hint: use an if statement:
  //   if (body.classList.contains("dark")) {
  //     toggleBtn.textContent = "___";
  //   } else {
  //     toggleBtn.textContent = "___";
  //   }
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "___";
  } else {
    toggleBtn.textContent = "___";
  }

});


// ── BONUS: Remember the user's preference ─────────────────────────
// localStorage lets you save small pieces of data in the browser.
// Even after the page refreshes, the preference is remembered!
//
// Uncomment the code below (remove the "// " at the start of each line)
// and fill in the blanks.

// // Save preference when button is clicked — add this inside the click listener above:
// localStorage.setItem("theme", body.classList.contains("dark") ? "___" : "___");

// // Load preference when the page first opens:
// window.addEventListener("load", function () {
//   if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("___");
//     toggleBtn.textContent = "___";
//   }
// });
