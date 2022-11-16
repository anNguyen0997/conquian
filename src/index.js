import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';

import BaseLayout from './components/layout/BaseLayout';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} className="flex flex-col min-h-screen">
        <BaseLayout />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);