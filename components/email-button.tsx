'use client';
import { trackContactClick } from "@/lib/tag-manager/methods";
import { Button } from "./ui/button";

type Props = {
    type: 'filled' | 'ghost';
    icon?: React.ReactNode;
    location: 'header' | 'footer' | 'service_page' | 'contact_page' | 'home_page' | 'about_page';
    className?: string;
}

export default function EmailButton({ type, icon, location, className = '' }: Props) {
    // Function to handle email click
    const handleEmailClick = () => {
        // Track the email click
        trackContactClick('email', location);
        
        // Open email client with the address
        window.location.href = 'mailto:contacto@kinesiomedovalle.com';
    };

    if (type === 'filled') {
        return (
            <Button 
                variant="brandedSecondary" 
                className={`hidden md:block rounded-full ${className}`}
                onClick={handleEmailClick}
            >
                {icon || null}
                contacto@kinesiomedovalle.com
            </Button>
        )
    } else {
        return (
            <Button 
                variant="link" 
                className={`flex items-center gap-2 p-0 text-white h-auto ${className}`}
                onClick={handleEmailClick}
            >
                {icon}
                <p className="text-lg sm:text-sm">contacto@kinesiomedovalle.com</p>
            </Button>
        )
    }
}