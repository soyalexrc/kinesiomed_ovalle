import {
    AboutUsBanner,
    Hero,
    ProudBanner,
    ServicesBanner,
    WhyUsBanner,
    TestimonialsBanner
} from "@/components/home";

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
        </div>
    )
}
