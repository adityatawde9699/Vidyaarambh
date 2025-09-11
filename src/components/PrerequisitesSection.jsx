import React, { useState, useRef, useEffect } from 'react';
import { Laptop, BatteryFull, CheckSquare, Zap, Sparkles, ArrowRight } from 'lucide-react';

// --- Helper Utilities ---
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- Advanced UI Components ---
const Section = ({ id, className, children }) => (
    <section id={id} className={cn("relative py-24 md:py-32 overflow-hidden", className)}>{children}</section>
);

const Container = ({ className, children }) => (
    <div className={cn("relative mx-auto w-full max-w-7xl px-6", className)}>{children}</div>
);

// --- Enhanced Data ---
const PREREQUISITES_DATA = [
    { 
        Icon: Laptop, 
        title: 'Bring Your Laptop', 
        description: 'This is a hands-on workshop; you cannot participate without your own machine.',
        highlight: 'Mandatory',
        color: 'cyan',
        gradient: 'from-cyan-500/20 to-blue-600/20',
        glowColor: 'shadow-cyan-500/25',
        iconBg: 'from-cyan-500/10 to-cyan-600/20',
        accentColor: 'text-cyan-400'
    },
    { 
        Icon: BatteryFull, 
        title: 'Arrive Fully Charged', 
        description: 'Please charge your laptop to 100% before you arrive. Charging facilities are extremely limited.',
        highlight: '100% Battery',
        color: 'purple',
        gradient: 'from-purple-500/20 to-violet-600/20',
        glowColor: 'shadow-purple-500/25',
        iconBg: 'from-purple-500/10 to-purple-600/20',
        accentColor: 'text-purple-400'
    },
    { 
        Icon: CheckSquare, 
        title: 'Be Present', 
        description: 'To receive all the perks, including the Gemini Pro subscription, your attendance will be marked at the door.',
        highlight: 'Required',
        color: 'blue',
        gradient: 'from-blue-500/20 to-indigo-600/20',
        glowColor: 'shadow-blue-500/25',
        iconBg: 'from-blue-500/10 to-blue-600/20',
        accentColor: 'text-blue-400'
    },
];

// --- Advanced Floating Particles Component ---
const FloatingParticles = () => {
    const particlesRef = useRef(null);
    
    useEffect(() => {
        const particles = particlesRef.current;
        if (!particles) return;
        
        // Create floating particles
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 3 + 's';
            particle.style.animationDuration = (2 + Math.random() * 3) + 's';
            particles.appendChild(particle);
        }
        
        return () => {
            if (particles) particles.innerHTML = '';
        };
    }, []);
    
    return <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

// --- Advanced 3D Tilt Card Component ---
const Advanced3DCard = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    
    const { Icon, title, description, highlight, gradient, glowColor, iconBg, accentColor } = item;
    
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        setMousePosition({ x, y });
    };
    
    const cardStyle = {
        transform: isHovered 
            ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) translateZ(20px) scale(1.02)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)',
        transformStyle: 'preserve-3d'
    };

    return (
        <div
            ref={cardRef}
            className={`relative group cursor-pointer transition-all duration-500 ${glowColor}`}
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-300`} />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`} />
            </div>
            
            {/* Main Card Content */}
            <div className="relative rounded-2xl border border-white/20 bg-slate-900/40 backdrop-blur-xl p-8 shadow-2xl group-hover:border-white/30 transition-all duration-300">
                {/* Floating highlight badge */}
                <div className="absolute -top-3 -right-3 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${gradient} border border-white/20 text-white shadow-lg`}>
                        {highlight}
                    </div>
                </div>
                
                {/* Content */}
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Enhanced Icon Container */}
                    <div className="relative">
                        {/* Pulsing background */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${iconBg} animate-pulse`} />
                        
                        {/* Icon container */}
                        <div className="relative rounded-full bg-slate-800/80 backdrop-blur-sm border border-white/20 p-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <Icon size={32} className={`${accentColor} group-hover:animate-bounce`} />
                            
                            {/* Glow effect */}
                            <div className={`absolute inset-0 rounded-full ${accentColor.replace('text-', 'bg-')}/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </div>
                        
                        {/* Orbiting particles */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                            <div className={`absolute -top-1 -right-1 w-2 h-2 ${accentColor.replace('text-', 'bg-')} rounded-full opacity-60`} />
                        </div>
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                            <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 ${accentColor.replace('text-', 'bg-')} rounded-full opacity-40`} />
                        </div>
                    </div>
                    
                    {/* Title with gradient text */}
                    <h3 className="font-black text-xl md:text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                        {title}
                    </h3>
                    
                    {/* Enhanced Description */}
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base group-hover:text-slate-200 transition-colors duration-300">
                        {description}
                    </p>
                    
                    {/* Action indicator */}
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <Sparkles size={16} className={accentColor} />
                        <span className="text-xs font-medium text-slate-400">Ready to go!</span>
                        <ArrowRight size={16} className={accentColor} />
                    </div>
                </div>
                
                {/* 3D depth effect */}
                <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'translateZ(1px)' }}
                />
            </div>
        </div>
    );
};

// --- Advanced Section Header ---
const SectionHeader = () => (
    <div className="relative text-center mb-20">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-32 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" />
        </div>
        
        <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 mb-6">
                <Zap size={16} className="text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Essential Requirements</span>
            </div>
            
            {/* Main title with animated gradient */}
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-pulse">
                    Workshop
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Prerequisites
                </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Ensure your success at our hands-on workshop by meeting these 
                <span className="text-cyan-400 font-semibold"> essential requirements</span>. 
                Your preparation determines your experience!
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center mt-8 space-x-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/50" />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
        </div>
    </div>
);

// --- Main Component ---
export default function AdvancedPrerequisitesSection() {
    return (
        <Section id="prerequisites" className="relative">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
            
            {/* Animated mesh background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(106,242,240,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(154,46,254,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(28,42,158,0.08),transparent_50%)]" />
            </div>
            
            {/* Floating particles */}
            <FloatingParticles />
            
            <Container>
                <SectionHeader />
                
                {/* Enhanced Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {PREREQUISITES_DATA.map((item, idx) => (
                        <div 
                            key={idx}
                            className="animate-fade-in-up"
                            style={{ 
                                animationDelay: `${idx * 200}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <Advanced3DCard item={item} index={idx} />
                        </div>
                    ))}
                </div>
                
                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
                        <CheckSquare size={20} className="text-green-400" />
                        <span className="text-slate-300 font-medium">
                            Ready to transform your skills? Let's make it happen! 🚀
                        </span>
                    </div>
                </div>
            </Container>
        </Section>
    );
}