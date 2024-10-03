'use client';
import Image from "next/image";

export default function WhatsAppButton() {

    const handleWhatsAppClick = () => {
        const whatsappUrl = "https://wa.me/"; // Base URL
        const phoneNumber = "+51917902604"; // Replace with your phone number
        const message = "?text=Hi%20there!"; // Optional pre-filled message
        const completeUrl = `${whatsappUrl}${phoneNumber}${message}`;
        window.open(completeUrl, "_blank"); // Open in a new tab
    };
    return (
        <button onClick={handleWhatsAppClick} className="fixed right-5 bottom-5 z-40 bg-green-500 rounded-full p-2">
            <Image src="/whatsapp-icon.png" width={50} height={50} alt="whatsapp icon" />
        </button>
    )
}