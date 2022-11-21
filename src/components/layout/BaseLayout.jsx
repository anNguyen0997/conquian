import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from "../AboutUs/AboutUs"
import Login from "../Login/Login"
import Register from "../Register/Register"
import Conquian from '../Game/Conquian'
import LobbyView from '../Game/LobbyView'
import TienLenBoard from './TienLenBoard'
import NotFound404 from '../Home/NotFound404'
import ForgotPassword from '../Login/ForgotPassword'


// This is the main App 

const BaseLayout = ({children}) => {
  return (
    <div>
      <div id='main'>
        <Header />

          <Routes>
            <Route path="*" element={ <NotFound404/> } />
            <Route path="/" element={ <Home/> } />
            <Route path="/aboutus" element={ <AboutUs/> } />
            <Route path="/register" element={ < Register/> } />
            <Route path="/login" element={ < Login/> } />
            <Route path="/conquian" element={ < LobbyView/> } />
            <Route path="/tienlen" element={ < TienLenBoard/> } />
            <Route path="/resetpassword" element={ < ForgotPassword/> } />
          </Routes>

        <br /> <br />
        {children}
      </div>  
      <Footer />
    </div>
  )
}

export default BaseLayout