import { useEffect, useRef } from 'react';

/**
 * A custom hook that uses the Intersection Observer API to add a 'is-visible' class
 * to an element when it enters the viewport. This can be used to trigger on-scroll animations.
 * @returns {React.RefObject} A ref object to be attached to the element you want to observe.
 */
export function useReveal() {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        // Ensure IntersectionObserver is available and an element is passed
        if (!element || typeof IntersectionObserver === 'undefined') return;

        // Create an observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting (in the viewport)
                if (entry.isIntersecting) {
                    element.classList.add('is-visible');
                    observer.unobserve(element); // Stop observing the element once it's visible
                }
            },
            {
                threshold: 0.1, // Trigger the animation when 10% of the element is visible
            }
        );

        // Start observing the element
        observer.observe(element);

        // Cleanup function to unobserve the element when the component unmounts
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return ref;
}
