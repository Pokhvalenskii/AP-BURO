import './Header.css';
import phoneLogo from '../../images/phone.svg';
// import selectPolygon from '../../images/select-Polygon';
import instagramLogo from '../../images/instagram.svg';

const Header = () => {
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
    </header>
  )
}

export default Header;