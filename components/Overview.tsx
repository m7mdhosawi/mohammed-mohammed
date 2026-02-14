
import React from 'react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-softWhite">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-navy/20 text-7xl font-serif absolute -mt-10 pointer-events-none select-none">Biography</h3>
          <h2 className="text-3xl md:text-4xl font-serif text-navy relative z-10">Strategic Executive Overview</h2>
          <div className="w-16 h-0.5 bg-gold mt-4"></div>
        </div>
        
        <div className="prose prose-lg prose-navy max-w-none text-navy/80 leading-loose space-y-8 font-light italic text-xl text-center md:text-left">
          <p>
            With a distinguished career spanning over <span className="text-navy font-semibold">23 years</span>, Mohammed Fallatah stands as a pillar of Human Capital leadership in the Kingdom of Saudi Arabia. His journey is defined by a commitment to organizational excellence and the strategic alignment of workforce dynamics with macro-economic enterprise objectives.
          </p>
          <p>
            His expertise lies at the intersection of <span className="text-gold font-medium">Governance, Compliance, and Risk Mitigation</span>. Having held regional HR oversight roles within large-scale industrial environments, Mohammed has consistently demonstrated an ability to navigate complex regulatory landscapes while fostering environments of accountability and performance.
          </p>
          <p>
            A trusted advisor to corporate boards, he provides critical insights that bridge the gap between operational HR and high-level strategy. His leadership philosophy is rooted in workforce sustainability, ensuring that organizational design and talent development are not just functional requirements, but core drivers of long-term value creation and enterprise resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
