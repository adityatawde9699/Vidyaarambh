import React from 'react';

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

export default function AboutSection() {
    return (
        <Section id="about" className="scroll-mt-24">
            <div className="absolute inset-0 -z-10 opacity-[0.15] pointer-events-none">
                <div className="mx-auto max-w-7xl h-full px-6">
                    <div className="h-full rounded-3xl bg-gradient-to-br from-violet-900/30 via-slate-900/20 to-transparent" />
                </div>
            </div>
            <Container>
                <div className="grid md:grid-cols-2 gap-8 items-start" data-stagger>
                    <div className="space-y-4" style={{ '--delay-index': 0 }}>
                        <Heading title="Stop Just Learning. Start Building." />
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Theory teaches you the 'what,' but industry demands the 'how.' Vidyaarambh is a hands-on workshop designed exclusively for 1st to 3rd-year students to bridge the critical gap between classroom concepts and real-world application. Guided by senior students, you will walk step-by-step through the complete developer workflow: from setting up your environment to building an ML program and—most importantly—deploying it live for the world to see.
                        </p>
                    </div>
                    <div className="relative" style={{ '--delay-index': 1 }}>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shimmer">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-teal-500/10 to-fuchsia-500/10" />
                            <div className="absolute inset-0 grid place-items-center text-slate-400">
                                <span className="text-sm">Event teaser coming soon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

