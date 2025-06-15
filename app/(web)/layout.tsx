import {ContactBar, Footer, Navbar} from "@/components/layout";
import Chat from "@/components/chat";
import WhatsAppButton from "@/components/layout/WhatAppButton";

export default function WebLayout({
                                      children,
                                  }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full">
            <ContactBar/>
            <Navbar/>
            {children}
            <Chat />
            <WhatsAppButton />
            <Footer/>
        </div>
    );
}
