import Image from "next/image";
import AppointmentButton from "@/components/AppointmentButton";
import {ArrowRight} from "lucide-react";
import {TestimonialsBanner, WhyUsBanner} from "@/components/home";
import Link from "next/link";
import {Metadata} from "next";
import WhatsAppButton from "@/components/layout/WhatAppButton";
import ViewTracker from "@/lib/tag-manager/components/view-tracker";

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
        title: 'Dolor Crónico',
        text: 'Encuentre alivio duradero de las condiciones de dolor crónico con nuestros tratamientos especializados.'
    },
    {
        id: 3,
        icon: '/icons/hand.svg',
        title: 'Terapia de Mano',
        text: 'Restaure la función de la mano y la muñeca con atención experta y ejercicios personalizados.'
    },
    {
        id: 4,
        icon: '/icons/sports.svg',
        title: 'Terapia Deportiva',
        text: 'Optimice el rendimiento atlético y acelere la recuperación de lesiones.'
    },
    {
        id: 5,
        icon: '/icons/cupping.svg',
        title: 'Terapia con Ventosas',
        text: 'Favorece el flujo sanguíneo y alivia la tensión muscular con esta antigua técnica.'
    },
    {
        id: 6,
        icon: '/icons/laser.svg',
        title: 'Teraia Laser',
        text: 'Acelere la curación y reduzca la inflamación con tecnología láser avanzada.'
    },
    {
        id: 7,
        icon: '/icons/calendar.svg',
        title: '¿Estás listo para comenzar tu viaje a la recuperación?',
        text: 'Contáctenos hoy para programar una cita.',
        isCta: true,
        ctaText: 'Agendar una cita',
    },
]

export const metadata: Metadata = {
    title: 'Servicios',
    description: ' Ofrecemos una amplia gama de servicios de kinesiología para ayudarte a recuperar tu movilidad y bienestar. ¡Conoce todos nuestros tratamientos!',
    keywords: [
        'rehabilitación', 'kinesiología', 'equipo profesional', 'Concon', 'Ovalle', 'centro de rehabilitación', 'tratamientos', 'fisioterapia'
    ]
}



export default function Page() {
    return (
        <div className="relative">
            <div className="bg-brandSecondary/10 h-[300px] flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl ">Servicios</h1>
                <div className="flex gap-5">
                    <Link href="/">Inicio</Link>
                    <p>/</p>
                    <p>Servicios</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="px-5 md:px-20 py-24 max-w-[1400px]">
                    <div className="grid grid-cols-4 gap-6 mt-12">
                        {data.map((item) => (
                            <div key={item.id}
                                 className={`border-2 border-brand/10 rounded-3xl p-6 ${item.isCta ? 'col-span-4 md:col-span-2 flex flex-col items-center' : 'col-span-4 sm:col-span-2 md:col-span-1'}`}>
                                <div
                                    className="flex items-center justify-center w-[52px] h-[52px] rounded-xl bg-brandSecondary/10">
                                    <Image src={item.icon} alt={item.title} width={30} height={30}
                                           className="mx-auto my-4"/>
                                </div>
                                <h5 className="text-brand text-xl my-4">{item.title}</h5>
                                <p className="text-md">{item.text}</p>
                                {
                                    item.isCta ? (
                                        <AppointmentButton text={item.ctaText} className="mt-4"/>
                                    ) : (
                                        <div
                                            className="w-[36px] flex justify-center items-center mt-4 h-[36px] rounded-full bg-brandSecondary/10">
                                            <ArrowRight color="#06268B"/>
                                        </div>
                                    )
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <TestimonialsBanner/> */}
            {/* <WhyUsBanner/> */}
            <WhatsAppButton location="home_page" />
            <ViewTracker pageName="service_page" serviceType={null} />
            
        </div>
    )
}
