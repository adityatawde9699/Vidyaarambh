import React, { useState, useEffect } from 'react';
import { ChevronUp, Mail, Phone, MapPin, ExternalLink, Calendar, Users, Code, Cloud } from 'lucide-react';

function Container({ className = '', children }) {
    return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div>
}

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    // Show scroll to top when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const links = [
        { label: 'About', href: '#about', icon: Users },
        { label: 'Sessions', href: '#sessions', icon: Calendar },
        { label: 'Mentors', href: '#mentors', icon: Users },
        { label: 'Register', href: '#register', icon: ExternalLink },
    ];

    const socialLinks = [
        { platform: 'Email', href: 'mailto:info@vidyaarambh.com', icon: Mail },
        { platform: 'Phone', href: 'tel:+918999308824', icon: Phone },
    ];

    const handleNav = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Account for fixed header
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            history.replaceState(null, '', href);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-IN', {
            timeZone: 'Asia/Kolkata',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <footer className="relative border-t border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_rgb(148,163,184)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-transparent to-transparent"></div>

                <Container className="relative py-16">
                    {/* Header section with animated elements */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Code className="w-8 h-8 text-violet-400 animate-pulse" />
                            <h3 className="text-white font-bold text-3xl bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                                Vidyaarambh
                            </h3>
                            <Cloud className="w-8 h-8 text-violet-400 animate-pulse" />
                        </div>
                        <p className="text-lg italic text-transparent bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text font-medium">
                            From Code to Cloud
                        </p>
                        <div className="mt-4 text-slate-400 text-sm">
                            <p>{formatDate(currentTime)} • {formatTime(currentTime)} IST</p>
                        </div>
                    </div>

                    {/* Main content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-12 text-sm">

                        {/* Quick Navigation */}
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <ExternalLink className="w-5 h-5 text-violet-400" />
                                Quick Links
                            </h4>
                            <nav className="space-y-3">
                                {links.map((link) => {
                                    const IconComponent = link.icon;
                                    return (
                                        <div key={link.href}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleNav(e, link.href)}
                                                className="group flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-all duration-300 hover:translate-x-2"
                                            >
                                                <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                                {link.label}
                                            </a>
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>


                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <Phone className="w-5 h-5 text-violet-400" />
                                Get in Touch
                            </h4>

                            {/* Contact Card with Profile */}
                            <div className="relative p-6 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-violet-950/20 rounded-xl border border-slate-700/30 hover:border-violet-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10">
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-5 rounded-xl">
                                    <div className="w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgb(120,119,198)_3px,_transparent_4px)] bg-[length:15px_15px]"></div>
                                </div>

                                {/* Profile Section */}
                                <div className="relative flex items-center gap-4 mb-6">
                                    {/* Profile Photo */}
                                    <div className="relative">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 p-0.5">
                                            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-violet-300 to-purple-400 rounded-full flex items-center justify-center text-slate-800 font-bold text-lg">
                                                    <img src="lead-contact.jpeg" alt="lead-contact" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Online Status Indicator */}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-800 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                    </div>

                                    {/* Profile Info */}
                                    <div className="flex-1">
                                        <h5 className="text-white font-bold text-lg group-hover:text-violet-300 transition-colors duration-300">
                                            Satvik Kandarkar
                                        </h5>
                                        <p className="text-violet-400 text-sm font-medium">Student Coordinator</p>
                                        <p className="text-slate-500 text-xs mt-1">Available for queries</p>
                                    </div>
                                </div>


                                <div className="relative space-y-3">
                                    {/* Phone Contact */}
                                    <a
                                        href="tel:+918999308824"
                                        className="flex items-center gap-3 p-3 bg-slate-700/20 rounded-lg hover:bg-slate-700/40 transition-all duration-300 group/contact hover:translate-x-1"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/contact:bg-green-500/30 transition-colors duration-300">
                                            <Phone className="w-4 h-4 text-green-400 group-hover/contact:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-slate-300 font-medium text-sm">Phone</p>
                                            <p className="text-slate-400 text-xs">+91 8999308824</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover/contact:text-violet-400 transition-colors duration-300" />
                                    </a>

                                    {/* Email Contact */}
                                    <a
                                        href="mailto:satvik@vidyaarambh.com"
                                        className="flex items-center gap-3 p-3 bg-slate-700/20 rounded-lg hover:bg-slate-700/40 transition-all duration-300 group/contact hover:translate-x-1"
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/contact:bg-blue-500/30 transition-colors duration-300">
                                            <Mail className="w-4 h-4 text-blue-400 group-hover/contact:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-slate-300 font-medium text-sm">Email</p>
                                            <p className="text-slate-400 text-xs">Quick Response</p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover/contact:text-violet-400 transition-colors duration-300" />
                                    </a>
                                </div>

                                {/* Response Time Badge */}
                                <div className="relative mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-slate-400">Usually responds within 2 hours</span>
                                    </div>
                                    <div className="text-xs text-violet-400 font-medium">
                                        Available 9 AM - 8 PM
                                    </div>
                                </div>
                            </div>

                            {/* Quick Help Section */}
                            <div className="p-4 bg-violet-950/20 rounded-lg border border-violet-500/20">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-violet-500/20 rounded-full flex items-center justify-center mt-1">
                                        <Users className="w-4 h-4 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-slate-200 font-medium text-sm mb-1">Need Immediate Help?</p>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            For urgent queries about the workshop, registration issues, or technical problems,
                                            feel free to call directly. For general information, email works best!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section - Enhanced */}
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-lg">Quick FAQs</h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300">
                                    <p className="text-slate-200 font-semibold mb-2">Who can attend?</p>
                                    <p className="text-slate-400 text-xs">1st, 2nd, and 3rd-year JNEC students only</p>
                                </div>
                                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300">
                                    <p className="text-slate-200 font-semibold mb-2">Experience needed?</p>
                                    <p className="text-slate-400 text-xs">No prior coding experience required!</p>
                                </div>
                                <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-violet-500/30 transition-colors duration-300">
                                    <p className="text-slate-200 font-semibold mb-2">What to bring?</p>
                                    <p className="text-slate-400 text-xs">Fully charged laptop (mandatory)</p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Location */}
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-violet-400" />
                                Event Location
                            </h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-gradient-to-br from-violet-950/30 to-slate-800/30 rounded-lg border border-violet-500/20">
                                    <div className="space-y-2 text-slate-300">
                                        <p className="text-white font-semibold">Einstein Hall</p>
                                        <p className="text-sm">Jawaharlal Nehru Engineering College</p>
                                        <p className="text-sm">MGM University</p>
                                        <p className="text-sm text-violet-400">Ch. Sambhajinagar, Maharashtra</p>
                                    </div>
                                </div>

                                {/* Workshop Stats */}
                                <div className="grid grid-cols-2 gap-3 mt-4">
                                    <div className="text-center p-3 bg-slate-800/40 rounded-lg">
                                        <p className="text-violet-400 font-bold text-lg">Workshop Date</p>
                                        <p className="text-slate-400 text-xs">15th September 2025</p>
                                    </div>
                                    <div className="text-center p-3 bg-slate-800/40 rounded-lg">
                                        <p className="text-violet-400 font-bold text-lg">Register <br />Now</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="my-12">
                        <div className="flex items-center justify-center">
                            <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full max-w-md"></div>
                            <div className="mx-4 p-2 bg-violet-500/10 rounded-full border border-violet-500/20">
                                <Code className="w-4 h-4 text-violet-400" />
                            </div>
                            <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full max-w-md"></div>
                        </div>
                    </div>
                </Container>

                {/* Enhanced bottom bar */}
                <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
                    <Container className="py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-slate-500">
                                © 2025 Vidyaarambh Team. All Rights Reserved.
                            </p>
                            <div className="flex items-center gap-6 text-xs text-slate-500">
                                <span>Made with 💜 for JNEC Students</span>
                                <span className="hidden md:inline">•</span>
                                <span className="hidden md:inline">Empowering Future Developers</span>
                            </div>
                        </div>
                    </Container>
                </div>
            </footer>

            {/* Scroll to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
                </button>
            )}
        </>
    );
}