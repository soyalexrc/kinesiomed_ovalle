import Image from "next/image";
import {Button} from "@/components/ui/button";

const data = [
    {
        image: '',
        title: 'Experts Therapists',
        text: 'Our team of licensed and certified physiotherapists',
        id: 1,
    },
    {
        image: '',
        title: 'Emergency Service',
        text: 'Our emergency physiotherapy services are designed to address',
        id: 2,
    },
    {
        image: '',
        title: 'Free Consultant',
        text: 'Our mission is to enhance the quality of life of our patients',
        id: 3,
    },

]

export function Hero() {
    return (
        <>
            <div className="w-full h-[500px] md:h-[750px] relative flex items-center justify-between px-10 md:px-0">
                <Image src="/hero.jpg" fill alt="hero" objectFit="cover"/>
                <div className="absolute top-0 left-0 w-full h-full bg-brand/50"/>
                <div className="z-20 text-white flex flex-col items-center w-full">
                    <span className="bg-brandSecondary px-4 py-2 rounded-full mb-8">Bienvenido a Kinesiomed Ovalle</span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl text-center max-w-[680px]">Destino para el alivio y el bienestar</h1>
                    <p className="max-w-[680px] mt-12 mb-8 text-center">
                     Tu salud en las mejores manos.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        {/*<Button variant="brandedSecondary" className="rounded-full px-6 py-4">Explore Services</Button>*/}
                        <Button variant="brandedSecondary" className="rounded-full px-6 py-4">Agendar una cita</Button>
                    </div>
                </div>
            </div>
            {/*<div className="flex justify-center bg-brand">*/}
            {/*    <div className="grid grid-cols-12 gap-8 px-8 md:px-16 py-12 text-white  max-w-[1400px]">*/}
            {/*        {data.map((item, index) => (*/}
            {/*            <div key={item.id}*/}
            {/*                 className={`col-span-12 md:col-span-6 lg:col-span-4 flex gap-4 p-4 items-start ${index === 1 && 'border-l-none md:border-l-[1px] border-r-none  lg:border-r-[1px]'}`}>*/}
            {/*                <div className="min-h-[64px] min-w-[64px] bg-brandSecondary rounded-md"/>*/}
            {/*                <div>*/}
            {/*                    <h3 className="text-xl font-bold">{item.title}</h3>*/}
            {/*                    <p>{item.text}</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
