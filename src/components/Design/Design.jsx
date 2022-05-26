import './Design.css'
import View12 from '../../images/q1_View12.png';

const Design = (props) => {

  let hidden = props.positionY >= 3500 ? 'design_hidden' : ''
  let showing = props.positionY >= 2200 && props.positionY <= 3500 ? 'design_showing' : ''

  return (
    <section className={`design ${hidden} ${showing}`}>
      <nav className='design__menu'>
        <p className='design__interior'>Дизайн интерьера</p>
        <p className='design__architecture'>Архитектура</p>
      </nav>
      <div className='design__cardPlaces'>
        <div className='design__card'>
          <img src={View12} alt='View12' className='design__card-image'/>
          <div className='design__card-description'>
            <div className='design__title'>Lorem, ipsum.</div>
            <div className='design__subtitle'>Lorem ipsum dolor sit amet.</div>
            <button className='design__button'>Заказать</button>
          </div>
        </div>
        <div className='design__card'>
          <img src={View12} alt='View12' className='design__card-image'/>
          <div className='design__card-description'>
            <div className='design__title'>Lorem, ipsum.</div>
            <div className='design__subtitle'>Lorem ipsum dolor sit amet.</div>
            <button className='design__button'>Заказать</button>
          </div>
        </div>
        <div className='design__card'>
          <img src={View12} alt='View12' className='design__card-image'/>
          <div className='design__card-description'>
            <div className='design__title'>Lorem, ipsum.</div>
            <div className='design__subtitle'>Lorem ipsum dolor sit amet.</div>
            <button className='design__button'>Заказать</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design;