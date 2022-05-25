import './Review.css';
import star from '../../images/Star.svg';
import View18 from '../../images/we__View18.png';

const Review = () => {
  return (
    <section className="review">
      <div className="review__nav"></div>
      <div className="review__main">
        <div className='review__imagePlace'>
          <img className='review__image' src={View18} alt='View18'/>
        </div>
        <div className='review__description'>
          <div className='review__design'>Дизайн квартиры</div>
          <div className='review__designer'>Ирина Самойлова</div>
          <p className='revies__text'>
            Lorem ipsum dolor sit amet, conctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco labouris nisi ut aliquip ex ea Commodo Conquat. Duis a volute dolore dolor conquat. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, загорелся in culpa qui officia deserunt mollit anim id est Laborum.
          </p>
          <div className='review__rating'>
            <p className='review__rating-text'>
              Оценка
            </p>
            <div className='review__stars'>
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
              <img src={star} alt='star' />
            </div>
          </div>
          <div className='review__slider'>
            <button className='review__arrowBtn'>&#8592;</button>
            <p className='review__pagination'>1/10</p>
            <button className='review__arrowBtn'>&#8594;</button>
          </div>
        </div>
      </div>
      <div className="review__void"></div>
    </section>
  )
}

export default Review;