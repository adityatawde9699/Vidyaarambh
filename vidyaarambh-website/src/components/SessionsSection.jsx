import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

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

export default function SessionsSection() {
    const sessions = [
        { title: 'Session 1: The Foundation (Git, GitHub & VS Code)', description: 'Master the tools professionals use every day. Learn how to manage your code with Git, collaborate using GitHub, and configure VS Code to build projects efficiently.', Icon: Code2 },
        { title: 'Session 2: The AI Toolkit (Colab & Hugging Face)', description: 'Dive into the cloud with Google Colab. Learn how to leverage the power of Hugging Face to access and implement powerful, pre-trained AI models without building them from scratch.', Icon: Brain },
        { title: 'Session 3: The Launch (Deployment & Tools)', description: 'A program on your laptop is just a file. A deployed app is a product. This session covers the essentials of deployment, teaching you how to take your ML program and make it accessible live on the internet.', Icon: Rocket },
    ];
    return (
        <Section id="sessions" className="scroll-mt-24">
            <Container>
                <Heading title="The Complete Developer Pipeline" />
                <div className="grid md:grid-cols-3 gap-6" data-stagger>
                    {sessions.map(({ title, description, Icon }, idx) => (
                        <div key={idx} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl card-hover tilt shimmer zoom-img" style={{ '--delay-index': idx }}>
                            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow" />
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-slate-800 p-3" style={{ color: 'var(--accent)' }}><Icon size={24} /></div>
                                <h3 className="text-white font-semibold text-lg">{title}</h3>
                            </div>
                            <p className="mt-3 text-slate-300 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
} 