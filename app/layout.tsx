import type {Metadata} from "next";
// import localFont from "next/font/local";
import {Archivo} from 'next/font/google'
import "./globals.css";
import {cn} from "@/lib/utils";

const archivo = Archivo({subsets: ['latin']})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: {
        default: 'Kinesiomed Ovalle',
        template: '%s | Kinesiomed Ovalle',
    },
    description: "Terapia fisica y rehabilitacion en Ovalle",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
        <body>
        <main className={cn('min-h-screen bg-background antialiased overflow-x-hidden', archivo.className)}>
            {children}
        </main>
        </body>
        </html>
    );
}
