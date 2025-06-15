'use client';
import { useEffect } from "react";
import { trackPageView, trackScrollDepth } from "../methods";

export default function ViewTracker({ pageName, serviceType = null }: { pageName: string; serviceType: string | null }) {
    useEffect(() => {
        trackPageView(pageName, serviceType);
         // Track scroll depth at 25%, 50%, 75%, 100%
        const handleScroll = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = Math.round((scrollTop / docHeight) * 100)
        
        if ([25, 50, 75, 100].includes(scrollPercent)) {
            trackScrollDepth(scrollPercent)
        }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return null; // This component does not render anything visually
}