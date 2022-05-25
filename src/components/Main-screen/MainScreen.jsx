import './MainScreen.css'
import photo from '../../images/mainScreenImage.png'

const MainScreen = () => {
  return (
    <section className='main-screen'>
      <div className='main-screen__wrapper'>
        <nav className='main-screen__menu'>
          <div className='main-screen__logo'>LOGO</div>
          <div className='main-screen__burger-menu'>
            <div className='main-screen__burgerBtn'></div>
          </div>
        </nav>
        <div className='main-screen__content'>
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
                Ut enim ad minim veniam, quis nostrud упражнения ullamco labouris
                nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat.
              </p>
              <p className='main-screen__text'>
                Lorem ipsum dolor sit amet, conctetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud упражнения ullamco labouris
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
      {/* <div className='main-screen__net'></div> */}
    </section>
  )
}

export default MainScreen;