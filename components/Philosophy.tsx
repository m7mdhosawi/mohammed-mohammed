
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-navy relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <p className="text-softWhite text-[20rem] font-serif absolute -top-20 -left-20">“</p>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-softWhite/40 uppercase tracking-[0.3em] text-xs mb-12">Leadership Philosophy</h2>
        <blockquote className="text-3xl md:text-5xl font-serif text-softWhite italic leading-tight mb-12">
          “Human capital governance is not administrative oversight — it is a <span className="text-gold">strategic lever</span> for enterprise resilience and long-term value creation.”
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-8 h-px bg-gold"></div>
          <p className="text-gold uppercase tracking-[0.2em] font-medium text-sm">Mohammed Fallatah</p>
          <div className="w-8 h-px bg-gold"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
