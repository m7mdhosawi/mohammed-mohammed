
import React from 'react';
import { Gavel, FileText, Activity, Layers, ShieldAlert } from 'lucide-react';

const governanceItems = [
  { title: "Saudi Labor Law Compliance", icon: Gavel, desc: "Ensuring 100% adherence to Nitaqat and Ministry of HRSD regulations." },
  { title: "Policy Standardization", icon: FileText, desc: "Harmonizing HR policies across diverse regional business units." },
  { title: "Workforce Risk Mitigation", icon: ShieldAlert, desc: "Identifying and neutralizing potential labor and operational risks." },
  { title: "Performance Governance", icon: Activity, desc: "Implementing accountability systems that tie performance to strategy." },
  { title: "Operational Continuity", icon: Layers, desc: "Designing workforce resilience plans for long-term stability." }
];

const Governance: React.FC = () => {
  return (
    <section id="governance" className="py-24 px-6 bg-navy text-softWhite border-y border-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-8">Governance & Risk Oversight</h2>
            <p className="text-softWhite/60 text-lg font-light leading-relaxed mb-12">
              Deep expertise in safeguarding organizational integrity through robust compliance frameworks and proactive risk management strategies tailored for the Saudi industrial landscape.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {governanceItems.map((item, idx) => (
                <div key={idx} className="flex space-x-4 group">
                  <div className="bg-gold/10 p-3 rounded-sm group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg mb-1">{item.title}</h5>
                    <p className="text-xs text-softWhite/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gold/5 -rotate-3 rounded-sm"></div>
             <img 
               src="https://picsum.photos/seed/governance/800/600" 
               className="relative z-10 w-full h-[400px] object-cover grayscale opacity-80 border border-gold/20" 
               alt="Governance Excellence"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Governance;
