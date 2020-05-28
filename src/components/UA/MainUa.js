import React from 'react'
import '../main.css'

const Main = () => {
    return (
        <div className="main">
            {/* <h2>Skills</h2> */}
            <div className="skills">
                <div className="skillsinfo">
                    { /* <h5>Activities:</h5>Documents preparation, Communication with customer and dev-team, risk management, managing client expectations, providing solutions, demos, POC, managing change-requests. */}
                    <div>
                        <h5>Навички:</h5>
                        <ul>
                            <li>Java Script</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>GIT</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Мови:</h5>
                        <ul>
                            <li>Англійська - вище середнього </li>
                            <li>Німецька - вище середнього</li>
                            <li>Українська, Російська - рідні</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Інші комп'ютерні навички:</h5>
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
                        <h5>Освіта:</h5>
                        <p>Вересень 2005 – Червень 2010</p>
Київський Економічний Інститут Менеджменту: Менеджмент Організацій
<p>Вересень 2004 - Червень 2007</p>
Школа Іноземних Мов "Престиж": Німецька і Англійська мови
<p>Липень 2008 - Лютий 2009</p>
Вища школа у місті Вормс(Німеччина) : Німецька мова
<p>Липень 2019 - Грудень 2019</p>
"SkillUp школа"  Курс: FrontEnd Development
<p>Липень 2019 - до цього часу</p>
Самоосвіта по фронтенду: Youtube, Google, вивчення профільної документації, SoloLearn курси.
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Main