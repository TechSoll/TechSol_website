import React from 'react';

interface Props {
  className?: string;
  size?: number;
}

const TechSolLogo: React.FC<Props> = ({ className = '', size = 32 }) => (
  <svg 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size}
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1c1c20"/>
        <stop offset="100%" stopColor="#0a0a0c"/>
      </linearGradient>
      <radialGradient id="glowTopRight" cx="90%" cy="10%" r="70%">
        <stop offset="0%" stopColor="#ff7f00" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#ff7f00" stopOpacity="0"/>
      </radialGradient>
      <radialGradient id="glowBottomLeft" cx="10%" cy="90%" r="70%">
        <stop offset="0%" stopColor="#ff7f00" stopOpacity="0.3"/>
        <stop offset="100%" stopColor="#ff7f00" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="tGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffb000"/>
        <stop offset="100%" stopColor="#ff4400"/>
      </linearGradient>
      <linearGradient id="bulbTopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffb000"/>
        <stop offset="100%" stopColor="#ff4400"/>
      </linearGradient>
    </defs>

    <rect width="100" height="100" rx="22" fill="url(#bgGrad)"/>
    <rect width="100" height="100" rx="22" fill="url(#glowTopRight)"/>
    <rect width="100" height="100" rx="22" fill="url(#glowBottomLeft)"/>

    {/* Bulb Outer Arc (Top Orange) */}
    <path d="M 24 47 A 26 26 0 0 1 76 47" fill="none" stroke="url(#bulbTopGrad)" strokeWidth="9" strokeLinecap="butt"/>

    {/* Bulb Lower Left (White) */}
    <path d="M 24 47 C 24 62, 40 62, 40 70" fill="none" stroke="#fffaee" strokeWidth="9" strokeLinecap="round"/>
    
    {/* Bulb Lower Right (White) */}
    <path d="M 76 47 C 76 62, 60 62, 60 70" fill="none" stroke="#fffaee" strokeWidth="9" strokeLinecap="round"/>

    {/* T character */}
    <path d="M 36 40 h 28 v 7 h -10.5 v 21 h -7 v -21 h -10.5 z" fill="url(#tGrad)"/>

    {/* Bulb Base pills */}
    <rect x="40" y="75" width="20" height="6" rx="3" fill="#fffaee"/>
    <rect x="43" y="84" width="14" height="6" rx="3" fill="#fffaee"/>
  </svg>
);

export default TechSolLogo;
