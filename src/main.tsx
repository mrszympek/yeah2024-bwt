import ReactDOM from 'react-dom/client';
import '@/shared/styles/index.css';
import React from 'react';
import '@/lib/i18n';

import App from './app';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
