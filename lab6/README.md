# Lab 6 — React 入門

**學習目標：** 學習 React 的四個核心概念：元件（Component）、Props、State（useState）、事件處理（onClick）。

---

## 如何開始

```bash
cd lab6/exercise
npm install        # 下載 React 和 Vite（只需要做一次）
npm run dev        # 啟動開發伺服器
```

在瀏覽器開啟 **http://localhost:5173**。
存檔後瀏覽器會立即更新，不需要手動重新整理。

---

## 你要編輯的檔案

`exercise/src/App.jsx`

（其他所有檔案已預先準備好，不需要修改）

---

## TODO 清單

| TODO | 要做什麼 |
|------|----------|
| TODO 1 | 在 `SkillBadge` 裡用 `{skill}` 顯示 prop |
| TODO 2 | 在 `useState(___)`  裡填入初始值 `0` |
| TODO 3 | 用 `{name}` 在 `<h2>` 裡顯示名字 prop |
| TODO 4 | 把 `onClick` 的處理函式換成 `() => setLikes(likes + 1)` |
| TODO 5 | 把 `name` 和 `bio` 換成你自己的名字和自介 |

---

## 學習資源

詳細的概念說明請查看 **`TUTORIAL.md`** — 涵蓋 JSX、元件、props、useState、onClick、.map() 等所有新概念。

---

## 完成後

查看 `ans/src/App.jsx` 對照解答（可以用 `cd lab6/ans && npm install && npm run dev` 執行解答版本）。
