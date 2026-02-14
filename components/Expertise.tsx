
import React from 'react';
import { ShieldCheck, Users, BarChart3, Target, Scale, Award } from 'lucide-react';

const expertiseItems = [
  {
    title: "Human Capital Strategy & Governance",
    icon: ShieldCheck,
    points: ["Board-level reporting & advisory", "Strategic workforce planning", "Governance framework development"]
  },
  {
    title: "Organizational Design & Workforce Optimization",
    icon: Target,
    points: ["Structural efficiency analysis", "Change management leadership", "Operating model optimization"]
  },
  {
    title: "Performance & Accountability Systems",
    icon: BarChart3,
    points: ["KPI framework design", "Executive compensation alignment", "Accountability culture building"]
  },
  {
    title: "Talent Sustainability & Succession Planning",
    icon: Users,
    points: ["C-suite succession strategies", "High-potential development", "Critical skill mapping"]
  },
  {
    title: "Compliance & Regulatory Alignment",
    icon: Scale,
    points: ["Saudi labor law mastery", "Policy standardization", "Regulatory audit management"]
  },
  {
    title: "Executive Stakeholder Engagement",
    icon: Award,
    points: ["Boardroom communications", "Internal/External brand alignment", "Partnership management"]
  }
];

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-navy text-softWhite relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl font-serif mb-4">Board-Relevant Expertise</h2>
          <p className="text-softWhite/60 tracking-widest uppercase text-sm">Strategic Core Competencies</p>
          <div className="w-24 h-1 bg-gold mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div key={index} className="border border-gold/20 p-8 hover:bg-gold/5 transition-colors group">
              <item.icon className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-serif mb-6 border-b border-gold/10 pb-4">{item.title}</h4>
              <ul className="space-y-3">
                {item.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start space-x-3 text-softWhite/70 text-sm">
                    <span className="text-gold mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
