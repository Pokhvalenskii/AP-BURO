import './MainScreen.css';
import photo from '../../images/mainScreenImage.png';
import close from '../../images/close.svg';
import { useState } from 'react';

const MainScreen = (props) => {
  const [popup, setPopup] = useState(false);
  const active = popup ? 'menuPopup_active' : '';

  function toggle() {
    if(!popup) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  }

  // console.log(props.positionY)
  // console.log('POS:', props.pos)

  let hidden = props.positionY >= 699 ? 'main-screen_hidden' : ''

  return (
    <section className={`main-screen ${hidden}`} id='slide-1'>
      <div className='main-screen__wrapper'>
        <nav className='main-screen__menu'>
          <div className='main-screen__logo'>LOGO</div>

          <div className='main-screen__burger-menuBtn' onClick={toggle}>
            <div className='main-screen__burgerBtn' ></div>
          </div>

          <div className={`menuPopup ${active}` }>
            <div className='menuPopup__logo'>LOGO</div>
            <button className='main-screen__closeBtn' onClick={toggle}>
              <img src={close} alt='&#215;' className='main-screen__closeImg'/>
            </button>
            <div className='menuPopup__menu'>
              <p className='menuPopup__title'>МЕНЮ</p>
              <ul className='menuPopup__list'>
                <li className='menuPopup__list-item'>О студии</li>
                <li className='menuPopup__list-item'>Услуги</li>
                <li className='menuPopup__list-item'>Цены</li>
                <li className='menuPopup__list-item'>Портфолио</li>
                <li className='menuPopup__list-item'>Отзывы</li>
                <li className='menuPopup__list-item'>Контакты</li>
              </ul>
            </div>
          </div>

        </nav>

        <div className={`main-container ${active}`}>
          <div className='main-screen__content'>
            <div className='main-screen__placeSliderBtn'>
              <button className="main-screen__sliderBtn">&#10229;</button>
              <button className="main-screen__sliderBtn">&#10230;</button>
            </div>
            <div className='main-screen__collback'>
              <p className='main-screen__phoneNumber'>+7 (800) 000-00-00</p>
              <button className='main-screen__btn'>Обратный звонок</button>
            </div>
            <div className='main-screen__description'>
              <h1 className='main-screen__title'>Эскизное решение интерьера</h1>
              <div className='main-screen__text-container'>
                <p className='main-screen__text'>
                  Lorem ipsum dolor sit amet, conctetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud ullamco labouris
                  nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat.
                </p>
                <p className='main-screen__text'>
                  Lorem ipsum dolor sit amet, conctetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud ullamco labouris
                  nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat.
                </p>
              </div>
            </div>
          </div>
          <div className='main-screen__image-place'>
            <img className='main-screen__image' src={photo} alt="Logo" />
          </div>

          <div className='main-screen__buttonPlace'>
            <div className='main-screen__buttonWrapper'>
              <div className='main-screen__titleBtn'>Выбрать</div>
              <div className='main-screen__subtitleBtn'>Посмотрите наше портфолио и определитесь с дизайном</div>
              <button className='main-screen__btnArrow'>&#10230;</button>
            </div>
            <div className='main-screen__buttonWrapper'>
              <div className='main-screen__titleBtn'>Заказать</div>
              <div className='main-screen__subtitleBtn'>Выберите тариф и закажите проект</div>
              <button className='main-screen__btnArrow'>&#10230;</button>
            </div>
          </div>

        </div>
      </div>
      {/* <button onClick={() => {
        console.log('CLICK')
          window.location.hash="slide-2";
      }}>CLICK</button> */}
    </section>
  )
}

export default MainScreen;