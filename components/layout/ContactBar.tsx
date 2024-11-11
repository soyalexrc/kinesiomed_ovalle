import {Facebook, Instagram, Linkedin, Twitter, Phone, Youtube} from "lucide-react";

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
        icon: <Facebook />,
        href: ''
    },
    {
        id: 2,
        title: 'Twitter',
        icon: <Twitter />,
        href: ''
    },
    {
        id: 3,
        title: 'Instagram',
        icon: <Instagram />,
        href: ''
    },
    {
        id: 4,
        title: 'Youtube',
        icon: <Youtube />,
        href: ''
    }
]

export function ContactBar() {
    return (
        <div className="bg-brand text-white min-h-[40px] flex justify-center lg:justify-between items-center px-4 fixed top-0 w-full z-40">
            <div className="flex items-center gap-8">
                {
                    contactBarItems.map((item, index) => (
                        <span className={`${index === 2 && 'hidden sm:block'}`} key={item.id}>
                        {item.title}
                        </span>
                    ))
                }
            </div>
            <div className="hidden lg:flex items-center gap-4">
                {
                    socialIcons.map((item) => (
                        <span className="" key={item.id}>
                            {item.icon}
                        {/*{item.title}*/}
                    </span>
                    ))
                }
            </div>
        </div>
    )
}
