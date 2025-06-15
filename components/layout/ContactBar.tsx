import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import Link from "next/link";
import CallButton from "./call-button";
import EmailButton from "../email-button";
import LocationButton from "../location-button";

const contactBarItems = [
    {
        id: 3,
        title: 'Av. Manuel Peñafiel 1480, oficina 420',
        icon: '',
        href: 'https://www.google.com/maps/place/Av.+Manuel+Pe%C3%B1afiel+Olivares+1480,+1840000+Ovalle,+Coquimbo,+Chile/@-30.5776132,-71.1883604,17z/data=!4m6!3m5!1s0x968fcab5ad8384fb:0x2542ea5874c314fb!8m2!3d-30.5773804!4d-71.1887003!16s%2Fg%2F11hsbqs2mm?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'
    }
]

const socialIcons = [
    {
        id: 1,
        title: 'Facebook',
        icon: <Facebook />,
        href: 'https://www.facebook.com/profile.php/?id=61558706391334&_rdr'
    },
    {
        id: 3,
        title: 'Instagram',
        icon: <Instagram />,
        href: 'https://www.instagram.com/kinesiomed.ovalle/'
    },
]

export function ContactBar() {
    return (
        <div className="bg-brand text-white min-h-[40px] flex justify-center lg:justify-between items-center px-4 fixed top-0 w-full z-40">
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-8 py-2 md:p-0">
                <CallButton location="header" type="ghost" icon={<Phone />}  />   
                <EmailButton type="ghost" location="header" icon={<Mail />} /> 
                <LocationButton type="ghost" location="header" icon={<MapPin />} />
            </div>
            <div className="hidden lg:flex items-center gap-4">
                {
                    socialIcons.map((item) => (
                        <Link href={item.href} target="_blank" className="" key={item.id}>
                            {item.icon}
                        {/*{item.title}*/}
                    </Link>
                    ))
                }
            </div>
        </div>
    )
}
