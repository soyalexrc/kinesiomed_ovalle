import Image from "next/image";
import {Separator} from "@/components/ui/separator";

// const bullets = [
//     {id: 1, text: "Planes de tratamiento personalizados."},
//     {id: 2, text: "Resultados tangibles."},
//     {id: 3, text: "Equipo de expertos."}
// ]

const stats = [
    {
        id: 1,
        title: '1200+',
        text: 'Pacientes / año',
        icon: '/icons/doctor.svg',
    },
    {
        id: 2,
        title: '98%',
        text: 'Tasa de mejora',
        icon: '/icons/success-rate.svg',
    },
    {
        id: 3,
        title: '700+',
        text: 'Tratamientos ',
        icon: '/icons/treatments.svg',
    },
]

export function ProudBanner() {
    return (
        <div className="flex justify-center  bg-brandSecondary/10">
            <div className="px-5 md:px-20 py-24 max-w-[1400px] grid grid-cols-2 gap-12">
                <div className="grid gap-4 grid-cols-2 col-span-2 md:col-span-1">
                    <div className="relative h-[340px] md:h-[620px]">
                        <Image src="/proud-1.jpg" fill alt="proud-1" className="rounded-xl" objectFit="cover"/>
                    </div>
                    <div className="relative h-[340px] md:h-[620px]">
                        <Image src="/proud-2.jpg" fill alt="proud-2" className="rounded-xl" objectFit="cover"/>
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <span
                        className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Solucion a tu plan</span>
                    <div className="my-12">
                        <h3 className="text-3xl md:text-6xl text-brandSecondary">Nos orgullece dar tratamientos de calidad <span
                            className="text-brand">y</span>
                        </h3>
                        <h3 className="text-3xl md:text-6xl text-brand">obtener resultados óptimos en cada paciente.</h3>
                    </div>
                    {/* <p className="text-md mb-12">
                        Cada persona es única, y así también lo son sus necesidades. En Kinesiomed Ovalle, diseñamos
                        planes de tratamiento personalizados para abordar tus dolencias de manera eficaz. Nuestro
                        objetivo es brindarte la solución más adecuada para que puedas recuperar tu movilidad y
                        bienestar lo antes posible. Con tratamientos de calidad y un seguimiento cercano, te ayudaremos
                        a alcanzar tus metas
                    </p> */}

                    {/* <ul className="flex flex-col gap-4">
                        {bullets.map((bullet) => (
                            <li key={bullet.id}>
                                {bullet.text}
                            </li>
                        ))}
                    </ul> */}

                    <Separator className="my-10"/>

                    <div className="grid grid-cols-3 gap-10 md:gap-1">
                        {
                            stats.map((stat) => (
                                <div key={stat.id} className="flex items-center gap-4 col-span-3 sm:col-span-1">
                                    {/*<div className="flex justify-center items-center bg-brandSecondary/10 rounded-xl w-[50px] h-[50px]">*/}
                                        <Image src={stat.icon} alt={stat.title} width={40} height={40}/>
                                    {/*</div>*/}
                                    <div>
                                        <h5 className="text-xl text-brand">{stat.title}</h5>
                                        <p>{stat.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
