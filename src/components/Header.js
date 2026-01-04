//src/components/header.js
//This is the header component for little lemon react app
import logo from '../assets/Logo-home-header.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='Header'>
        <Link to='/Home'>
            <img src={logo} alt='little lemon logo to header' className='HeaderLogo'/>
        </Link>
        <nav className='HeaderNav'>
          <ul>
            <li>
              <Link to='/Home'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
            <li>
              <Link to='/Menu'>Menu</Link>
            </li>
            <li><Link to='/Reservations'>Reservations</Link>
            </li>
            <li><Link to='/OrderOnline'>Order Online</Link>
            </li>
            <li><Link to='/Login'>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;