import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SessionsSection from './components/SessionsSection.jsx';
import MentorsSection from './components/MentorsSection.jsx';
import PrizesSection from './components/PrizesSection.jsx';
import PerksSection from './components/PerksSection.jsx';
import RegistrationSection from './components/RegistrationSection.jsx';
import PrerequisitesSection from './components/PrerequisitesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import useRevealOnScroll from './hooks/useRevealOnScroll.js';

export default function App() {
    useRevealOnScroll();
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => { document.documentElement.style.scrollBehavior = ''; };
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white">
            <Header />
            <main>
                <HeroSection />
                <MentorsSection />
                <AboutSection />
                <SessionsSection />
                
                <PrizesSection />
                <PerksSection />
                <RegistrationSection />
                <PrerequisitesSection />
                <ContactSection />
            </main>
            <Footer />

            <style>{`
        [data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity 700ms ease, transform 700ms ease; }
        [data-reveal].reveal-in { opacity: 1; transform: translateY(0); }
      `}</style>
        </div>
    );
} 