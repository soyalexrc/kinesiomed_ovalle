import Image from "next/image";
import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
    return (
        <div className="flex justify-center items-center flex-col bg-brand">
            <div className="px-10 md:px-20 py-12 max-w-[1400px] w-full">
                <div className="text-white grid grid-cols-12 lg:gap-20">
                    <div className="mb-8 lg:mb-0 col-span-12 lg:col-span-3">
                        <Image src="/kinesiomed-logo.svg" alt="logo" width={100} height={50} className="mb-2"/>
                        <p className="text-sm">
                            Kinesiomed Ovalle: Tu bienestar es nuestra prioridad. Recuperación física personalizada para
                            mejorar tu calidad de vida. Aliviamos el dolor, restablecemos la movilidad y optimizamos tu
                            funcionalidad.
                        </p>
                        <div className="flex gap-4 mt-14">
                            <Link href="https://www.facebook.com/profile.php/?id=61558706391334&_rdr" target="_blank">
                                <Facebook/>
                            </Link>
                            <Link href="https://www.instagram.com/kinesiomed.ovalle/" target="_blank">
                                <Instagram/>
                            </Link>
                        </div>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Horario de Atencion</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm">Lun A Vie: 10:00 AM A 6:00 PM</li>
                            <li className="text-sm">Sab: 10:00 AM A 3:00 PM</li>
                            <li className="text-sm">Dom: Cerrado</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Mas Servicios</h6>
                        <ul className="flex flex-col gap-4">
                            {/*<li className="text-sm">Terapia Manual</li>*/}
                            {/*<li className="text-sm">Dolor Cronico</li>*/}
                            {/*<li className="text-sm">Terapia de mano</li>*/}
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Contact</h6>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="tel:+56942757447" className="flex items-center gap-2">
                                    <Phone size={18}/>
                                    +(56) 9 4275 7447
                                </Link>

                            </li>
                            <li className="">
                                <Link href="mailto:contacto@kinesiomedovalle.com">
                                    <Mail size={18}/>
                                    contacto@kinesiomedovalle.com
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.google.com/maps/place/Av.+Manuel+Pe%C3%B1afiel+Olivares+1480,+1840000+Ovalle,+Coquimbo,+Chile/@-30.5776132,-71.1883604,17z/data=!4m6!3m5!1s0x968fcab5ad8384fb:0x2542ea5874c314fb!8m2!3d-30.5773804!4d-71.1887003!16s%2Fg%2F11hsbqs2mm?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
                                    className="flex gap-2">
                                    <MapPin size={18}/>
                                    Av. Manuel Peñafiel 1480, oficina 420
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8"/>
                <div className="flex justify-between items-center flex-wrap">
                    <p className="text-white text-sm">Derechos de autor 2024 Kinesiomed Ovalle. Todos los derechos
                        reservados.</p>
                    <ul className="text-white flex gap-4 text-sm">
                        <li>Acerca de nosotros</li>
                        <li>Servicios</li>
                        <li>Contactanos</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
