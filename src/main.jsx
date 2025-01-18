import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/FSN5-GRUPO02-AUTOPECAS">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
