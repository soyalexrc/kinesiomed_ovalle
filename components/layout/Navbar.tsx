import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const navbarItems = [
    {
        title: 'Inicio',
        href: '/',
        children: [],
        id: 1,
    },
    {
        title: 'Acerca de nosotros',
        href: '/acerca-de-nosotros',
        children: [],
        id: 2,
    },
    {
        title: 'Servicios',
        href: '/servicios',
        children: [],
        id: 3,
    },
    {
        title: 'Contactanos',
        href: '/',
        children: [],
        id: 4,
    },
]

export function Navbar() {
    return (
        <div className="flex items-center justify-between px-4 py-6">
            <Image src="/logo.svg" width={150} height={50} alt="Kinesiomed icon" />
            <div className="flex items-center gap-8">
                {navbarItems.map(item => (
                    <Link href={item.href} key={item.id}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <Button variant="brandedSecondary" className="rounded-full">
                +(123) 827-1827
            </Button>
        </div>
    )
}
