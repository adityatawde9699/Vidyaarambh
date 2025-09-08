import { useMemo } from 'react';

export default function useRegistrationStatus(registrationCount) {
    return useMemo(() => {
        if (registrationCount < 50) {
            return { link: '#google-form-100', text: 'Register Now (₹100)', disabled: false };
        } else if (registrationCount >= 50 && registrationCount < 80) {
            return { link: '#google-form-150', text: 'Register Now (₹150)', disabled: false };
        } else if (registrationCount >= 80 && registrationCount < 100) {
            return { link: '#google-form-200', text: 'Register Now (₹200)', disabled: false };
        } else {
            return { link: null, text: 'Event Sold Out!', disabled: true };
        }
    }, [registrationCount]);
} 