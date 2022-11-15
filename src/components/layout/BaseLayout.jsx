import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import AboutUs from "../AboutUs/AboutUs"
import Login from "../Login/Login"
import Register from "../Register/Register"
import ConquianBoard from './ConquianBoard'
import TienLenBoard from './TienLenBoard'


// This is the main App 

const BaseLayout = ({children}) => {
  return (
    <div>
      <div id='main'>
        <Header />

          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/aboutus" element={ <AboutUs/> } />
            <Route path="/register" element={ < Register/> } />
            <Route path="/login" element={ < Login/> } />
            <Route path="/conquian" element={ < ConquianBoard/> } />
            <Route path="/tienlen" element={ < TienLenBoard/> } />
          </Routes>

        <br /> <br />
        {children}
      </div>  
      <Footer />
    </div>
  )
}

export default BaseLayout