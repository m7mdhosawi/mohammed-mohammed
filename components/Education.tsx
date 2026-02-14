
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const credentials = [
    { type: "Degree", title: "Executive MBA – Human Resources" },
    { type: "Degree", title: "Bachelor Degree – HR Management" },
    { type: "Degree", title: "B.A. English Literature" },
    { type: "Certification", title: "Lean Six Sigma – Green Belt" },
    { type: "Certification", title: "Train the Trainer Certification" }
  ];

  return (
    <section className="py-24 px-6 bg-softWhite">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-4xl font-serif text-navy mb-4">Credentials & Education</h2>
          <div className="w-12 h-1 bg-gold mb-8"></div>
          <p className="text-navy/50 font-light italic">
            Foundation of academic rigor and continuous professional development.
          </p>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
          {credentials.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4 border-b border-navy/5 pb-6">
              {item.type === "Degree" ? 
                <GraduationCap className="text-gold w-6 h-6 flex-shrink-0" /> : 
                <Award className="text-gold w-6 h-6 flex-shrink-0" />
              }
              <div>
                <p className="text-[10px] uppercase tracking-widest text-navy/40 mb-1">{item.type}</p>
                <h5 className="font-serif text-navy text-lg">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
