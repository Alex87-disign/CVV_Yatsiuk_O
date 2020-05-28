import React from 'react';
import '../header.css'
import myphoto from '../../images/myphoto.jpg'

const Header = () => {
  return (
    <div className="header">

      <div className="photo"><img src={myphoto} width='160' height='200' /></div>
      <div className="name">
        <h2>Яцюк Олександр</h2>
        <h3>Junior Frontend Developer (React)</h3>
        <h5>Адресса: Україна, Київ 02232</h5>
        <h5>Телефон: +380638646262</h5>
        <h5>Імейл: sajanara87@gmail.com</h5>
      </div>
      <div className="summary">
        <h3 >Загальна Інформація</h3>
        <p>Цілеспрямований та амбіційний, я цікавлюся сферою ІТ та всім, що з цим пов'язано. Я маю справу з веб-програмуванням, розробкою додатків та створенням веб-сайтів. Відповідальний та проактивний, з великими амбіціями щодо досягнення успішних результатів. Шукаю комунікабельну команду та цікавий проект для набуття навичок, напрямок проекту чи технології не мають вирішуючого значення.</p></div>

    </div>
  )
}
export default Header

