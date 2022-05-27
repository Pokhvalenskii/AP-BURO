import './Header.css';
import phoneLogo from '../../images/phone.svg';
// import selectPolygon from '../../images/select-Polygon';
import instagramLogo from '../../images/instagram.svg';
import { useState } from 'react';
const Header = (props) => {

  let showing = props.positionY >= 60 ? 'header__menu_showing' : ''

  const [popup, setPopup] = useState(false);
  let active = popup ? 'header__popup_active active' : ''
  function toggle() {
    if(!popup) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }

  return (
    <header className="header">
      <div className='container'>
        <select className="header__select">
          <option className="header__select-item">Москва</option>
        </select>
        <div className="header__timetable">Ежедневно с 10:00 до 20:00</div>
        <div className="header__links">
          <a href="mailto:info@email.com" className='email-link'>Info@email.com</a>
          <a href="#phone" className='link'><img src={phoneLogo} alt="phone link" /></a>
          <a href="#instagram" className='link'><img src={instagramLogo} alt="instagram link" /></a>
        </div>
      </div>
      <div className={`header__menu ${showing}`}>
        <div className='header__menu-container'>
          <ul className='header__list'>
            <li className='header__list-item'>О студии</li>
            <li className='header__list-item'>
              <div className='header__list-select' onClick={toggle}>
                <p className='header__list-select-item'>Услуги</p>
                <div className={`select-arrow ${active}`}></div>
              </div>
            </li>
            <li className='header__list-item'>Цены</li>
            <li className='header__list-item'>Портфолио</li>
            <li className='header__list-item'>Отзывы</li>
            <li className='header__list-item'>Контакты</li>
          </ul>
          <div className='header__feedback'>
            <p className='header__phoneNumber'>+7 (800) 000-00-00</p>
            <button className='header__feedbackBtn'>Обратный звонок</button>
          </div>
        </div>
        <div className='header__popup-wrapper'>
          <div className={`header__popup ${active}`}>
            <ul className='header__popup-list'>
              <li className='header__popup-list-item'>Полный проект</li>
              <li className='header__popup-list-item'>Планировочное решение</li>
              <li className='header__popup-list-item'>Авторский надзор</li>
              <li className='header__popup-list-item'>Комплектация</li>
              <li className='header__popup-list-item'>Разовый выезд</li>
              <li className='header__popup-list-item'>Замер</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;