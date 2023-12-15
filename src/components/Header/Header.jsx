import { Link, useLocation } from 'react-router-dom'
import LogoSvg from '../../assets/logo.jsx'

import "./Header.css"

const Header = () => {
  const loc = useLocation().pathname
  return (
    <nav className='Header'>
      <div className='logo'>
        <LogoSvg />
      </div>
      <Link 
        to="/projects" 
        className={loc==='/projects' ? 'selected' : ''}
      >
        Projects
      </Link>
      <Link 
        to="/resume" 
        className={loc==='/resume' ? 'selected' : ''}
      >
        Resume
      </Link>
      <Link 
        to="/contact" 
        className={loc==='/contact' ? 'selected' : ''}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Header;