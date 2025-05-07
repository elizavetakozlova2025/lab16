import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/reset.css"
import "./css/style.css"
import { BrowserRouter } from 'react-router-dom';
import './languages/i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

