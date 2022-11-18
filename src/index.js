import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <BaseLayout className="flex flex-col min-h-screen"/>
    </BrowserRouter>
  </React.StrictMode>
);