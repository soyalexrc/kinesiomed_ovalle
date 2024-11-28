import Link from "next/link";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Metadata} from "next";

const data = [
    {
        id: 1,
        icon: '/icons/icon-location.svg',
        title: 'Ubicacion',
        text: 'Av. Manuel Peñafiel 1480, oficina 420'
    },
    {
        id: 2,
        icon: '/icons/icon-mail.svg',
        title: 'Correo',
        text: 'contact@kinesiomedovalle.com'
    },
    {
        id: 3,
        icon: '/icons/icon-phone.svg',
        title: 'Telefono',
        text: '+(56) 9 4275 7447'
    },
    {
        id: 4,
        icon: '/icons/icon-hour.svg',
        title: 'Horario de Atencion',
        text: 'Lun A Vie: 9:00 AM A 6:00 PM. Sab: 9:00 AM A 1:00 PM, Dom: Cerrado'
    }
]

export const metadata: Metadata = {
    title: 'Contacto',
    description: '¿Tienes alguna duda o quieres agendar una cita? Completa nuestro formulario de contacto y nos pondremos en contacto contigo a la brevedad.',
    keywords: [
        'contacto', 'kinesiología', 'agendar cita', 'Concon', 'Ovalle', 'formulario de contacto'
    ]
}

export default function Page() {
    return (
        <div>
            <div className="bg-brandSecondary/10 h-[300px] flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl ">Contacto</h1>
                <div className="flex gap-5">
                    <Link href="/">Inicio</Link>
                    <p>/</p>
                    <p>Contacto</p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20 mx-4">
                {
                    data.map(item => (
                        <div key={item.id}
                             className={`border-2 border-brand/10 rounded-3xl p-6`}>
                            <div
                                className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-brandSecondary/10">
                                <Image src={item.icon} alt={item.title} width={30} height={30}
                                       className="mx-auto my-4"/>
                            </div>
                            <h3 className="text-xl font-bold mb-3 mt-2 text-brand">{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-center">
                <div className="px-5 md:px-20 py-24 grid grid-cols-12 gap-5 md:gap-10 items-center max-w-[1400px]">
                    <div className="relative col-span-12 md:col-span-6 h-[380px] md:h-[650px]">
                        <Image src="/contact.jpg" fill alt="about image" className="rounded-xl" objectFit="cover"/>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <span
                            className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Contacto</span>
                        <h2 className="text-3xl md:text-6xl mt-5 text-brand">Ponte en Contacto</h2>
                        <h2 className="text-3xl md:text-6xl text-brandSecondary">con Nosotros</h2>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <Input type="text" className="h-[50px]" placeholder="Ingresar Nombre"/>
                            <Input type="email" className="h-[50px]" placeholder="Ingresar Correo"/>
                            <Input type="text" className="h-[50px]" placeholder="Ingresar Numero de Telefono"/>
                            <Input type="text" className="h-[50px]" placeholder="Ingresar Asunto"/>
                            <Textarea className="col-span-2" rows={5} placeholder="Tu Mensaje"/>
                        </div>

                        <Button variant="branded" className="w-full mt-10">
                            Enviar Mensaje
                        </Button>


                    </div>
                </div>
            </div>
        </div>
    )
}
