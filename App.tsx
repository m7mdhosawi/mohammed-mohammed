
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Expertise from './components/Expertise';
import Timeline from './components/Timeline';
import Governance from './components/Governance';
import Education from './components/Education';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold/30 selection:text-navy">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Expertise />
        <Timeline />
        <Governance />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <footer className="bg-navy py-12 px-6 border-t border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-softWhite/60 text-sm">
          <p>© {new Date().getFullYear()} Mohammed Fallatah. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 italic font-serif">Authority. Governance. Maturity.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
