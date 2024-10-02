import Image from "next/image";
import {Dot, Star} from "lucide-react";

const reviews = [
    {
        id: 1,
        score: 5,
        text: '"We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt."',
        image: '',
        name: 'Jane Smith',
        role: 'Marathon Runner'
    },
    {
        id: 2,
        score: 1,
        text: '"We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt."',
        image: '',
        name: 'Joel Miller',
        role: 'Marathon '
    },
    {
        id: 3,
        score: 4,
        text: '"We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt."',
        image: '',
        name: 'Jane Smith',
        role: 'Marathon Runner'
    },

]

export function TestimonialsBanner() {
    return (
        <div className="relative h-[1300px] md:h-[750px] w-full flex items-center justify-center">
            <Image src="/testimonial-bg.svg" objectFit="cover" fill alt=""/>
            <div className="absolute top-0 left-0 w-full h-full bg-brand/30"/>
            <div className="z-20 flex px-10 md:px-0 flex-col items-center max-w-[970px]">
                <span className="rounded-full bg-brandSecondary px-4 py-2 text-white">Review</span>
                <h3 className="text-3xl md:text-6xl text-white my-10">What <span className="text-brand">Our Clients Say</span></h3>
                <p className="text-md text-white text-center">
                    We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy
                    services are designed to provide prompt and effective care to help you manage.
                </p>

                <div className="grid grid-cols-12 gap-8 mt-10 w-full">
                    {
                        reviews.map(testimonial => (
                            <div key={testimonial.id} className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-2xl p-8">
                                <div className="flex gap-2">
                                    {
                                        Array.from(Array(5).keys())
                                            .map((score) => (
                                                <Star size={18} key={score} className={`text-yellow-500 ${score < testimonial.score && 'fill-yellow-500'}`} />
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
                <div className="absolute flex gap-2" style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                    {
                        Array.from(Array(4).keys())
                            .map((score) => (
                                <div key={score} className="w-[10px] h-[10px] bg-brand rounded-full" />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
