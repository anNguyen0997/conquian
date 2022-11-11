import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from '../src/reducers/reducer';

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import App from './components/Home/App'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={< App/>}/>
          </Routes>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>
);