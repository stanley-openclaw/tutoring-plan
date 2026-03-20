# Lab 5 — Deploy to GitHub Pages 🚀

You've built a real portfolio. Now let's put it on the internet.

---

## What is GitHub Pages?

GitHub Pages turns any repository into a free, public website.
Your URL will be: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## Step-by-Step

### Step 1 — Finish your portfolio files

Make sure you've filled in all 10 TODOs in `exercise/`:
- [ ] `index.html` — your name, about, skills, two projects, email (TODOs 1–8)
- [ ] `script.js` — your name and university year (TODOs 9–10)

Open `index.html` with Live Server and check that it looks right before deploying.

---

### Step 2 — Create a GitHub repository

1. Go to https://github.com and log in
2. Click the **+** icon (top right) → **New repository**
3. Name it: `portfolio` (or `YOUR-USERNAME.github.io` for a cleaner URL)
4. Set it to **Public**
5. Click **Create repository** — leave it empty for now

---

### Step 3 — Upload your files

On the new (empty) repository page:

1. Click **uploading an existing file**
2. Drag and drop your three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Scroll down → click **Commit changes**

---

### Step 4 — Enable GitHub Pages

1. In your repository, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under **Branch**, select `main` → folder `/root`
4. Click **Save**

GitHub will show: *"Your site is being deployed..."*

Wait about 1–2 minutes, then refresh.

---

### Step 5 — Visit your live site! 🎉

Your URL will appear at the top of the Pages settings page:

```
https://YOUR-USERNAME.github.io/portfolio
```

Open it on your phone too — check that the responsive design works!

---

## Share It

- Send the URL to your teacher
- Save it somewhere — you'll add it to your university application (備審資料)
- Share on LINE or Instagram if you're proud of it 😊

---

## What's Next?

Once it's live, you can keep improving it:

| Idea | How |
|------|-----|
| Add a profile photo | `<img src="photo.jpg" alt="Sunney">` |
| Change the color theme | Edit `--accent` color in `style.css` |
| Add a new project | Copy a `.project-card` block in `index.html` |
| Smooth scroll between sections | `scroll-behavior: smooth` on `html {}` in CSS |
| Animate skill tags on load | CSS `@keyframes` + `animation` property |
