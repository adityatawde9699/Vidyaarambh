import React from 'react';
import { Linkedin } from 'lucide-react';

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }
function Heading({ title }) { return (<div className="mb-10 md:mb-12 text-center"><h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2></div>) }

const mentors = [
  { name: 'Parth Jamkhedkar', role: 'Final Year, CSE | Session: VS Code, Git & GitHub', file: 'parth.jpg', fallback: 'Parth Jamkhedkar', linkedin: 'https://www.linkedin.com/in/parth-jamkhedkar' },
  { name: 'Bhavesh Salunke', role: 'TY, AIDS | Session: Colab & Hugging Face', file: 'bhavesh.jpg', fallback: 'Bhavesh Salunke', linkedin: 'https://www.linkedin.com/in/bhavesh-salunke-7a4163283' },
  { name: 'Akash Chaudhari', role: 'TY, AIDS | Session: Deployment & Common Tools', file: 'akash.jpg', fallback: 'Akash Chaudhari', linkedin: 'https://www.linkedin.com/in/akash-ch' },
];

export default function MentorsSection() {
  return (
    <Section id="mentors" className="scroll-mt-24">
      <Container>
        <Heading title="Guided by Seniors" />
        <div className="grid md:grid-cols-3 gap-6" data-stagger>
          {mentors.map((m, idx) => {
            const localPath = `/src/assets/${m.file}`;
            const fallback = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(m.fallback)}`;
            return (
              <div key={idx} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl card-hover text-center flex flex-col items-center tilt shimmer" style={{ '--delay-index': idx }}>
                <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition border-glow" />
                <img
                  alt={m.name}
                  className="h-24 w-24 rounded-full border border-slate-700 ring-2"
                  style={{ ringColor: 'var(--accent)' }}
                  src={localPath}
                  onError={(e) => { e.currentTarget.src = fallback; }}
                />
                <h3 className="mt-5 text-white font-bold text-xl">{m.name}</h3>
                <p className="mt-2 text-slate-400 text-sm max-w-xs">{m.role}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-100 hover:brightness-110 hover:border-violet-500 transition"
                  aria-label={`View ${m.name}'s LinkedIn profile`}
                >
                  <Linkedin size={18} /> View LinkedIn Profile
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
} 