import Image from "next/image";
import {Star} from "lucide-react";

const reviews = [
    {
        id: 1,
        score: 5,
        text: '"La atención experta de Kinesiomed Ovalle me ayudó a recuperarme rápidamente de una lesión reciente. Muy recomendable."',
        image: '',
        name: 'Dr. Carlos Ramirez',
        role: 'Cirujano'
    },
    {
        id: 2,
        score: 5,
        text: '"Alivió mi dolor de espalda crónico y mejoró mi bienestar general. Una gran experiencia."',
        image: '',
        name: 'Sofia Perez',
        role: 'Profesora'
    },
    {
        id: 3,
        score: 5,
        text: '"Mejoró su postura y alivió el dolor. Personal amable y capacitado."',
        image: '',
        name: 'Pablo Martinez',
        role: 'Consultor de TI'
    },

]

export function TestimonialsBanner() {
    return (
        <div className="relative h-[1300px] md:h-[750px] w-full flex items-center justify-center">
            <Image src="/testimonial-bg.svg" objectFit="cover" fill alt=""/>
            <div className="absolute top-0 left-0 w-full h-full bg-brand/30"/>
            <div className="z-20 flex px-10 md:px-0 flex-col items-center max-w-[970px]">
                <span className="rounded-full bg-brandSecondary px-4 py-2 text-white">Reseñas</span>
                <h3 className="text-3xl md:text-6xl text-white my-10">Lo que <span className="text-brand">Dicen Nuestros Pacientes</span>
                </h3>
                <p className="text-md text-white text-center">
                    Experimente la diferencia de la atención personalizada, la tecnología avanzada y el compromiso con
                    su bienestar. Nuestros terapeutas capacitados están dedicados a ayudarlo a lograr una salud y una
                    recuperación óptimas. </p>

                <div className="grid grid-cols-12 gap-8 mt-10 w-full">
                    {
                        reviews.map(testimonial => (
                            <div key={testimonial.id}
                                 className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-2xl p-8 flex flex-col justify-between">
                                <div className="flex gap-2">
                                    {
                                        Array.from(Array(5).keys())
                                            .map((score) => (
                                                <Star size={18} key={score}
                                                      className={`text-yellow-500 ${score < testimonial.score && 'fill-yellow-500'}`}/>
                                            ))
                                    }
                                </div>
                                <p className="text-sm leading-6 my-6">{testimonial.text}</p>
                                <div className="flex gap-4">
                                    {
                                        testimonial.image ?
                                            <div className="w-[56px] h-[56px] rounded-full bg-gray-200"/>
                                            :
                                            <div className="w-[56px] h-[56px] rounded-full bg-gray-200"/>
                                    }
                                    <div>
                                        <h6 className="text-lg font-bold">{testimonial.name}</h6>
                                        <p className="text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/*<div className="absolute flex gap-2" style={{bottom: '5%', left: '50%', transform: 'translateX(-50%)'}}>*/}
                {/*    {*/}
                {/*        Array.from(Array(4).keys())*/}
                {/*            .map((score) => (*/}
                {/*                <div key={score} className="w-[10px] h-[10px] bg-brand rounded-full"/>*/}
                {/*            ))*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
