import React from 'react';
import prize from '../assets/prize.png';
// Assuming the placeholder is also in assets, import it for consistency.
// import prizePlaceholder from '../assets/prize-placeholder-1.png'; 

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }
function Heading({ title, subtitle }) {
    return (
        <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
            {subtitle ? <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">{subtitle}</p> : null}
        </div>
    )
}

export default function PrizesSection() {
    const items = [
        // FIX: Use the imported 'prize' variable directly.
        { text: '🏆 Two (2) Prizes for First-Year Students', img: prize },
        // FIX: Use the imported placeholder for consistency and reliability.
        { text: '🏆 One (1) Prize for Second-Year Students', img: prize },
        { text: '🏆 One (1) Prize for Third-Year Students', img: prize },
    ];
    return (
        <Section id="prizes" className="scroll-mt-24">
            <Container>
                <Heading title="Put Your Skills to the Test" subtitle="After the sessions, you'll compete in a timed challenge. Tasks will be judged by the organizers and will require you to successfully upload your code to GitHub using the Git CLI and deploy the provided ML program live." />
                <div className="grid md:grid-cols-3 gap-6" data-stagger>
                    {items.map((it, idx) => (
                        <div key={idx} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer zoom-img" style={{ '--delay-index': idx }}>
                            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow" />
                            <img src={it.img} alt="Prize" className="aspect-video w-full object-cover overflow-hidden rounded-xl border border-slate-800 bg-slate-800/40" />
                            <p className="mt-4 text-slate-300">{it.text}</p>
                            <p className="text-slate-400 text-sm">We have approximately ₹4,000 in exciting prizes to be won!</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}