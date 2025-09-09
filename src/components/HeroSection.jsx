import React, { useEffect, useState } from 'react';
import ThreejsCanvas from './ThreejsCanvas.jsx';
import { ChevronDown } from 'lucide-react';

function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-5xl px-6", className].join(' ')}>{children}</div>; }

export default function HeroSection() {
    const scrollToRegister = (e) => { e.preventDefault(); document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' }); };

    const fullTitle = 'VidyaArambh';
    const fullSubtitle = 'From Code to Cloud: Build and Deploy Your First Machine Learning App.';
    const [typedTitle, setTypedTitle] = useState('');
    const [typedSubtitle, setTypedSubtitle] = useState('');
    const [isTypingTitle, setIsTypingTitle] = useState(true);
    const [isTypingSubtitle, setIsTypingSubtitle] = useState(false);

    useEffect(() => {
        let i = 0;
        const speed = 80; // ms per character
        const typeTitle = () => {
            if (i <= fullTitle.length) {
                setTypedTitle(fullTitle.slice(0, i));
                i += 1;
                titleTimer = setTimeout(typeTitle, speed);
            } else {
                setIsTypingTitle(false);
                setIsTypingSubtitle(true);
                startSubtitle();
            }
        };

        let titleTimer;
        let subtitleTimer;

        const startSubtitle = () => {
            let j = 0;
            const subtitleSpeed = 22; // faster for long sentence
            const step = () => {
                if (j <= fullSubtitle.length) {
                    setTypedSubtitle(fullSubtitle.slice(0, j));
                    j += 1;
                    subtitleTimer = setTimeout(step, subtitleSpeed);
                } else {
                    setIsTypingSubtitle(false);
                }
            };
            // small pause before subtitle
            subtitleTimer = setTimeout(step, 250);
        };

        typeTitle();
        return () => { clearTimeout(titleTimer); clearTimeout(subtitleTimer); };
    }, []);

    return (
        <section id="top" className="relative h-[92vh] flex items-center justify-center pt-20 overflow-hidden text-center">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <ThreejsCanvas />
            <Container>
                <div className="max-w-3xl mx-auto" data-reveal>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ color: 'var(--cyan)' }}>
                        <span>{typedTitle}</span>
                        {(isTypingTitle && typedTitle.length < fullTitle.length) ? <span className="caret" /> : null}
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-300">
                        <span>{typedSubtitle}</span>
                        {(isTypingSubtitle && typedSubtitle.length < fullSubtitle.length) ? <span className="caret" /> : null}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-slate-300">
                        <span className="inline-block rounded-full px-3 py-1 border" style={{ borderColor: 'var(--purple)', color: 'var(--text)' }}>🗓 Date: Sept 15, 2025</span>
                        <span className="inline-block rounded-full bg-slate-800/70 px-3 py-1">⏰ 2:15 PM - 5:00 PM</span>
                        <span className="inline-block rounded-full bg-slate-800/70 px-3 py-1">📍 Einstein Hall</span>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <a href="#register" onClick={scrollToRegister} className="pulse-cta inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-accent hover:brightness-110 text-white">Register Now</a>
                        <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-slate-300 hover:text-white font-medium">Learn more</a>
                    </div>
                    <div className="mt-10 flex items-center justify-center gap-2 text-slate-400 text-sm"><ChevronDown size={16} /> Scroll for details</div>
                </div>
            </Container>
        </section>
    );
}