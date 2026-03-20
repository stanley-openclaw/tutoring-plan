# Lab 5 — 部署到 GitHub Pages

你已經建好了一個真實的作品集。現在讓我們把它放到網路上。

---

## 什麼是 GitHub Pages？

GitHub Pages 可以把任何 repository 變成一個免費的公開網站。
你的網址會是：`https://你的帳號名稱.github.io/repository名稱`

---

## 步驟說明

### 第一步 — 完成你的作品集檔案

確認你已經填好 `exercise/` 裡的所有 10 個 TODO：
- [ ] `index.html` — 你的名字、自介、技能、兩個專案、電子郵件（TODO 1–8）
- [ ] `script.js` — 你的名字和目標入學年份（TODO 9–10）

部署前，先用 Live Server 開啟 `index.html` 確認看起來沒問題。

---

### 第二步 — 建立 GitHub Repository

1. 前往 https://github.com 並登入
2. 點擊右上角的 **+** 圖示 → **New repository**
3. 命名為：`portfolio`（或 `你的帳號名稱.github.io` 可以得到更簡潔的網址）
4. 設定為 **Public**（公開）
5. 點擊 **Create repository** — 現在保持空白就好

---

### 第三步 — 上傳你的檔案

在新建的（空白）repository 頁面：

1. 點擊 **uploading an existing file**
2. 把你的三個檔案拖放進去：
   - `index.html`
   - `style.css`
   - `script.js`
3. 往下捲 → 點擊 **Commit changes**

---

### 第四步 — 啟用 GitHub Pages

1. 在你的 repository 裡，點擊 **Settings**（上方分頁）
2. 在左側選單，點擊 **Pages**
3. 在 **Branch** 底下，選擇 `main` → 資料夾選 `/root`
4. 點擊 **Save**

GitHub 會顯示：*「Your site is being deployed...」*

等待約 1–2 分鐘，然後重新整理頁面。

---

### 第五步 — 查看你的線上網站！

你的網址會出現在 Pages 設定頁面的最上方：

```
https://你的帳號名稱.github.io/portfolio
```

也在手機上開啟看看 — 確認響應式設計正常運作！

---

## 分享它

- 把網址傳給老師
- 存起來 — 你之後會把它加進大學的備審資料裡
- 如果你覺得很棒，也可以分享到 LINE 或 Instagram 😊

---

## 接下來可以做什麼？

上線後，你可以持續改進它：

| 想法 | 作法 |
|------|------|
| 加入大頭照 | `<img src="photo.jpg" alt="Sunney">` |
| 更換配色主題 | 修改 `style.css` 裡的 `--accent` 顏色 |
| 新增一個專案 | 在 `index.html` 裡複製一個 `.project-card` 區塊 |
| 區塊之間平滑捲動 | 在 CSS 的 `html {}` 裡加 `scroll-behavior: smooth` |
| 讓技能標籤載入時有動畫 | CSS `@keyframes` + `animation` 屬性 |
