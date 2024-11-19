'use client'
import {Button} from "@/components/ui/button";

type Props = {
    text: string;
    className?: string;
}

export default function AppointmentButton({ text, className }: Props) {
    const handleWhatsAppClick = () => {
        const whatsappUrl = "https://wa.me/"; // Base URL
        const phoneNumber = "+56942757447"; // Replace with your phone number
        const message = "?text=Hola! Me gustaria agendar una cita."; // Optional pre-filled message
        const completeUrl = `${whatsappUrl}${phoneNumber}${message}`;
        window.open(completeUrl, "_blank"); // Open in a new tab
    };
    return (
        <Button onClick={handleWhatsAppClick} variant="brandedSecondary" className={`${className}`}>{text}</Button>
    );
}
