import {Button} from "@/components/ui/button";
import Image from "next/image";

const team = [
    {
        id: 1,
        image: '/team-1.jpg',
        name: 'Dr. Emily Brown',
        role: 'Senior Physiotherapist'
    },
    {
        id: 2,
        image: '/team-2.jpg',
        name: 'Dr. Lisa Johnson',
        role: 'Pediatric Therapist'
    },
    {
        id: 3,
        image: '/team-3.jpg',
        name: 'Dr. Jessica Wilson',
        role: 'Neurological Therapist'
    },
    {
        id: 4,
        image: '/team-4.jpg',
        name: 'Dr Linda Thomas',
        role: 'Orthopedic Therapist'
    },

]

export function TeamBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-10 md:px-20 py-24 max-w-[1400px] w-full">
                <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Therapist Team</span>

                <div className="flex items-center justify-between flex-wrap my-8">
                    <div>
                        <h3 className="text-3xl md:text-6xl text-brandSecondary">Our Dedicated <span className="text-brand">& Experienced</span>
                        </h3>
                        <h3 className="text-3xl md:text-6xl text-brand">Therapist Team</h3>
                    </div>
                    <Button>View All Team</Button>
                </div>

                <div className="grid grid-cols-12 gap-6">
                    {
                        team.map((item) => (
                            <div key={item.id} className="col-span-12 md:col-span-6 lg:col-span-3">
                                <div className="w-full relative h-[400px] sm:h-[550px] md:h-[500px] lg:h-[340px]">
                                    <Image src={item.image} alt="Equipo imagen" fill
                                           className="object-cover rounded-3xl"/>
                                </div>
                                <div className="flex items-center flex-col mt-4 gap-2">
                                    <h6 className="text-lg font-bold">{item.name}</h6>
                                    <p className="text-md">{item.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
