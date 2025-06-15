import AppointmentButton from "@/components/AppointmentButton";
import Image from "next/image";
import {ArrowRight, Calendar} from "lucide-react";

const data = [
    {
        id: 1,
        icon: '/icons/manual.svg',
        title: 'Terapia Manual',
        text: 'Experimente técnicas prácticas para aliviar el dolor y mejorar la movilidad.'
    },
    {
        id: 2,
        icon: '/icons/chronic.svg',
        title: 'Tratamiento de patologías de columna vertebral',
        text: 'Cervicalgia, Kinesiología motora postural, hernias discales, ciática, lumbalgia (como lista).'
    },
    {
        id: 3,
        icon: '/icons/hand.svg',
        title: 'Tratamiento a condiciones degenerativas',
        text: 'Artrosis, tendinopatias, dolor crónico, reeducación de la marcha, entre otros.'
    },
    {
        id: 4,
        icon: '/icons/sports.svg',
        title: 'Terapia Deportiva',
        text: 'Optimice el rendimiento atlético y acelere la recuperación de lesiones.'
    },
    // {
    //     id: 5,
    //     icon: '/icons/cupping.svg',
    //     title: 'Terapia con Ventosas',
    //     text: 'Favorece el flujo sanguíneo y alivia la tensión muscular con esta antigua técnica.'
    // },
    {
        id: 6,
        icon: '/icons/laser.svg',
        title: 'Equipos ultra especializados',
        text: 'Laser, Magnetoterapia, Ultrasonido y corrientes terapéuticas, Ondas de choque y más.'
    },
    {
        id: 7,
        icon: '/icons/calendar.svg',
        title: '¿Estás listo para comenzar tu viaje a la recuperación?',
        text: 'Contáctenos hoy para programar una cita.',
        isCta: true,
        ctaText: '¡Agenda tu inicio de terapia!',
    },
]

export function ServicesBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-5 md:px-20 py-24 max-w-[1400px]">
                <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Nuestros servicios</span>
                <div className="mt-6 flex justify-between flex-wrap">
                    <div>
                        <h3 className="text-3xl md:text-6xl text-brandSecondary ">Proveemos <span
                            className="text-brand"> Los Mejores</span></h3>
                        <h3 className="text-3xl md:text-6xl text-brand">Servicios</h3>
                    </div>
                    {/*<Button className="rounded-full">*/}
                    {/*    View All Services*/}
                    {/*</Button>*/}
                </div>

                <div className="grid grid-cols-4 gap-6 mt-12">
                    {data.map((item) => (
                        <div key={item.id}
                             className={`border-2 border-brand/10 rounded-3xl p-6 ${item.isCta ? 'col-span-4 md:col-span-3 flex flex-col items-center' : 'col-span-4 sm:col-span-2 md:col-span-1'}`}>
                            <div className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-brandSecondary/10">
                                <Image src={item.icon} alt={item.title} width={30} height={30} className="mx-auto my-4"/>
                            </div>
                            <h5 className="text-brand text-xl my-4">{item.title}</h5>
                            <p className="text-md">{item.text}</p>
                            {
                                item.isCta ? (
                                   <AppointmentButton icon={<Calendar size={24} />} text={item.ctaText} className="mt-4 flex items-center gap-2 text-lg p-6" />
                                ) : (
                                    <div className="w-[36px] flex justify-center items-center mt-4 h-[36px] rounded-full bg-brandSecondary/10">
                                        <ArrowRight color="#06268B" />
                                    </div>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
