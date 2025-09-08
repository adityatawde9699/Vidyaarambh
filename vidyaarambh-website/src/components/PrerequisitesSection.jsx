import React from 'react';
import { Laptop, BatteryFull, Clock } from 'lucide-react';

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }
function Heading({ title }) { return (<div className="mb-10 md:mb-12 text-center"><h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2></div>) }

export default function PrerequisitesSection() {
    const items = [
        { Icon: Laptop, text: 'Bring Your Laptop (Mandatory). This is a hands-on workshop.' },
        { Icon: BatteryFull, text: 'Arrive Fully Charged. Charging facilities are extremely limited.' },
        { Icon: Clock, text: 'Be Present. Attendance will be marked at the door.' },
    ];
    return (
        <Section id="prerequisites" className="scroll-mt-24">
            <Container>
                <Heading title="Attendee Requirements" />
                <div className="grid md:grid-cols-3 gap-6">
                    {items.map((it, idx) => (
                        <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl" data-reveal>
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-slate-800 p-3" style={{ color: 'var(--accent)' }}>
                                    <it.Icon size={24} className="bounce-in" />
                                </div>
                                <p className="text-slate-300">{it.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
} 