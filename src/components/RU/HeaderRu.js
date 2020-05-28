import React from 'react';
import '../header.css'
import myphoto from '../../images/myphoto.jpg'

const HeaderRu = () => {
  return (
    <div className="header">

      <div className="photo"><img src={myphoto} width='160' height='200' /></div>
      <div className="name">
        <h2>Яцюк Александр</h2>
        <h3>Junior Frontend Developer (React)</h3>
        <h5>Адрес: Украина, Киев 02232</h5>
        <h5>Phone: +380638646262</h5>
        <h5>Email: sajanara87@gmail.com</h5>
      </div>
      <div className="summary">
        <h3 >Общаяя Информация</h3>
        <p>Целеустремленный и амбициозный, я интересуюсь IT и всем, что с этим связано. Я имею дело с програмированием, разработкой приложений и веб-сайтов. Ответственный и проактивный, с большими амбициями по достижению успешных результатов. Ищю комуникабельную команду и интерестный проект.</p></div>

    </div>
  )
}
export default HeaderRu

