import Image from "next/image";

const data = [
    {
        id: 1,
        icon: '',
        title: 'Neck Pain',
    },
    {
        id: 2,
        icon: '',
        title: 'Shoulder Pain',
    },
    {
        id: 3,
        icon: '',
        title: 'Hip Pain',
    },
    {
        id: 4,
        icon: '',
        title: 'Knee Pain',
    },
    {
        id: 5,
        icon: '',
        title: 'Elbow Pain',
    },
    {
        id: 6,
        icon: '',
        title: 'Tricep Pain',
    },
    {
        id: 7,
        icon: '',
        title: 'Hand Pain',
    },
    {
        id: 8,
        icon: '',
        title: 'Foot Pain',
    },
    {
        id: 9,
        icon: '',
        title: 'Ankle Pain',
    },
]

export function NeedAttentionBanner() {
    return (
        <div className="relative h-[1300px] md:h-[640px] w-full flex items-center justify-center">
            <Image src="/need-attention.jpg" objectFit="cover" fill alt=""/>
            <div className="absolute top-0 left-0 w-full h-full bg-brand/80"/>
            <div className="z-20 px-10 md:px-0 flex flex-col items-center max-w-[970px]">
                <span className="rounded-full bg-brandSecondary px-4 py-2 text-white">Need Attention</span>
                <h3 className="text-3xl md:text-6xl text-white my-10 text-center">Where Do You Need Attention?</h3>
                <p className="text-md text-white text-center">
                    We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy
                    services are designed to provide prompt and effective care to help you manage.
                </p>

                <div className="grid grid-cols-3 gap-8 mt-10 w-full">
                    {data.map((item, index) => (
                        <div key={item.id} className={`col-span-3 md:col-span-1 flex gap-4 items-center pb-4 ${index < 6 && 'border-b-[1px] border-gray-500'}`}>
                            <div className="bg-brandSecondary rounded-lg w-[32px] h-[32px]"/>
                            <h6 className="text-white text-xl">{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
