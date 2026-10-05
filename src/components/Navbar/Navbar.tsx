import React from 'react';
import { useSmoothScroll } from '../../hooks/useScrollReveal';
import TechSolLogo from '../TechSolLogo';
import './Navbar.css';

const Navbar: React.FC = () => {
  const scroll = useSmoothScroll();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo" onClick={scroll('#home')}>
          <TechSolLogo size={32} />
          TechSol
        </a>
        <nav className="nav-links">
          <a href="#home" className="active" onClick={scroll('#home')}>Home</a>
          <a href="#about" onClick={scroll('#about')}>About</a>
          <a href="#services" onClick={scroll('#services')}>Services</a>
          <a href="#projects" onClick={scroll('#projects')}>Projects</a>
          <a href="#careers" onClick={scroll('#careers')}>Careers</a>
        </nav>
        <a href="#home" className="btn btn-primary" onClick={scroll('#home')}>
          Get in Touch &rarr;
        </a>
      </div>
    </header>
  );
};

export default Navbar;
