'use client'
import {Button, ButtonProps} from "@/components/ui/button";
import { trackContactClick } from "@/lib/tag-manager/methods";

type Props = {
    text: string;
    className?: string;
    variant?: ButtonProps['variant'];
    icon?: React.ReactNode;
}

export default function AppointmentButton({ text, className, variant = 'brandedSecondary', icon }: Props) {
     const handleWhatsAppClick = () => {
            trackContactClick('whatsapp', 'home_page')
            const whatsappUrl = "https://wa.me/"; // Base URL
            const phoneNumber = "+56942757447"; // Replace with your phone number
            const message = "?text=Hola! Me gustaria saber mas informacion sobre sus servicios."; // Optional pre-filled message
            const completeUrl = `${whatsappUrl}${phoneNumber}${message}`;
            window.open(completeUrl, "_blank"); // Open in a new tab
        };
    return (
        <Button onClick={handleWhatsAppClick} variant={variant} className={`${className}`}>
            {icon && icon}
            {text}
        </Button>
    );
}
