import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <BaseLayout className="flex flex-col min-h-screen"/>
      </BrowserRouter>

    </Provider>
  </React.StrictMode>
);