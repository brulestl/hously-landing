import { useState, useEffect } from 'react';

export const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 1024); // lg breakpoint
            setIsDesktop(width >= 1024);
        };

        // Initial check
        checkScreenSize();

        // Add event listener
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { isMobile, isDesktop };
}; 