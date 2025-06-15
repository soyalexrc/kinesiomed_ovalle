'use client';
import { Button } from "./ui/button";
import { trackContactClick } from "@/lib/tag-manager/methods";

type Props = {
    type: 'filled' | 'ghost';
    icon?: React.ReactNode;
    location: 'header' | 'footer' | 'service_page' | 'contact_page' | 'home_page' | 'about_page';
    className?: string;
}

export default function LocationButton({ type, icon, location, className = '' }: Props) {
    // Function to handle location click
    const handleLocationClick = () => {
        // Track the location click
        trackContactClick('location', location);
        
        // Open Google Maps with the address
        window.open('https://www.google.com/maps/place/Av.+Manuel+Pe%C3%B1afiel+Olivares+1480,+1840000+Ovalle,+Coquimbo,+Chile/@-30.5776132,-71.1883604,17z/data=!4m6!3m5!1s0x968fcab5ad8384fb:0x2542ea5874c314fb!8m2!3d-30.5773804!4d-71.1887003!16s%2Fg%2F11hsbqs2mm?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D', '_blank');
    };

    if (type === 'filled') {
        return (
            <Button 
                variant="brandedSecondary" 
                className={`hidden md:block rounded-full ${className}`}
                onClick={handleLocationClick}
            >
                {icon || null}
                Av. Manuel Peñafiel 1480, oficina 420
            </Button>
        )
    } else {
        return (
            <Button 
                variant="link" 
                className={`flex text-white items-center gap-2 p-0 h-auto ${className}`}
                onClick={handleLocationClick}
            >
                {icon || null}
                <p className="text-lg sm:text-sm">Av. Manuel Peñafiel 1480, oficina 420</p>
            </Button>
        )
    }
}