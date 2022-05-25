import './Portfolio.css'
import View200000 from '../../images/we__View200000.png'
const Portfolio = () => {
  return (
    <section className='portfolio'>

    <div className='portfolio__nav'></div>

    <div className='portfolio__main'>
      <div className="portfolio__images">
        <div className="portfolio__topImages">
          <div className="portfolio__leftImage">
            <img src={View200000} alt='View200000' className='portfolio__image'/>
          </div>
          <div className="portfolio__rightImage">
            <img src={View200000} alt='View200000' className='portfolio__image'/>
          </div>
        </div>
        <div className="portfolio__bottomImage">
          <img src={View200000} alt='View200000' className='portfolio__image'/>
        </div>
      </div>
      <div className='portfolio__mainImage'>
        <img src={View200000} alt='View200000' className='portfolio__image'/>
      </div>
    </div>

    <div className="portfolio__void"></div>
    </section>
  )
}

export default Portfolio;