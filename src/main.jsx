import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n.js'
import { BrowserRouter } from 'react-router-dom'
// En src/main.jsx o src/App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </StrictMode>,
)
