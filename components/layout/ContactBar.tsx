const contactBarItems = [
    {
        id: 1,
        title: '+(123) 698-5312',
        icon: '',
        href: ''
    },
    {
        id: 2,
        title: 'info@domain.com',
        icon: '',
        href: ''
    },
    {
        id: 3,
        title: '24/11 Robert Road, New York, USA',
        icon: '',
        href: ''
    }
]

const socialIcons = [
    {
        id: 1,
        title: 'Facebook',
        icon: '',
        href: ''
    },
    {
        id: 2,
        title: 'Twitter',
        icon: '',
        href: ''
    },
    {
        id: 3,
        title: 'Instagram',
        icon: '',
        href: ''
    },
    {
        id: 4,
        title: 'Youtube',
        icon: '',
        href: ''
    }
]

export function ContactBar() {
    return (
        <div className="bg-brand text-white min-h-[40px] flex justify-center md:justify-between items-center px-4">
            <div className="flex items-center gap-8">
                {
                    contactBarItems.map((item, index) => (
                        <span className={`${index === 2 && 'hidden sm:block'}`} key={item.id}>
                        {item.title}
                        </span>
                    ))
                }
            </div>
            <div className="hidden md:flex items-center gap-4">
                {
                    socialIcons.map((item) => (
                        <span className="" key={item.id}>
                        {item.title}
                    </span>
                    ))
                }
            </div>
        </div>
    )
}
