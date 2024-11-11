import {Button} from "@/components/ui/button";

const data = [
    {
        id: 1,
        icon: '',
        title: 'Terapia Manual',
        text: 'Experimente técnicas prácticas para aliviar el dolor y mejorar la movilidad.'
    },
    {
        id: 2,
        icon: '',
        title: 'Dolor Crónico',
        text: 'Encuentre alivio duradero de las condiciones de dolor crónico con nuestros tratamientos especializados.'
    },
    {
        id: 3,
        icon: '',
        title: 'Terapia de Mano',
        text: 'Restaure la función de la mano y la muñeca con atención experta y ejercicios personalizados.'
    },
    {
        id: 4,
        icon: '',
        title: 'Terapia Deportiva',
        text: 'Optimice el rendimiento atlético y acelere la recuperación de lesiones.'
    },
    {
        id: 5,
        icon: '',
        title: 'Terapia con Ventosas',
        text: 'Favorece el flujo sanguíneo y alivia la tensión muscular con esta antigua técnica.'
    },
    {
        id: 6,
        icon: '',
        title: 'Teraia Laser',
        text: 'Acelere la curación y reduzca la inflamación con tecnología láser avanzada.'
    },
    {
        id: 7,
        icon: '',
        title: '¿Estás listo para comenzar tu viaje a la recuperación?',
        text: 'Contáctenos hoy para programar una cita.',
        isCta: true,
        ctaText: 'Agendar una cita',
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
                             className={`border-2 border-brand/10 rounded-3xl p-6 ${item.isCta ? 'col-span-4 md:col-span-2 flex flex-col items-center' : 'col-span-4 sm:col-span-2 md:col-span-1'}`}>
                            <div className="w-[52px] h-[52px] rounded-xl bg-brandSecondary/10"/>
                            <h5 className="text-brand text-xl my-4">{item.title}</h5>
                            <p className="text-md">{item.text}</p>
                            {
                                item.isCta ? (
                                    <Button variant="brandedSecondary" className="mt-4">{item.ctaText}</Button>
                                ) : (
                                    <div className="w-[36px] mt-4 h-[36px] rounded-full bg-brandSecondary/10"/>

                                )

                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
