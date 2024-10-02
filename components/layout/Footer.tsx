import Image from "next/image";
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter} from "lucide-react";
import {Separator} from "@/components/ui/separator";

export function Footer() {
    return (
        <div className="flex justify-center items-center flex-col bg-brand">
            <div className="px-10 md:px-20 py-12 max-w-[1400px] w-full">
                <div className="text-white grid grid-cols-12 lg:gap-20">
                    <div className="mb-8 lg:mb-0 col-span-12 lg:col-span-3">
                        <Image src="/logo.svg" alt="logo" width={100} height={50}/>
                        <p className="text-sm">
                            We understand that injuries and acute pain can happen unexpectedly. Our emergency
                            physiotherapy.
                        </p>
                        <div className="flex gap-4 mt-14">
                            <Facebook/>
                            <Twitter/>
                            <Linkedin/>
                            <Instagram/>
                        </div>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Working Hours</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm">Mon To Fri: 10:00 AM To 6:00 PM</li>
                            <li className="text-sm">Sat: 10:00 AM To 3:00 PM</li>
                            <li className="text-sm">Sun: Closed</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">More Services</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm">Manual Therapy</li>
                            <li className="text-sm">Chronic Pain</li>
                            <li className="text-sm">Hand Therapy</li>
                        </ul>
                    </div>
                    <div className="mb-8 lg:mb-0 col-span-12 md:col-span-4 lg:col-span-3">
                        <h6 className="text-xl font-bold mb-4">Contact</h6>
                        <ul className="flex flex-col gap-4">
                            <li className="text-sm flex items-center gap-2">
                                <Phone size={18}/>
                                (+0) 483 3838 82
                            </li>
                            <li className="text-sm flex items-center gap-2">
                                <Mail size={18}/>
                                Domain@gmail.com
                            </li>
                            <li className="text-sm flex gap-2">
                                <MapPin size={18}/>
                                24/11 Robert Road, New York, USA
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator className="my-8"/>
                <div className="flex justify-between items-center flex-wrap">
                    <p className="text-white text-sm">Copyright 2024 Kinesiomed Ovalle. All Right Reserved.</p>
                    <ul className="text-white flex gap-4 text-sm">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
