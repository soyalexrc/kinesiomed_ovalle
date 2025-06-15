import Image from "next/image";

const data = [
    {
        id: 1,
        icon : '/icons/team.svg',
        title: 'Equipo Experimentado',
        text: 'Nuestro equipo dedicado de terapeutas altamente calificados aporta años de experiencia a cada interacción con el paciente.'
    },
    {
        id: 2,
        icon : '/icons/tech.svg',
        title: 'Tecnologia Avanzada',
        text: 'Utilizamos equipos y técnicas de última generación para brindar tratamientos efectivos y eficientes.'
    },
    {
        id: 3,
        icon : '/icons/patient-centered.svg',
        title: 'Enfoque Centrado en el Paciente',
        text: 'Su comodidad y bienestar son nuestras principales prioridades. Adaptamos nuestros tratamientos a sus necesidades específicas.'
    },
    {
        id: 4,
        icon : '/icons/affordable.svg',
        title: 'Cómodo y Accesible',
        text: 'Nuestra clínica está convenientemente ubicada y ofrece una programación de citas flexible para adaptarse a su ajetreado estilo de vida.'
    },
    {
        id: 5,
        icon : '/icons/expertise.svg',
        title: 'Experiencia y Conocimientos',
        text: 'Nuestros terapeutas se especializan en una amplia gama de condiciones, garantizando que usted reciba atención experta.'
    },
    {
        id: 6,
        icon : '/icons/community.svg',
        title: 'Participación Comunitaria',
        text: 'Estamos comprometidos a retribuir a nuestra comunidad y promover iniciativas de salud y bienestar.'
    },

]

export function WhyUsBanner() {
    return (
        <div className="flex justify-center">
            <div className="px-5 md:px-20 py-24 max-w-[1400px] w-full">
                <div className="flex flex-col items-center ">
                    <span className="rounded-full bg-brandSecondary/10 text-brand px-4 py-2">¿Por qué nosotros?</span>
                    <div className="flex flex-col items-center my-12">
                        <h3 className="text-3xl md:text-6xl text-brandSecondary">Excelencia en <span
                            className="text-brand">Cuidado y </span></h3>
                        <h3 className="text-brand text-3xl md:text-6xl"> Rehabilitación</h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-12 relative">
                    <div className="hidden md:block  md:w-[230px] md:h-[400px] md:top-[63%] xl:top-[50%] xl:w-[370px] xl:h-[540px] absolute"
                         style={{left: '50%', transform: 'translate(-50%, -50%)'}}>
                        <Image src="/why-us.png" fill alt="why us"/>
                    </div>
                    {data.map((item, index) => (
                        <>
                            <div key={item.id}
                                 className={`hidden md:flex col-span-2 px-8 md:col-span-1 border-b-[1px] items-center gap-4 h-[180px] ${index % 2 !== 0 ? `flex-row-reverse bg-brand ${index === 1 ? 'rounded-tr-2xl' : index === 5 ? 'rounded-br-2xl' : ''}` : `bg-brandSecondary/10 ${index === 0 ? 'rounded-tl-2xl' : index === 4 ? 'rounded-bl-2xl' : ''}`}`}>
                                <div
                                    className={`rounded-2xl flex justify-center items-center min-w-[52px] min-h-[52px] ${index % 2 === 0 ? 'bg-brandSecondary/10 ' : 'bg-white'}`}>
                                    <Image src={item.icon} alt={item.title} width={30} height={30} />
                                </div>
                                <div className="max-w-[300px]">
                                    <h5 className={`text-xl ${index % 2 !== 0 ? 'text-right text-white' : 'text-brand'}`}>{item.title}</h5>
                                    <p className={`text-md mt-2 ${index % 2 !== 0 && 'text-right text-white'}`}>{item.text}</p>
                                </div>
                            </div>
                            <div key={item.id}
                                 className={`flex md:hidden col-span-2 px-8 md:col-span-1 border-b-[1px] items-center gap-4 min-h-[200px] ${index > 2  ? ` bg-brand ${index === 5 ? 'rounded-b-2xl' : ''}` : `bg-brandSecondary/10 ${index === 0 ? 'rounded-t-2xl' : index === 4 ? 'rounded-bl-2xl' : ''}`}`}>
                                <div
                                    className={`rounded-2xl flex justify-center items-center  min-w-[52px] min-h-[52px] ${index < 3 ? 'bg-brandSecondary/10 ' : 'bg-white'}`}>
                                    <Image src={item.icon} alt={item.title} width={30} height={30} />
                                </div>
                                <div className="max-w-[300px]">
                                    <h5 className={`text-xl ${index > 2 ? ' text-white' : 'text-brand'}`}>{item.title}</h5>
                                    <p className={`text-md mt-2 ${index > 2 && ' text-white'}`}>{item.text}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
