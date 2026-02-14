
import React from 'react';

const CareerTimeline = [
  {
    title: "HR Manager – Central Region",
    company: "Zahid Group",
    period: "2011 – Present",
    desc: "Spearheading regional human capital operations for a multi-sector industrial leader. Focusing on governance, large-scale workforce management, and local labor law compliance."
  },
  {
    title: "Competence Development Leadership",
    company: "Industrial Sector Leader",
    period: "2006 – 2011",
    desc: "Directed talent development initiatives and competence mapping to align technical capabilities with industrial growth targets."
  },
  {
    title: "Earlier Technical & Educational Roles",
    company: "Various Institutions",
    period: "Pre-2006",
    desc: "Foundational years focused on English literature, technical training, and early HR operations."
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-6 bg-softWhite">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-navy">Executive Career Evolution</h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6"></div>
        </div>
        
        <div className="relative border-l-2 border-gold/20 pl-8 ml-4 space-y-16">
          {CareerTimeline.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-navy border-2 border-gold"></div>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h4 className="text-2xl font-serif text-navy">{item.title}</h4>
                <span className="text-gold font-medium tracking-widest text-sm md:ml-4">{item.period}</span>
              </div>
              <p className="text-gold/80 font-semibold mb-3 tracking-wide">{item.company}</p>
              <p className="text-navy/70 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
