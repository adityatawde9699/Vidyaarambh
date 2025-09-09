import React, { useState } from 'react';
import useRegistrationStatus from '../hooks/useRegistrationStatus.js';

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }

export default function RegistrationSection() {
    const [registrationCount, setRegistrationCount] = useState(0);
    const { link, text, disabled } = useRegistrationStatus(registrationCount);
    const tiers = [
        { name: 'Early Bird', price: '₹100', availability: 'First few Members', featured: true },
        { name: 'Late Bird', price: '₹150', availability: 'Next few Members' },
        { name: 'Final Call', price: '₹200', availability: 'Final few Members' },
    ];
    return (
        <Section id="register" className="scroll-mt-24">
            <Container>
                <div className="mb-10 md:mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Secure Your Seat</h2>
                    <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Seats are limited to 100 participants. Registration is first-come, first-served.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6" data-stagger>
                    {tiers.map((tier, idx) => (
                        <div key={idx} className={`group relative rounded-2xl border ${tier.featured ? 'border-violet-500 border-glow-strong' : 'border-slate-800'} bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer`} style={{ '--delay-index': idx }}>
                            {tier.featured && (
                                <div className="absolute -top-3 right-3 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-white shadow">Most Popular</div>
                            )}
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-white font-semibold text-lg">{tier.name}</h3>
                                <span className="font-bold" style={{ color: 'var(--accent)' }}>{tier.price}</span>
                            </div>
                            <p className="mt-2 text-slate-400">{tier.availability}</p>
                        </div>
                    ))}
                </div>
                {/* <div className="mt-8 flex flex-col items-center gap-4" data-reveal>
                    {link ? (
                        <a href={link} className="pulse-cta inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-accent hover:brightness-110 text-white transition">{text}</a>
                    ) : (
                        <button disabled className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-lg bg-slate-600 text-white opacity-70 cursor-not-allowed transition">{text}</button>
                    )} */}
                    {/* <div className="w-full max-w-xl rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                        <div className="flex items-center justify-between text-slate-300">
                            <span className="text-sm">Simulate current registrations</span>
                            <span className="text-sm font-semibold">{registrationCount} / 100</span>
                        </div>
                        <input type="range" min="0" max="120" value={registrationCount} onChange={(e) => setRegistrationCount(Number(e.target.value))} className="mt-3 w-full accent-violet-500" />
                        {registrationCount >= 100 ? (<p className="mt-2 text-sm text-rose-400">Capacity reached. Registration closed.</p>) : null}
                    </div>
                </div> */}
            </Container>
        </Section>
    );
} 