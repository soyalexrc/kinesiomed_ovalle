import {
    AboutUsBanner,
    Hero,
    ProudBanner,
    ServicesBanner,
    WhyUsBanner,
    TestimonialsBanner
} from "@/components/home";
import WhatsAppButton from "@/components/layout/WhatAppButton";

export default function Home() {
    return (
        <div className="relative">
            <Hero />
            <AboutUsBanner />
            <ServicesBanner />
            <ProudBanner />
            <WhyUsBanner />
            {/*<NeedAttentionBanner />*/}
            {/*<TeamBanner />*/}
            <TestimonialsBanner />
            {/*<BlogBanner />*/}
            <WhatsAppButton />
        </div>
    )
}
