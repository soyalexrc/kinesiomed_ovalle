import {Button} from "../../../../../Users/luzma/Downloads/kinesiomedovalle-old/kinesiomedovalle/src/components/ui/button";

const data = [
    {
        id: 1,
        icon: '',
        title: 'Manual Therapy',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 2,
        icon: '',
        title: 'Chronic Pain',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 3,
        icon: '',
        title: 'Hand Therapy',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 4,
        icon: '',
        title: 'Sports Therapy',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 5,
        icon: '',
        title: 'Cupping Therapy',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 6,
        icon: '',
        title: 'Laser Therapy',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.'
    },
    {
        id: 7,
        icon: '',
        title: 'Ready To Start Your Journey To Recovery?',
        text: 'We understand that injuries and acute pain can unexpectedly. Our emergency physiotherapy.',
        isCta: true,
        ctaText: 'Book Appointment',
    },
]

export function ServicesBanner() {
    return (
        <div className="px-20 py-24">
            <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Therapist Team</span>
            <div className="mt-6 flex justify-between ">
                <div>
                    <h3 className="text-6xl text-brandSecondary ">We Provide <span
                        className="text-brand"> The Best</span></h3>
                    <h3 className="text-6xl text-brand">Services</h3>
                </div>
                <Button className="rounded-full">
                    View All Services
                </Button>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-12">
                {data.map((item) => (
                    <div key={item.id}
                         className={`border-2 border-brand/10 rounded-3xl p-6 ${item.isCta && 'col-span-2 flex flex-col items-center'}`}>
                        <div className="w-[52px] h-[52px] rounded-xl bg-brandSecondary/10"/>
                        <h5 className="text-brand text-xl my-4">{item.title}</h5>
                        <p className="text-md">{item.text}</p>
                        {
                            item.isCta ? (
                                <Button className="mt-4">{item.ctaText}</Button>
                            ) : (
                                <div className="w-[36px] mt-4 h-[36px] rounded-full bg-brandSecondary/10"/>

                            )

                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
