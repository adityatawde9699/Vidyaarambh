import React, { useState, useEffect, useMemo } from 'react';

// A simple utility to combine Tailwind classes
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

// --- Custom Hook for Countdown Logic ---
const useCountdown = (targetDate) => {
    const countDownDate = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, hasEnded: countDown < 0 };
};


// --- UI Components ---
function Section({ id, className = '', children }) {
    return <section id={id} className={cn("relative py-16 md:py-24 scroll-mt-24", className)}>{children}</section>;
}

function Container({ className = '', children }) {
    return <div className={cn("mx-auto w-full max-w-7xl px-6", className)}>{children}</div>;
}

const CountdownTimer = ({ targetDate }) => {
    const { days, hours, minutes, seconds, hasEnded } = useCountdown(targetDate);
    
    if (hasEnded) {
        return <div className="text-center text-xl font-bold text-rose-400">Registration has closed.</div>;
    }

    const timeValues = [
        { label: 'Days', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Seconds', value: seconds },
    ];

    return (
         <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {timeValues.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-wider">{String(value).padStart(2, '0')}</span>
                    <span className="text-xs text-slate-400 uppercase">{label}</span>
                </div>
            ))}
        </div>
    );
};

// --- Static Data (Simplified to a single object) ---
const REGISTRATION_TIER = {
    name: 'Workshop Entry',
    price: '₹100',
    availability: 'Limited to 100 members',
    rangeStart: 0,
    rangeEnd: 100,
    url: 'https://erp.mgmu.ac.in/asd_EventPublicUserMaster.htm?eventID=154', 
};


// --- Main Registration Section Component ---
export default function RegistrationSection() {
    const [registrationCount, setRegistrationCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const EVENT_DATE = '2025-09-15T14:15:00';

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            const fetchedCount = 0; // Example: 35 people have already registered
            setRegistrationCount(fetchedCount);
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const state = useMemo(() => {
        if (registrationCount >= REGISTRATION_TIER.rangeEnd) return 'sold-out';
        return 'active';
    }, [registrationCount]);

    const progress = useMemo(() => {
        if (state === 'sold-out') return 100;
        return (registrationCount / REGISTRATION_TIER.rangeEnd) * 100;
    }, [registrationCount, state]);

    return (
        <Section id="register">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Secure Your Seat</h2>
                    <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Spots are limited and filling up fast. Register now to join the workshop!
                    </p>
                </div>
                
                {/* Unified Registration Panel */}
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-3xl mx-auto shadow-xl overflow-hidden">
                    {state === 'active' && <div className="absolute inset-0 aurora-glow opacity-20"></div>}
                    
                    {isLoading ? (
                        // Skeleton Loader
                        <div className="animate-pulse">
                            <div className="h-6 bg-slate-700 rounded w-1/2 mx-auto mb-4"></div>
                            <div className="flex justify-center gap-8 my-4">
                                <div className="h-16 w-16 bg-slate-700 rounded-md"></div>
                                <div className="h-16 w-16 bg-slate-700 rounded-md"></div>
                                <div className="h-16 w-16 bg-slate-700 rounded-md"></div>
                                <div className="h-16 w-16 bg-slate-700 rounded-md"></div>
                            </div>
                            <div className="h-10 bg-slate-700 rounded w-1/3 mx-auto mt-8"></div>
                            <div className="h-12 bg-slate-700 rounded-lg w-full mt-4"></div>
                        </div>
                    ) : (
                        // Live Content
                        <>
                            <div className="relative z-10 text-center">
                                <h3 className="text-violet-300 font-semibold mb-4">Registration Closes In</h3>
                                <CountdownTimer targetDate={EVENT_DATE} />
                            </div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center mt-8 pt-8 border-t border-slate-800">
                                <div className="text-center md:text-left">
                                    <h4 className="text-white font-semibold text-xl">{REGISTRATION_TIER.name}</h4>
                                    <p className="mt-1 text-slate-400 text-sm">{REGISTRATION_TIER.availability}</p>
                                    <div className="my-4">
                                        <span className="text-4xl font-extrabold text-white">{REGISTRATION_TIER.price}</span>
                                        <span className="text-slate-300"> / person</span>
                                    </div>
                                </div>
                                
                                <div className="w-full">
                                    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                                        <div className="bg-violet-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                    </div>
                                    <p className="text-xs text-slate-400 text-center mb-4">{registrationCount} / {REGISTRATION_TIER.rangeEnd} spots filled</p>
                                    
                                    {state === 'active' && <a href={REGISTRATION_TIER.url} className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow-lg bg-violet-500 hover:bg-violet-600 text-white transition-all duration-200">Register Now</a>}
                                    {state === 'sold-out' && <button disabled className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow-lg bg-slate-700 text-slate-400 cursor-not-allowed">Sold Out</button>}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </Section>
    );
}

