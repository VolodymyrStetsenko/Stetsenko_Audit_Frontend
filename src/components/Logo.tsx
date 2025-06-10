import React from 'react';
import logo from '../assets/stetsenko-logo.png';

const Logo = ({ className = '' }: { className?: string }) => (
  <img src={logo} alt="Stetsenko Audit Logo" className={`h-12 w-auto ${className}`} />
);

export default Logo; 