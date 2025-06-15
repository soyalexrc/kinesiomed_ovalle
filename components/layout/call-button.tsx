'use client';
import { Button } from "../ui/button";
import { trackContactClick } from "@/lib/tag-manager/methods";

type Props = {
    type: 'filled' | 'ghost';
    icon?: React.ReactNode;
    location: 'header' | 'footer';
}

export default function CallButton({ type, icon, location }: Props) {
     // Add this function to handle the phone call
    const handlePhoneCall = () => {
        // Execute your code here before redirecting
        trackContactClick('phone', location);
        
        // You can add any other logic here
        console.log('Phone call initiated from navbar');
        
        // Continue with the phone call
        window.location.href = 'tel:+56942757447';
    };

    if (type === 'filled') {
        return (
            <Button variant="brandedSecondary" className="hidden md:block rounded-full"
                onClick={handlePhoneCall}
            >
                    +(56) 9 4275 7447
            </Button>
        )
    } else {
        return (
            <Button 
                variant="link" 
                className={`flex text-white items-center gap-2 p-0 h-auto`}
                onClick={handlePhoneCall}
            >
                {icon}
                <p className="text-lg sm:text-sm">+(56) 9 4275 7447</p>
            </Button>
        )
    }
}