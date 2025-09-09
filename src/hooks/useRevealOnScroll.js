import { useEffect } from 'react';

export default function useRevealOnScroll(selector = '[data-reveal]') {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll(selector));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector]);
} 