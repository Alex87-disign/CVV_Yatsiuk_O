import React from 'react';
import Social from "./Social"
import './header.css'
import myphoto from '../images/myphoto.jpg'

const HeaderUk = () => {
  return (
    <div className="header">

      <div className="photo"><img src={myphoto} width='160' height='200' /></div>
      <div className="name">
        <h2>Yatsiuk Oleksandr</h2>
        <h3>Junior Frontend Developer (React)</h3>
        <h5>Adress: Ukraine, Kyiv 02232</h5>
        <h5>Phone: +380638646262</h5>
        <h5>Email: sajanara87@gmail.com</h5>
      </div>
      <div className="summary">
        <h3 >Summary</h3>
        <p>Determined and ambitious, I am interested in IT and everything in this orbit. I deal with web programming, developing apps and building websites.Responsible proactive person, with big ambitions to achieve successful results. Looking for communicative team and interesting project for growing skills, not fastidious to a project direction or technologies.</p></div>

    </div>
  )
}
export default HeaderUk

