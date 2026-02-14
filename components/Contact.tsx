
import React from 'react';
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-softWhite">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navy p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start relative z-10">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-4xl font-serif text-softWhite mb-6">Executive Contact</h2>
              <p className="text-softWhite/60 text-lg font-light mb-12 max-w-md">
                Inquiries regarding board advisory, strategic HR consulting, or leadership collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-softWhite group cursor-pointer">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <MapPin className="w-5 h-5 text-gold group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-softWhite/40 uppercase tracking-widest">Base Location</p>
                    <p className="text-lg">Saudi Arabia</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-softWhite group cursor-pointer">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Mail className="w-5 h-5 text-gold group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-softWhite/40 uppercase tracking-widest">Official Email</p>
                    <p className="text-lg">m.fallatah@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-softWhite group cursor-pointer">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <Linkedin className="w-5 h-5 text-gold group-hover:text-navy" />
                  </div>
                  <div>
                    <p className="text-xs text-softWhite/40 uppercase tracking-widest">Executive Network</p>
                    <p className="text-lg flex items-center">LinkedIn Profile <ExternalLink className="w-4 h-4 ml-2 opacity-30" /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="bg-softWhite/5 p-8 border border-softWhite/10">
                <h4 className="text-gold font-serif text-xl mb-6">Strategic Inquiry</h4>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full bg-navy border-b border-softWhite/20 py-3 text-softWhite focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Professional Email" className="w-full bg-navy border-b border-softWhite/20 py-3 text-softWhite focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Purpose of Contact" className="w-full bg-navy border-b border-softWhite/20 py-3 text-softWhite focus:border-gold outline-none transition-colors resize-none"></textarea>
                  </div>
                  <button className="w-full bg-gold py-4 text-navy font-bold uppercase tracking-widest text-xs mt-6 hover:bg-softWhite transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
