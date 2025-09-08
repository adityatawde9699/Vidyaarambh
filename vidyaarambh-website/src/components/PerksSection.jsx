import React from 'react';

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }

export default function PerksSection() {
    return (
        <Section id="perks" className="scroll-mt-24">
            <Container>
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 animated-gradient gradient-animate p-10 shadow-2xl text-center" data-reveal>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">Everyone Who Attends Gets a Major Upgrade</h3>
                    <p className="mt-3 text-slate-200 text-lg">Just for participating (attendance will be marked!), every attendee will receive a Google Gemini Pro subscription with sharing enabled for up to 5 users.</p>
                    <p className="mt-2 text-slate-300">Walk away with a deployed ML app, hands-on skills, and a premium AI toolkit.</p>
                </div>
            </Container>
        </Section>
    );
} 