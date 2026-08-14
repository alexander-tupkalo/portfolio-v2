import { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="header-logo">Alexander Tupkalo</div>
      
      <button className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>

      <nav className="header-nav">
        <ul className="header-list">
          <li><a href="#work" className="header-link" onClick={toggleMenu}>Work</a></li>
          <li><a href="#about" className="header-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" className="header-link" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;