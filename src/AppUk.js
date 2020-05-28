import React from 'react'
import HeaderUk from './components/HeaderUk.js'
import MainUk from './components/MainUk';
import Languages from './components/Languages'
import Footer from './components/Footer'

const AppUk =()=>{
    return(
      <div className="app_wrapper">
      <Languages />
      <HeaderUk />
      <MainUk />
      <Footer/>
    </div>
        
    )
}
export default AppUk