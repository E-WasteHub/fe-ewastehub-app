// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DarkModeProvider from './context/DarkMode';
import './index.css';

// Register Service Worker using VitePWA
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  import('virtual:pwa-register')
    .then(({ registerSW }) => {
      const _updateSW = registerSW({
        onNeedRefresh() {
          console.log('New content available, please refresh.');
        },
        onOfflineReady() {
          console.log('App ready to work offline.');
        },
        onRegistered(r) {
          console.log('SW Registered: ' + r);
        },
        onRegisterError(error) {
          console.log('SW registration error', error);
        },
      });
    })
    .catch(() => {
      console.log('PWA not available in development mode');
    });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
