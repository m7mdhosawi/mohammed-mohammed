
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-navy/80 z-10"></div>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-36 relative z-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/5 text-softWhite">
          <h2 className="text-gold uppercase tracking-[0.3em] font-medium text-sm mb-4">Board-Level Human Capital Executive</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Mohammed Fallatah
          </h1>
          <p className="text-lg md:text-xl text-softWhite/80 font-light mb-8 max-w-2xl border-l-2 border-gold/50 pl-6 leading-relaxed">
            Strategic HR Governance | Organizational Transformation | Workforce Sustainability
          </p>
          <p className="text-base text-softWhite/60 max-w-xl leading-relaxed">
            With over 23 years of executive HR leadership in Saudi Arabia, I align human capital strategy with enterprise growth, ensuring governance, compliance, and risk mitigation at the boardroom level.
          </p>
          <div className="mt-12">
            <a href="#contact" className="inline-block border border-gold px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-softWhite hover:bg-gold hover:text-navy transition-all duration-300">
              Executive Consultation
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold/20 group-hover:border-gold/40 transition-colors duration-500"></div>
            <img 
              src="https://picsum.photos/seed/executive-mf/500/650" 
              alt="Mohammed Fallatah" 
              className="grayscale contrast-125 object-cover w-72 h-[450px] shadow-2xl relative z-10 border border-gold/10"
            />
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-gold/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-gold/30 to-transparent"></div>
    </section>
  );
};

export default Hero;
