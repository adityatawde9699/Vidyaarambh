import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

function classNames(...c) { return c.filter(Boolean).join(' ') }

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('#top');
    const links = [
        { label: 'About', href: '#about' },
        { label: 'Sessions', href: '#sessions' },
        { label: 'Mentors', href: '#mentors' },
        { label: 'Register', href: '#register' },
        { label: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onHashChange = () => setActive(window.location.hash || '#top');
        onHashChange();
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setMobileOpen(false);
        history.replaceState(null, '', href);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(href);
    };

    return (
        <>
            <header className={classNames("fixed inset-x-0 top-0 z-50 transition", scrolled ? "bg-slate-900/70 backdrop-blur-md" : "backdrop-blur supports-[backdrop-filter]:bg-slate-900/20")}>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="flex h-16 items-center justify-between">
                        <a href="#top" className="text-white font-extrabold tracking-tight text-xl">Vidyaarambh</a>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex items-center gap-6">
                            {links.map(l => (
                                <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)} className={classNames("transition", active === l.href ? "text-violet-400" : "text-slate-300 hover:text-white")}>{l.label}</a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <a
                            href="#register"
                            onClick={(e) => handleNav(e, '#register')}
                            className="hidden md:inline-flex items-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                        >
                            Register
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-slate-800/60"
                            aria-label="Open menu"
                            onClick={() => setMobileOpen(v => !v)}
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu panel */}
            <div
                className={classNames(
                    "md:hidden fixed inset-x-0 top-16 z-40 origin-top transform transition",
                    mobileOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                )}
                style={{ transformOrigin: 'top' }}
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/95 shadow-xl">
                        <nav className="flex flex-col divide-y divide-slate-800">
                            {links.map(l => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={(e) => handleNav(e, l.href)}
                                    className={classNames("px-4 py-3 transition", active === l.href ? "text-violet-400" : "text-slate-200 hover:bg-slate-800/60")}
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#register"
                                onClick={(e) => handleNav(e, '#register')}
                                className="m-3 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
                            >
                                Register
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
} 