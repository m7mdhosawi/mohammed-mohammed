
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-softWhite font-serif text-xl tracking-widest flex items-center space-x-3">
          <span className="bg-gold text-navy w-10 h-10 flex items-center justify-center font-bold text-lg rounded-sm">MF</span>
          <span className="hidden sm:block uppercase">Mohammed Fallatah</span>
        </div>
        <div className="hidden md:flex space-x-8 text-softWhite/80 text-xs uppercase tracking-widest font-medium">
          <a href="#overview" className="hover:text-gold transition-colors">Overview</a>
          <a href="#expertise" className="hover:text-gold transition-colors">Expertise</a>
          <a href="#timeline" className="hover:text-gold transition-colors">Career</a>
          <a href="#governance" className="hover:text-gold transition-colors">Governance</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
