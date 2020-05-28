import React from 'react'
import '../main.css'

const Main = () => {
    return (
        <div className="main">
            {/* <h2>Skills</h2> */}
            <div className="skills">
                <div className="skillsinfo">
                    {/* <h5>Activities:</h5>Documents preparation, Communication with customer and dev-team, risk management, managing client expectations, providing solutions, demos, POC, managing change-requests. */}
                    <div>
                        <h5>Программные навыки:</h5>
                        <ul>
                            <li>Java Script</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>GIT</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Языки:</h5>
                        <ul>
                        <li>Английский - више среднего </li>
                            <li>Немецкий - выше среднего</li>
                            <li>Украинский, Руский - родные</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Другие компьютерные навыки:</h5>
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
                        <h5>Образование:</h5>
                        <p>Сентябрь 2005 – Июнь 2010</p>
Киевский Економический Институт Менеджмента: Менеджмент Организаций
<p>Сентябрь 2004 - Июнь 2007</p>
Школа Иностранных Языков "Престиж": Немецкий и Английский языки
<p>Июль 2008 - Февраль 2009</p>
Вышая школа в городе Вормс(Германия) : Немецкий язык
<p>Июль 2019 - Декабырь 2019</p>
"SkillUp школа"  Курс: FrontEnd Development
<p>Июль 2019 - до этого времени</p>
Самообразование по фронтенду: Youtube, Google, изучение профильной документации, SoloLearn курсы.
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Main