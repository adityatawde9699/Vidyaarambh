import React, { useState, useEffect, useMemo } from 'react';

// A simple utility to combine Tailwind classes
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

// --- Helper Components for Layout ---
function Section({ id, className = '', children }) {
    return <section id={id} className={cn("relative py-16 md:py-24 scroll-mt-24", className)}>{children}</section>;
}

function Container({ className = '', children }) {
    return <div className={cn("mx-auto w-full max-w-7xl px-6", className)}>{children}</div>;
}

// --- Static Data (Moved outside component to prevent re-creation on re-renders) ---
const TIERS_DATA = [
    { name: 'Early Bird', price: '₹100', availability: 'For the first 50 members', rangeStart: 0, rangeEnd: 50, url: '#google-form-100', featured: true },
    { name: 'Late Bird', price: '₹150', availability: 'For the next 30 members', rangeStart: 50, rangeEnd: 80, url: '#google-form-150', featured: false },
    { name: 'Final Call', price: '₹200', availability: 'For the final 20 members', rangeStart: 80, rangeEnd: 100, url: '#google-form-200', featured: false },
];

// --- The Improved PricingCard Sub-Component ---
const PricingCard = React.memo(({ tier, registrationCount }) => {
    const state = useMemo(() => {
        if (registrationCount >= tier.rangeEnd) return 'sold-out';
        if (registrationCount >= tier.rangeStart) return 'active';
        return 'upcoming';
    }, [registrationCount, tier.rangeStart, tier.rangeEnd]);

    const isActive = state === 'active';
    const isSoldOut = state === 'sold-out';

    const progress = useMemo(() => {
        if (isSoldOut) return 100;
        if (isActive) {
            const totalInRange = tier.rangeEnd - tier.rangeStart;
            const filledInRange = registrationCount - tier.rangeStart;
            return (filledInRange / totalInRange) * 100;
        }
        return 0;
    }, [registrationCount, tier, isActive, isSoldOut]);

    return (
        <div className={cn('relative rounded-2xl p-6 shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden', 'bg-slate-900 border', isActive ? 'border-violet-500 shadow-violet-500/20' : 'border-slate-800', isSoldOut && 'opacity-60 grayscale')}>
            {isActive && <div className="absolute inset-0 aurora-glow opacity-20"></div>}
            <div className="relative z-10 flex flex-col h-full">
                {tier.featured && <div className="absolute -top-3.5 right-4 rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">Most Popular</div>}
                <div className="flex-grow">
                    <h3 className="text-white font-semibold text-xl">{tier.name}</h3>
                    <p className="mt-1 text-slate-400 text-sm">{tier.availability}</p>
                    <div className="my-6">
                        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                        <span className="text-slate-300"> / person</span>
                    </div>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
                    <div className="bg-violet-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="mt-auto">
                    {state === 'active' && <a href={tier.url} className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow-lg bg-violet-500 hover:bg-violet-600 text-white transition-all duration-200">Register Now</a>}
                    {state === 'sold-out' && <button disabled className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow-lg bg-slate-700 text-slate-400 cursor-not-allowed">Sold Out</button>}
                    {state === 'upcoming' && <button disabled className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-slate-800 text-slate-500 cursor-wait">Opens Soon</button>}
                </div>
            </div>
        </div>
    );
});

// --- Skeleton Loader Component for better UX ---
function CardSkeleton() {
    return (
        <div className="relative rounded-2xl p-6 bg-slate-900 border border-slate-800 animate-pulse">
            <div className="h-4 bg-slate-700 rounded w-1/3"></div>
            <div className="h-3 bg-slate-700 rounded w-1/2 mt-2"></div>
            <div className="my-6 h-10 bg-slate-700 rounded w-1/4"></div>
            <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4"></div>
            <div className="h-12 bg-slate-800 rounded-lg mt-auto"></div>
        </div>
    );
}

// --- The Main Registration Section Component ---
export default function RegistrationSection() {
    const [registrationCount, setRegistrationCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // State to handle errors

    // Fetch live registration data from our serverless function
    useEffect(() => {
        const fetchRegistrations = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // The URL path corresponds to the file location in the /api directory
                const response = await fetch('/api/get-registrations');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRegistrationCount(data.count);
            } catch (err) {
                console.error("Failed to fetch registration count:", err);
                setError("Could not load registration count. Please try again later.");
                // Optional: You could set a default or fallback count
                // setRegistrationCount(0);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRegistrations();
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <Section id="register">
            <Container>
                <div className="mb-10 md:mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Secure Your Seat</h2>
                    <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                        Seats are limited to 100 participants and pricing is tiered. Registration is first-come, first-served.
                    </p>
                </div>
                
                {error && <p className="text-center text-rose-400 mb-4">{error}</p>}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    ) : (
                        TIERS_DATA.map((tier) => (
                            <PricingCard key={tier.name} tier={tier} registrationCount={registrationCount} />
                        ))
                    )}
                </div>

                {/* The developer control can be commented out or removed for production */}
                {/* <div className="mt-12 flex flex-col items-center gap-4">
                    <div className="w-full max-w-xl rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                        <div className="flex items-center justify-between text-slate-300">
                            <span className="text-sm font-medium">Developer Control: Simulate Registrations</span>
                            <span className="text-sm font-semibold">{registrationCount} / 100</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="110"
                            value={registrationCount}
                            onChange={(e) => setRegistrationCount(Number(e.target.value))}
                            className="mt-3 w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-700 accent-violet-500"
                            disabled={isLoading}
                        />
                        {registrationCount >= 100 && (
                            <p className="mt-2 text-sm text-center text-rose-400 font-semibold">
                                Capacity Reached. Registration is now closed.
                            </p>
                        )}
                    </div>
                </div>
                */}
            </Container>
        </Section>
    );
}