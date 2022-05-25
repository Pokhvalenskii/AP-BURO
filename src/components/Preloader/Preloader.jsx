import './Preloader.css';
import logo from '../../images/logoWhite.svg';
const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='preloader__wrapper'>
        <div className='logo'>
          <div className='logo__wrapper'>
            <div className='logo__wrapper2'>
              <img className='logo__logo' src={logo} alt="Logo" />
            </div>
          </div>
          {/* <p className='logo__text'>AP BURO</p> */}
        </div>
        <div className='preloader__text'>
          <p className='preloader__text-item text-item1'>A</p>
          <p className='preloader__text-item text-item2'>P</p>
          <p className='preloader__text-item text-item3'>B</p>
          <p className='preloader__text-item text-item4'>U</p>
          <p className='preloader__text-item text-item5'>R</p>
          <p className='preloader__text-item text-item6'>O</p>
        </div>
      </div>
    </div>
  )
}

export default Preloader;