import Image from "next/image";
import {Facebook, Instagram, Mail, MapPin, Phone} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import CallButton from './call-button';
import EmailButton from "../email-button";
import LocationButton from "../location-button";

export function Footer() {
    return (
        <div className="flex justify-center items-center flex-col bg-brand">
            <div className="px-10 md:px-20 py-12 max-w-[1400px] w-full">
                <div className="text-white grid grid-cols-12 lg:gap-20">
                    <div className="mb-8 lg:mb-0 col-span-12 lg:col-span-3">
                        <Image src="/kinesiomed-logo.svg" alt="logo" width={250} height={200} className="mb-2"/>
                        {/* <p className="text-sm">
                            Kinesiomed Ovalle: Tu bienestar es nuestra prioridad. Recuperación física personalizada para
                            mejorar tu calidad de vida. Aliviamos el dolor, restablecemos la movilidad y optimizamos tu
                            funcionalidad.
                        </p> */}
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
                            <li className="text-sm">Lun A Vie: 9:00 AM A 6:00 PM</li>
                            <li className="text-sm">Sab: 9:00 AM A 1:00 PM</li>
                            <li className="text-sm">Dom: Cerrado</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Mas Servicios</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm">Kinesiologia convencional</li>
                            {/* <li className="text-sm">Dolor Cronico</li> */}
                            {/* <li className="text-sm">Terapia de mano</li> */}
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Contacto</h6>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <CallButton type="ghost" location="footer" icon={<Phone size={18} />} />
                            </li>
                            <li className="">
                                <EmailButton type="ghost" location="footer" icon={<Mail size={18} />} />
                            </li>
                            <li>
                                <LocationButton type="ghost" location="footer" icon={<MapPin size={18} />} />
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8"/>
                <div className="flex justify-between items-center flex-wrap">
                    <p className="text-white text-sm">Derechos de autor 2025 Kinesiomed Ovalle. Todos los derechos
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
