import {Button} from "@/components/ui/button";
import Image from "next/image";

const team = [
    {
        id: 1,
        image: '/post-1.jpg',
        title: '10 essential benefits of regular physiotherapy',
    },
    {
        id: 2,
        image: '/post-2.jpg',
        title: 'How to choose the right physiotherapist for you',
    },
    {
        id: 3,
        image: '/post-3.jpg',
        title: 'Importance of correct posture and hot to improve it',
    },


]

export function BlogBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-10 md:px-20 py-24 max-w-[1400px]">
                <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">News & Blog</span>

                <div className="flex items-center flex-wrap justify-between my-12">
                    <div>
                        <h3 className="text-3xl md:text-6xl text-brandSecondary">Our Latest <span className="text-brand">Insights And Updates</span>
                        </h3>
                    </div>
                    <Button>View All Blog</Button>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {
                        team.map((item) => (
                            <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-4">
                                <div className="w-full relative h-[270px] md:h-[290px] lg:h-[253px]">
                                    <Image src={item.image} alt="Equipo imagen" fill
                                           className="object-cover rounded-3xl"/>
                                </div>
                                <div className="flex px-2 flex-col mt-4 gap-2">
                                    <h6 className="text-md font-bold">{item.title}</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
