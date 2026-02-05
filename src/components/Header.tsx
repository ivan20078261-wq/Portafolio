import { useState } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

interface HeaderProps {
  scrolled: boolean;
}

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Estudios', href: '#education' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">IM</span>
          <span className="logo-name">Ivan Molina</span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
