// Lab 6 — 這個檔案已經幫你準備好了，不需要修改。
// 這是程式的進入點：它找到 index.html 裡的 <div id="root">，
// 然後告訴 React 把 App 元件渲染到裡面。

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
