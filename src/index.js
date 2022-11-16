import React from 'react';
import ReactDOM from 'react-dom/client';

import {createStore} from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';

import Rules from './components/Rules/Rules'
import Game from './components/Game/Conquian'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import App from './components/Home/App'

import BaseLayout from './components/layout/BaseLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >

      <Router>
        <BaseLayout>

          <Routes>
            <Route path="/" element={ <App/> } />
            <Route path="/rules" element={ <Rules/> } />
            <Route path="/game" element={ <Game/> } />
            <Route path="/register" element={ < Register/> } />
            <Route path="/login" element={ < Login/> } />
          </Routes>

        </BaseLayout>
      </Router>

    </Provider>
  </React.StrictMode>
);