import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '../style/root.css'
import { HashRouter } from 'react-router-dom'

function setAppHeightCssVar() {
  const doc = document.documentElement;
  const height = (window.visualViewport && window.visualViewport.height) || window.innerHeight;
  doc.style.setProperty('--app-height', `${height}px`);
}
setAppHeightCssVar();
if (window.visualViewport) {
  window.visualViewport.addEventListener('resize', setAppHeightCssVar);
  window.visualViewport.addEventListener('scroll', setAppHeightCssVar);
} else {
  window.addEventListener('resize', setAppHeightCssVar);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
