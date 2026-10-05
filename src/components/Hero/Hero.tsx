import React from 'react';
import { useSmoothScroll } from '../../hooks/useScrollReveal';
import './Hero.css';

const Hero: React.FC = () => {
  const scroll = useSmoothScroll();

  return (
    <section className="hero section-white" id="home" style={{position: 'relative'}}>
      {/* Organic Leaf Background Decorators */}
      <div className="hero-leaves" aria-hidden="true">
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100 C 60 90, 100 130, 80 180 C 60 230, 0 200, 0 100 Z" fill="#dce4d5" opacity="0.6"/>
          <path d="M0 220 C 70 200, 120 250, 100 310 C 80 370, 0 350, 0 220 Z" fill="#e5ece0" opacity="0.8"/>
          <path d="M0 50 C 40 40, 70 80, 50 120 C 30 160, 0 150, 0 50 Z" fill="#dce4d5" opacity="0.4"/>
        </svg>
      </div>
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="floating-text-left" aria-hidden="true">
            <span className="hand-text">Ideas<br/>to Impact</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#5c7b68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 5 Q 20 30, 35 35 M 25 35 L 35 35 L 35 25" />
            </svg>
          </div>
          
          <span className="section-label">TECHNOLOGY | PEOPLE | PROGRESS</span>
          <h1 className="h1" style={{fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)'}}>
            We turn ideas into<br />
            technology that<br />
            <span className="text-green">moves businesses<br/>forward.</span>
          </h1>
          <p className="hero-desc text-muted">
            TechSol is an IT solutions company helping startups, SMEs and enterprises build, scale and automate with reliable, modern and cost-effective technology solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={scroll('#contact')}>
              Get in Touch &rarr;
            </a>
            <a href="#services" className="btn btn-outline" onClick={scroll('#services')}>
              Our Services
            </a>
          </div>
          <div className="hero-clients">
            <div className="avatar-group">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div className="hero-clients-text">
              <span style={{color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.4, display: 'block'}}>Trusted by businesses<br/>across industries</span>
            </div>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-bg-circle"></div>
          
          <div className="floating-text-right" aria-hidden="true">
            <span className="hand-text">Building<br/>What's Next</span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#5c7b68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M35 5 Q 20 20, 10 35 M 20 35 L 10 35 L 10 25" />
            </svg>
          </div>
          
          <img src="/hero-laptop.jpg" alt="Workspace" className="hero-image" style={{position: 'relative', zIndex: 2}} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
