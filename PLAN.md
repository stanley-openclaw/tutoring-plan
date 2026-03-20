# 🖥️ Tutoring Session Plan
**Student:** Sunney (安礽） — High School Beginner
**Teacher:** 沈昱宏
**Date:** March 21, 2026 (Saturday)
**Time:** 13:00 – 16:00 (3 hours)
**Location:** Louisa Coffee (路易莎), near Taipei Main Station
**Rate:** NT$1,500 / hour | **Payment:** Cash

---

## 👤 Student Background

| Item | Detail |
|---|---|
| Level | Complete beginner |
| Python | Basic knowledge |
| JavaScript | None |
| C++ | Learning but not needed for this goal |
| VSCode | Not set up yet |
| GitHub | No account yet |

**Goal:** Build a personal portfolio website for university application (備審資料)

---

## 🎯 Big Picture Strategy

> **Shortest path to the goal:** HTML → CSS → a tiny bit of JS → deploy.
> Sunney does NOT need React, Node.js, or any framework today.
> By end of session she should have a real, live webpage she can show people.

| Session | Focus | Deliverable |
|---------|-------|-------------|
| **Today (Session 1)** | Setup + HTML/CSS foundations + fill-in exercises | A styled portfolio page on GitHub Pages |
| Session 2 | Customize content, add JavaScript interactions | Polished portfolio, own domain (optional) |
| Session 3+ | React intro (if needed), extra sections | Production-ready portfolio |

---

## 📌 Teaching Plan — 3 Hours

### ⏰ Hour 1 (13:00 – 14:00) — Environment Setup *(~45 min active, 15 min buffer)*

**Objective:** Get Sunney's laptop ready so she can write and preview code.

- [ ] Install **VSCode**
  - Open a folder as a project
  - Install extensions: **Prettier** (auto-format), **Live Server** (instant preview)
- [ ] Create a **GitHub account**
  - Explain: "GitHub = Google Drive for code"
  - Apply for **GitHub Student Pack** → https://education.github.com/pack
- [ ] Download the exercise files from this repo onto her laptop
- [ ] Open `exercises/exercise-1-html.html` with Live Server → show it updates live

> **Teacher tip:** Don't linger on theory. Get the screen showing a webpage as fast as possible — that's the hook.

---

### ⏰ Hour 2 (14:00 – 15:00) — HTML & CSS via Exercises

**Objective:** Sunney understands HTML/CSS *by doing*, not by listening.

#### Step 1 — Explain HTML in 5 minutes (then hand over the keyboard)

| Concept | What to say |
|---------|-------------|
| HTML = skeleton | "It tells the browser *what* is on the page" |
| Tags | `<h1>` = big title, `<p>` = paragraph, `<a>` = link |
| Attributes | `href="..."` in `<a>`, `id="..."` on any element |

#### Step 2 — Exercise 1: `exercises/exercise-1-html.html`
Fill-in-the-blank HTML exercise — Sunney completes **8 TODOs**:

| # | What to fill in |
|---|----------------|
| 1 | Tab title (her name) |
| 2 | `<h1>` with her name |
| 3 | One-line self-description |
| 4 | 2–3 sentences about herself |
| 5 | At least 3 skill `<li>` items |
| 6 | A project or activity she's proud of |
| 7 | Description of that project |
| 8 | Her email address in an `<a href="mailto:...">` |

> After she saves, Live Server refreshes — she sees her own name on screen. 🎉

#### Step 3 — Explain CSS in 3 minutes

| Concept | What to say |
|---------|-------------|
| CSS = clothes | "It tells the browser *how it looks*" |
| Selectors | `h1 { }` targets all `<h1>` tags |
| Properties | `color`, `font-size`, `background-color`, `padding` |

#### Step 4 — Exercise 2: `exercises/exercise-2-style.css`
Fill-in-the-blank CSS — Sunney completes **16 TODOs**:

| Group | TODOs | What they learn |
|-------|-------|-----------------|
| Global | 1–3 | font-family, background-color, color |
| Header | 4–7 | background, text color, font-size, margin |
| Sections | 8–10 | font-size, margin, accent color |
| Skills | 11–12 | tag-style badges with border-radius |
| Project card | 13–14 | border, card background |
| Contact link | 15–16 | link color, hover effect |

> Each save → instant Live Server feedback. She sees the effect of every property she fills in.

---

### ⏰ Hour 3 (15:00 – 16:00) — JavaScript Intro + Deploy

**Objective:** Understand what JS does, add one interaction, then ship it.

#### Step 1 — JavaScript in 5 minutes (Python comparisons)

| Python | JavaScript |
|--------|-----------|
| `name = "Sunney"` | `const name = "Sunney";` |
| `def greet(n):` | `function greet(n) {}` |
| `print(name)` | `console.log(name)` |
| `# comment` | `// comment` |

#### Step 2 — Exercise 3: `exercises/exercise-3-script.js`
Fill-in-the-blank JS — Sunney completes **5 core TODOs** + 2 optional bonus:

| # | Concept | What to fill in |
|---|---------|----------------|
| 1 | Variables | Her name as a string |
| 2 | Variables | Her target university year |
| 3 | Functions | Return a greeting string |
| 4 | DOM | `getElementById` with correct id |
| 5 | DOM | New text for the `<h1>` |
| 6–7 | Events *(bonus)* | Button that triggers an `alert()` |

> Open DevTools (F12 → Console) to see `console.log` output — demystifies the browser.

#### Step 3 — Deploy to GitHub Pages *(15 min)*

```
1. Create a new repo on GitHub: "sunney-portfolio" (or her-name.github.io)
2. Upload the three exercise files (drag & drop on GitHub)
3. Settings → Pages → Deploy from branch: main
4. Share the live URL!
```

> She leaves with a **real, public URL** she can text her friends. That's the motivational hook for next session.

#### Step 4 — Portfolio Discussion *(10 min)*
- What sections does she want? (About / Skills / Projects / Contact)
- Color palette and style preferences
- Any reference sites she likes?

---

## 📁 Exercise Files

All exercises live in the `exercises/` folder:

| File | Exercise | Concepts |
|------|----------|----------|
| `exercise-1-html.html` | Fill in the HTML structure | Tags, attributes, semantic sections |
| `exercise-2-style.css` | Fill in the CSS styles | Selectors, colors, spacing, layout |
| `exercise-3-script.js` | Fill in the JavaScript | Variables, functions, DOM manipulation |

Each file has `// TODO N:` or `<!-- TODO N: -->` comments guiding every blank.
No blank requires writing more than one line — just fill and save.

---

## 📝 Homework (Due Before Next Session)

### ✅ Task 1 — GitHub Student Pack
- Apply at: https://education.github.com/pack
- Screenshot confirmation and send to teacher

### ✅ Task 2 — Finish the Exercises (if not done in session)
- Complete all TODOs in the three exercise files
- Make sure the page looks the way *you* want it to look
- Try the bonus JS task (button + alert)

### ✅ Task 3 — Design Your Website (No Coding!)
- On paper or in any app (Notes, Canva, etc.), sketch out:
  - What **sections** your website will have
  - What **information** goes in each section
  - Any **color or style** ideas
- Think: What do you want a university admissions officer to *feel* when they see your site?

### ✅ Task 4 — Explore the Teacher's Website
- Visit https://stanleyshen2003.github.io/me
- Right-click → "Inspect" → look at the HTML structure
- Write down **3 things** you want to copy or be inspired by

---

## 🗓️ Next Session Preview

- Rebuild the portfolio from scratch using her own content and design
- Add more sections (Projects, Skills with icons, Contact form)
- Intro to React — only if she's curious and time allows

---

## 💡 Notes for Teacher

- Sunney has zero JS/web experience — use Python comparisons at every opportunity
- **Keyboard over slides**: she learns by doing, not watching
- If she finishes exercises early, let her freestyle — change colors, add content
- The goal of today is confidence + a live URL, not technical depth
- Payment: collect **NT$4,500** cash at end of session (3 hrs × NT$1,500)
