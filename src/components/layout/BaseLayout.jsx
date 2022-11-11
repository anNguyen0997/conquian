import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../css/BaseLayout.css'

const BaseLayout = ({children}) => {
  return (
    <div>
      <div id='main'>
        <Header />
        <br /> <br />
        {children}
      </div>  
      <Footer />
    </div>
  )
}

export default BaseLayout