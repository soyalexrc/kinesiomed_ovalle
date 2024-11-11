import Image from "next/image";

export function AboutUsBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-5 md:px-20 py-24 grid grid-cols-12 gap-5 md:gap-10 items-center max-w-[1400px]">
                <div className="relative col-span-12 md:col-span-5 h-[380px] md:h-[650px]">
                    <Image src="/about-img.jpg" fill alt="about image" className="rounded-xl" objectFit="cover"/>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Acerca de nosotros</span>
                    <h2 className="text-3xl md:text-6xl mt-5 text-brand">Nosotros somos los mejores en</h2>
                    <h2 className="text-3xl md:text-6xl text-brandSecondary">Fisioterapia</h2>
                    <p className="text-md my-6">
                        Somos apasionados por tu bienestar. Con años de experiencia en el campo de la fisioterapia,
                        nuestro equipo altamente capacitado está dedicado a brindarte un cuidado personalizado y eficaz.
                        Utilizando las técnicas más avanzadas y un enfoque integral, te ayudaremos a alcanzar tus
                        objetivos de recuperación y mejorar tu calidad de vida.
                    </p>
                    {/*<div className="grid md:grid-cols-2 gap-6 md:gap-12">*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Nutrition Strategies*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Be Pro Active*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Workout Routines*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Support & Motivation*/}
                    {/*    </div>*/}
                    {/*    <Separator className="col-span-2"/>*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Workout Routines*/}
                    {/*    </div>*/}
                    {/*    <div className="col-span-2 md:col-span-1">*/}
                    {/*        Support & Motivation*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}
