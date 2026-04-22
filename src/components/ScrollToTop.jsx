'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const pathname = usePathname();

    useLayoutEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ block: 'start', behavior: 'auto' });
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
