import React from 'react'
import {Link} from 'react-router-dom'
import ua from '../../images/ua.png'
import uk from '../../images/uk.png'
import ru from '../../images/ru.png'
import './languages.css'
import Social from './Social'

const LanguagesUa = () => {
    return (
        <div className="languages">
            <div className="english"><Link to="/"><img src={uk} alt="uk" width="20px" height="20px" /></Link></div>
            <div className="russian"><Link to="/ru"><img src={ru} alt="uk" width="20px" height="20px" /></Link></div>
            <div className="ukranian"><Link to="/ua"><img src={ua} alt="ru" width="20px" height="20px" /></Link></div>
            
            <div><Social /></div>
        </div>
        
    )
}
export default LanguagesUa