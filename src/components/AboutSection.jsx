import React, { useRef, useState } from 'react';
import eventVideo from '../assets/event.mp4'; // 1. Import the video file

// Helper components (unchanged)
function Section({ id, className = '', children }) { return <section id={id} className={["relative py-16 md:py-24", className].join(' ')} data-reveal>{children}</section> }
function Container({ className = '', children }) { return <div className={["mx-auto w-full max-w-7xl px-6", className].join(' ')}>{children}</div> }
function Heading({ title, subtitle }) {
    return (
        <div className="mb-10 md:mb-12"> {/* Removed text-center to align with the rest of the column */}
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
            {subtitle ? <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl">{subtitle}</p> : null}
        </div>
    )
}

// Main component with fixes
export default function AboutSection() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    // Function to toggle mute state on the video
    const toggleMute = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            video.muted = !video.muted;
            setIsMuted(video.muted);
        }
    };

    return (
        <Section id="about" className="scroll-mt-24">
            <div className="absolute inset-0 -z-10 opacity-[0.15] pointer-events-none">
                <div className="mx-auto max-w-7xl h-full px-6">
                    <div className="h-full rounded-3xl bg-gradient-to-br from-violet-900/30 via-slate-900/20 to-transparent" />
                </div>
            </div>
            
            {/* 2. Wrapped content in your Container to fix overflow */}
            <Container>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start" data-stagger>
                    <div className="space-y-4" style={{ '--delay-index': 0 }}>
                        <Heading title="Stop Just Learning. Start Building." />
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Theory teaches you the 'what,' but industry demands the 'how.' Vidyaarambh is a hands-on workshop designed exclusively for 1st to 3rd-year students to bridge the critical gap between classroom concepts and real-world application. Guided by senior students, you will walk step-by-step through the complete developer workflow: from setting up your environment to building an ML program and—most importantly—deploying it live for the world to see.
                        </p>
                    </div>
                    <div className="relative" style={{ '--delay-index': 1 }}>
                        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl shimmer">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-teal-500/10 to-fuchsia-500/10" />
                            <div className="absolute inset-0">
                                {/* 3. Fixed video attributes for autoplay */}
                                <video
                                    ref={videoRef}
                                    src={eventVideo}
                                    className="h-full w-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    Your browser does not support the video element.
                                </video>
                            </div>
                             {/* 4. Added custom button to unmute the video */}
                            <button
                                onClick={toggleMute}
                                className="absolute bottom-3 right-3 z-10 rounded-full bg-black bg-opacity-50 px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:bg-opacity-75"
                                aria-label="Toggle mute"
                            >
                                {isMuted ? 'Unmute 🔊' : 'Mute 🔇'}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}