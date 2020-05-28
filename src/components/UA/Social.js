import React from 'react'
import linkedin from '../../images/linkedin.png'
import facebook from '../../images/facebook.png'
import telegram from '../../images/telegram.png'
import git from '../../images/git.png'
import './social.css'


const Social =()=>{
    return(
        <div className="socialNetworks">
        
          {/* <div className="linkedin"><a href="https://www.facebook.com/profile.php?id=100013490269128" target="blank" alt="Linkedin"><img src={linkedin} width='22' height='22' /></a></div> */}
          <div className="facebook"><a href="https://www.facebook.com/profile.php?id=100002082741537" target="blank" alt="Facebook"><img src={facebook} width='22' height='22' /></a></div>
          <div className="telegram"><a href="https://t.me/YatsiukOleksandr" target="blank" alt="Telegram"><img src={telegram} width='22' height='22' /></a></div>
          <div className="git"><a href="https://github.com/Alex87-disign" target="blank" alt="GitHub"><img src={git} width='22' height='22' /></a></div>
        
      </div>
    )
}

export default Social