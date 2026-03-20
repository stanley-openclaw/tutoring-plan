// Lab 6 — pre-provided, no changes needed here.
// This is the entry point: it finds <div id="root"> in index.html
// and tells React to render the App component inside it.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
