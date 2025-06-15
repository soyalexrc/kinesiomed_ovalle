import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import Link from "next/link";
import CallButton from "./call-button";
import EmailButton from "../email-button";
import LocationButton from "../location-button";

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
