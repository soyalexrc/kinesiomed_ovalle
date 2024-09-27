import Image from "next/image";

const data = [
    {
        id: 1,
        icon : '',
        title: 'Experienced Team',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },
    {
        id: 2,
        icon : '',
        title: 'Advanced Technology',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },
    {
        id: 3,
        icon : '',
        title: 'Patient-Centered Approach',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },
    {
        id: 4,
        icon : '',
        title: 'Convenient And Accessible',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },
    {
        id: 5,
        icon : '',
        title: 'Expertise And Experience',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },
    {
        id: 6,
        icon : '',
        title: 'Community Involvement',
        text: 'We understand that injuries and acute pain can unexpectedly.'
    },

]

export function WhyUsBanner() {
    return (
        <div className="px-20 py-24 ">
            <div className="flex flex-col items-center ">
                <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">Why Us</span>
                <div className="flex flex-col items-center my-12">
                    <h3 className="text-6xl text-brandSecondary">Excellence In <span
                        className="text-brand">Care And</span></h3>
                    <h3 className="text-brand text-6xl"> Rehabilitation</h3>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-12 relative">
                <div className="w-[370px] h-[540px] absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} >
                    <Image src="/why-us.png" fill alt="why us" />
                </div>
                {data.map((item, index) => (
                    <div key={item.id} className={`col-span-2 px-8 md:col-span-1 border-b-[1px] flex items-center gap-4 h-[180px] ${index % 2 !== 0 ? `flex-row-reverse bg-brand ${index === 1 ? 'rounded-tr-2xl' : index === 5 ? 'rounded-br-2xl' : ''}` : `bg-brandSecondary/10 ${index === 0 ? 'rounded-tl-2xl' : index === 4 ? 'rounded-bl-2xl' : '' }` }`}>
                        <div className={`rounded-2xl w-[52px] h-[52px] ${index % 2 === 0 ? 'bg-brandSecondary/10 ' : 'bg-white'}`}/>
                        <div className="max-w-[300px]">
                            <h5 className={`text-xl ${index % 2 !== 0 ? 'text-right text-white' : 'text-brand'}`}>{item.title}</h5>
                            <p className={`text-md mt-2 ${index % 2 !== 0 && 'text-right text-white'}`}>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
