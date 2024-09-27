import Image from "next/image";
import {Separator} from "../../../../../Users/luzma/Downloads/kinesiomedovalle-old/kinesiomedovalle/src/components/ui/separator";

const bullets = [
    { id: 1, text: "We understand that injuries." },
    { id: 2, text:  "Can happen unexpectedly. Our emergency."},
    { id: 3, text: "We understand that injuries." }
]

const stats = [
    {
        id: 1,
        title: '78+',
        text: 'Skilled Therapist',
        icon: '',
    },
    {
        id: 2,
        title: '98%',
        text: 'Success Rate',
        icon: '',
    },
    {
        id: 3,
        title: '950+',
        text: 'Patients Treated',
        icon: '',
    },
]

export function ProudBanner() {
    return (
        <div className="px-20 py-24 bg-brandSecondary/10 grid grid-cols-2 gap-12">
            <div className="grid gap-4 grid-cols-2">
                <div className="relative h-[620px]">
                    <Image src="/proud-1.jpg" fill alt="proud-1" className="rounded-xl" objectFit="cover"/>
                </div>
                <div className="relative h-[620px]">
                    <Image src="/proud-2.jpg" fill alt="proud-2" className="rounded-xl" objectFit="cover"/>
                </div>
            </div>
            <div>
                <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Solution To Your Plan</span>
                <div className="my-12">
                    <h3 className="text-6xl text-brandSecondary">We Proudly <span className="text-brand">Give</span>
                    </h3>
                    <h3 className="text-6xl text-brand">Quality Treatment</h3>
                </div>
                <p className="text-md mb-12">
                    We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy
                    services are designed to provide prompt and effective care to help you manage.
                </p>

                <ul className="flex flex-col gap-4">
                    {bullets.map((bullet) => (
                        <li key={bullet.id}>
                            {bullet.text}
                        </li>
                    ))}
                </ul>

                <Separator className="my-10"/>

                <div className="grid grid-cols-3">
                    {
                        stats.map((stat) => (
                            <div key={stat.id} className="flex items-center gap-4 col-span-3 sm:col-span-1">
                                <div className="bg-brandSecondary/10 rounded-xl w-[50px] h-[50px]"/>
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
    )
}
