'use client';
import { ContactLocation, trackContactClick } from "@/lib/tag-manager/methods";
import Image from "next/image";

type Props = {
    location: ContactLocation;
}

export default function WhatsAppButton({location}: Props) {

    const handleWhatsAppClick = () => {
        trackContactClick('whatsapp', location)
        const whatsappUrl = "https://wa.me/"; // Base URL
        const phoneNumber = "+56942757447"; // Replace with your phone number
        const message = "?text=Hola! Me gustaria saber mas informacion sobre sus servicios."; // Optional pre-filled message
        const completeUrl = `${whatsappUrl}${phoneNumber}${message}`;
        window.open(completeUrl, "_blank"); // Open in a new tab
    };
    return (
        <button onClick={handleWhatsAppClick} className="fixed right-5 bottom-5 z-40 bg-green-500 rounded-full p-2">
            <Image src="/whatsapp-icon.png" width={50} height={50} alt="whatsapp icon" />
        </button>
    )
}
