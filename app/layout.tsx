import type {Metadata} from "next";
// import localFont from "next/font/local";
import {Archivo} from 'next/font/google'
import "./globals.css";
import {cn} from "@/lib/utils";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'


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
    description: "¿Buscas terapia física en Ovalle? Kinesiomed Ovalle te ofrece tratamientos especializados para recuperar tu bienestar. Agenda tu hora ahora.",
    keywords: [
        'terapia física Ovalle', 'rehabilitación Ovalle', 'kinesiólogo Ovalle', 'centro de rehabilitación Ovalle', 'lesiones deportivas Ovalle', 'dolor de espalda Ovalle', 'recuperación postquirúrgica Ovalle', 'kinesiología deportiva Ovalle', 'terapia física para adultos mayores Ovalle', 'rehabilitación de rodilla Ovalle', 'kinesiología para niños Ovalle'
    ],
    creator: 'Kinesiomed Ovalle',
    publisher: 'Kinesiomed Ovalle',
    applicationName: 'Kinesiomed Ovalle',
    alternates: {
        canonical: 'https://kinesiomedovalle.com',
    },
    authors: [
        {url: 'https://alexleonardo.dev', name: 'Alex Rodriguez'},
        {url: 'https://lsmsinergy.com', name: 'LSM Synergy company'},
    ],
    openGraph: {
        title: 'Kinesiomed Ovalle',
        description: '¿Buscas terapia física en Ovalle? Kinesiomed Ovalle te ofrece tratamientos especializados para recuperar tu bienestar. Agenda tu hora ahora.',
        type: 'website',
        images: {
            url: 'https://firebasestorage.googleapis.com/v0/b/vision-inmobiliaria-636c6.appspot.com/o/Archivos%20generales%20del%20sistema%20(NO%20ELIMINAR)%2Fhero.jpg?alt=media&token=1a2058ae-4c00-44e5-953b-7a644a0e4d44',
            type: 'image/jpg',
            alt: 'imagen de terapia fisica en Kinesiomed Ovalle',
            height: 630,
            width: 1200,
        },
        url: 'https://kinesiomedovalle.com',
        countryName: 'Chile',
        siteName: 'https://kinesiomedovalle.com',
        locale: 'es_CL',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <GoogleTagManager gtmId="GTM-PTSNSM5S" />
        <body>
            {/* <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PTSNSM5S');
                    `,
                }}
            /> */}
                   {/* NoScript fallback */}
                {/* <noscript> */}
                    {/* <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTSNSM5S" */}
                {/* height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe> */}
                {/* </noscript> */}

        <main className={cn('min-h-screen bg-background antialiased overflow-x-hidden', archivo.className)}>
            {children}
        </main>
        </body>
        </html>
    );
}
