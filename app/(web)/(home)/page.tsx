import {
    AboutUsBanner,
    Hero,
    ProudBanner,
    ServicesBanner,
    WhyUsBanner,
    TestimonialsBanner
} from "@/components/home";
import WhatsAppButton from "@/components/layout/WhatAppButton";
import ViewTracker from "@/lib/tag-manager/components/view-tracker";

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
            <ViewTracker pageName="home_page" serviceType={null} />
            {/*<BlogBanner />*/}
            <WhatsAppButton location="home_page" />
        </div>
    )
}
