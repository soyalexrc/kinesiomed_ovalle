import Image from "next/image";
import {Separator} from "@/components/ui/separator";

export function AboutUsBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-5 md:px-20 py-24 grid grid-cols-12 gap-5 md:gap-10 items-center max-w-[1400px]">
                <div className="relative col-span-12 md:col-span-5 h-[380px] md:h-[650px]">
                    <Image src="/about-img.jpg" fill alt="about image" className="rounded-xl" objectFit="cover"/>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">About Us</span>
                    <h2 className="text-3xl md:text-6xl mt-5 text-brand">We Are The Best For</h2>
                    <h2 className="text-3xl md:text-6xl text-brandSecondary">Physiotherapy</h2>
                    <p className="text-md my-6">
                        We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy
                        services are designed to provide prompt and effective care to help you manage pain, prevent
                        further
                        injury, and start your recovery process as quickly as possible.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                        <div className="col-span-2 md:col-span-1">
                            Nutrition Strategies
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            Be Pro Active
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            Workout Routines
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            Support & Motivation
                        </div>
                        <Separator className="col-span-2"/>
                        <div className="col-span-2 md:col-span-1">
                            Workout Routines
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            Support & Motivation
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
