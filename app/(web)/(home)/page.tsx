import AdBanner from "@/components/ad-banner";
import {
    AboutUsBanner,
    Hero,
    ProudBanner,
    ServicesBanner,
    WhyUsBanner,
    TestimonialsCarousel
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
            <TestimonialsCarousel />
            <ViewTracker pageName="home_page" serviceType={null} />
            {/*<BlogBanner />*/}
            <WhatsAppButton location="home_page" />
            <AdBanner />    
        </div>
    )
}
