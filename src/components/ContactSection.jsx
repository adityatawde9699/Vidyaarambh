import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Phone, Linkedin, Instagram, Users } from 'lucide-react';

function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }

function ProfileCard({ name, role, phone, image, linkedin, instagram, badge }) {
  const fallback = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`;
  return (
    <div className="group relative w-72 shrink-0 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl card-hover mx-3">
      {badge ? (
        <span className="absolute -top-3 left-4 rounded-md bg-accent/90 px-2 py-1 text-xs font-semibold text-white shadow">{badge}</span>
      ) : null}
      <div className="flex items-center gap-4">
        <img
          alt={name}
          src={image || fallback}
          className="h-14 w-14 rounded-full object-cover border border-slate-700 ring-2"
          style={{ ringColor: 'var(--accent)' }}
          onError={(e) => { e.currentTarget.src = fallback; }}
        />
        <div className="min-w-0">
          <h4 className="truncate text-white font-bold">{name}</h4>
          {role ? <p className="truncate text-slate-400 text-sm">{role}</p> : null}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm">
        {phone ? (
          <a href={`tel:${phone.replace(/\s|\+/g, '')}`} className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition">
            <Phone size={16} /> {phone}
          </a>
        ) : <span />}
        <div className="flex items-center gap-2 text-slate-300">
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 p-1 hover:border-violet-500">
              <Linkedin size={16} />
            </a>
          ) : null}
          {instagram ? (
            <a href={instagram} target="_blank" rel="noreferrer" className="rounded-md border border-slate-700 p-1 hover:border-violet-500">
              <Instagram size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  // Data
  const faculty = useMemo(() => ([
    { name: 'Aruna Phatale', role: 'Faculty Coordinator' },
    { name: 'Mrudula Mulay', role: 'Faculty Coordinator' },
    { name: 'V.A. Kulkarni', role: 'Faculty Coordinator' },
  ]), []);

  const lead = useMemo(() => ({
    name: 'Satvik Kandarkar',
    role: 'Student Coordinator',
    phone: '+91 89993 08824',
    image: 'lead-contact.jpeg',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    badge: 'Lead Contact',
  }), []);

const coreTeam = useMemo(() => ([
  {
    name: 'Akash Chaudhari',
    role: 'Core Team',
    phone: '',
    image: 'images/image.png',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    badge: 'Core Team',
  },
  {
    name: 'Kanishka Arya',
    role: 'Core Team',
    phone: '',
    image: 'kanishka.jpeg',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    badge: 'Core Team',
  },
  {
    name: 'Nandini Patil',
    role: 'Core Team',
    phone: '',
    image: 'nandini.jpeg',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    badge: 'Core Team',
  },
  {
    name: 'Sneha Jadhav',
    role: 'Core Team',
    phone: '',
    image: 'sneha.jpeg',
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com',
    badge: 'Core Team',
  },
]), []);


  const cards = useMemo(() => {
    const facultyCards = faculty.map((f) => ({ ...f, badge: 'Faculty' }));
    const leadCard = [lead];
    const coreCards = coreTeam.map((m) => ({ ...m }));
    return [...facultyCards, ...leadCard, ...coreCards];
  }, [faculty, lead, coreTeam]);

  // Auto-scrolling carousel
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [shouldLoop, setShouldLoop] = useState(false);
  const [singleWidthPx, setSingleWidthPx] = useState(0);

  // Measure widths to determine if looping is needed
  useEffect(() => {
    const measure = () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;
      // Measure width of one set
      let total = 0;
      for (let i = 0; i < Math.min(cards.length, track.children.length); i++) {
        total += track.children[i].getBoundingClientRect().width;
      }
      setSingleWidthPx(total);
      setShouldLoop(total > wrapper.clientWidth + 16); // small buffer
      // Reset scroll
      wrapper.scrollLeft = 0;
    };
    const ro = new ResizeObserver(measure);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    // Delay measure to after paint so widths are accurate
    const id = requestAnimationFrame(measure);
    return () => { ro.disconnect(); cancelAnimationFrame(id); };
  }, [cards.length]);

  useEffect(() => {
    if (!shouldLoop || singleWidthPx === 0) return;
    const scroller = wrapperRef.current;
    if (!scroller) return;
    let rafId;
    const speed = 0.6; // px per frame
    const step = () => {
      if (!isHovering) {
        scroller.scrollLeft += speed;
        if (scroller.scrollLeft >= singleWidthPx) {
          scroller.scrollLeft = scroller.scrollLeft - singleWidthPx;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isHovering, shouldLoop, singleWidthPx]);

  return (
    <Section id="contact" className="scroll-mt-24">
      <Container>
        <div className="mb-8 md:mb-10 text-center">
          <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-slate-300">
            <Users size={16} className="accent" /> Organizers & Contacts
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Meet the Team</h2>
          <p className="mt-2 text-slate-400">Faculty, Lead Contact, and Core Team — auto-scrolling</p>
        </div>

        <div
          ref={wrapperRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
        >
          <div ref={trackRef} className="flex w-max py-6">
            {cards.map((c, idx) => (
              <ProfileCard key={`set1-${c.name}-${idx}`} {...c} />
            ))}
            {shouldLoop && cards.map((c, idx) => (
              <ProfileCard key={`set2-${c.name}-${idx}`} {...c} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
} 