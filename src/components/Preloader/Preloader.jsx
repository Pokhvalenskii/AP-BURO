import './Preloader.css';
import logo from '../../images/logoWhite.svg';
import Vector from '../../images/logo-letter/Vector.svg'
import Vector1 from '../../images/logo-letter/Vector1.svg'
import Vector3 from '../../images/logo-letter/Vector3.svg'
import Vector4 from '../../images/logo-letter/Vector4.svg'
import Vector5 from '../../images/logo-letter/Vector5.svg'
import Vector6 from '../../images/logo-letter/Vector6.svg'


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
          <img src={Vector} alt='A' className='preloader__text-item text-item1'/>
          <img src={Vector1} alt='P' className='preloader__text-item text-item2'/>
          <img src={Vector3} alt='B' className='preloader__text-item text-item4'/>
          <img src={Vector4} alt='U' className='preloader__text-item text-item5'/>
          <img src={Vector5} alt='R' className='preloader__text-item text-item6'/>
          <img src={Vector6} alt='O' className='preloader__text-item text-item7'/>
        </div>
      </div>
    </div>
  )
}

export default Preloader;