import './Portfolio.css'
import View200000 from '../../images/we__View200000.png'
const Portfolio = (props) => {

  // let hidden = props.positionY >= 3500 ? 'portfolio_hidden' : ''
  let showing = props.positionY >= 3300 ? 'portfolio_showing' : ''

  return (
    <section className={`portfolio ${showing}`}>

    <div className='portfolio__nav'></div>

    <div className='portfolio__main'>
      <div className="portfolio__images">

        <div className="portfolio__topImages">

          <div className="portfolio__leftImage">
            <div className='portfolio__leftImage-content'>
              <p className='portfolio__leftImage-studio'>AP BURO</p>
              <h2 className='portfolio__leftImage-title'>IOO+</h2>
              <p className='portfolio__leftImage-subtitle'>реализованных проектов</p>
            </div>
          </div>

          <div className="portfolio__rightImage">
            <img src={View200000} alt='View200000' className='portfolio__image'/>
            <div className='portfolio__under-photo'>
              <div>
                <p className='portfolio__studio'>AP BURO</p>
                <p className='portfolio__title'>Кубаньспецмаш</p>
              </div>
                <button className='portfolio__btn'>&#10230;</button>
            </div>
          </div>

        </div>

        <div className="portfolio__bottomImage">
          <div className='portfolio__bottomImage-wrapper'>
            <img src={View200000} alt='View200000' className='portfolio__image'/>
          </div>
          <div className='portfolio__under-photo'>
              <div>
                <p className='portfolio__studio'>AP BURO</p>
                <p className='portfolio__title'>Кубаньспецмаш</p>
              </div>
                <button className='portfolio__btn'>&#10230;</button>
            </div>
        </div>

      </div>


      <div className='portfolio__mainImage'>
        <div className='portfolio__mainImage-wrapper'>
          <img src={View200000} alt='View200000' className='portfolio__image'/>
        </div>
        <div className='portfolio__under-photo'>
              <div>
                <p className='portfolio__studio'>AP BURO</p>
                <p className='portfolio__title'>Кубаньспецмаш</p>
              </div>
                <button className='portfolio__btn'>&#10230;</button>
            </div>
      </div>
    </div>

    <div className="portfolio__void"></div>
    </section>
  )
}

export default Portfolio;