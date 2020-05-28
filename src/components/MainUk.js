import React from 'react'
import './main.css'

const MainUk = () => {
    return (
        <div className="main">
            {/* <h2>Skills</h2> */}
            <div className="skills">
                <div className="skillsinfo">
                    {/* <h5>Activities:</h5>Documents preparation, Communication with customer and dev-team, risk management, managing client expectations, providing solutions, demos, POC, managing change-requests. */}
                    <div>
                        <h5>Programming skills:</h5>
                        <ul>
                            <li>Java Script</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>GIT</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Languages:</h5>
                        <ul>
                            <li>English - upper intermediate </li>
                            <li>German - upper intermediate</li>
                            <li>Ukraine, Russian - native</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Other Computer Skills:</h5>
                        <ul>
                            <li>Adobe Photoshop</li>
                            <li>Microsoft Office</li>
                            <li>SublimeText</li>
                            <li>VSCode</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="skills_right">
                    <div className="education">
                        <h5>Education:</h5>
                        <p>September 2005 – June 2010</p>
Kyiv Economic and Finance University: Organizational Management
<p>September 2004 - June 2007</p>
Foreign language School "Prestige": German and English languages
<p>July 2008 - February 2009</p>
FachHoch Schule in Worms(Germany) : German language
<p>July 2019 - December 2019</p>
"SkillUp School"  Courses; Speciality: FrontEnd Development
<p>July 2019 - till now</p>
Self-educated by: Youtube, learning documentation, SoloLearn Courses.
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default MainUk