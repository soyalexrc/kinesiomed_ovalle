import {AboutUsBanner, ProudBanner, TestimonialsBanner} from "@/components/home";
import Link from "next/link";
import {Metadata} from "next";
import WhatsAppButton from "@/components/layout/WhatAppButton";
import ViewTracker from "@/lib/tag-manager/components/view-tracker";

export const metadata: Metadata = {
    title: 'Acerca de Nosotros',
    description: 'Descubre quiénes somos y por qué somos tu mejor opción para cuidar de tu salud. Nuestro equipo de profesionales te brindará la atención que necesitas.',
    keywords: [
        'rehabilitación', 'kinesiología', 'equipo profesional', 'Concon', 'Ovalle', 'centro de rehabilitación'
    ]
}


export default function Page() {
    return (
        <div className="relative">
            <div className="bg-brandSecondary/10 h-[300px] flex flex-col justify-center items-center gap-5">
                <h1 className="text-6xl ">Acerca de Nosotros</h1>
                <div className="flex gap-5">
                    <Link href="/">Inicio</Link>
                    <p>/</p>
                    <p>Acerca de Nosotros</p>
                </div>
            </div>

            <AboutUsBanner/>
            {/* <ProudBanner/> */}
            {/* <TestimonialsBanner/> */}
            <WhatsAppButton location="home_page" />
            <ViewTracker pageName="about_page" serviceType={null} />
            
        </div>
    )
}
