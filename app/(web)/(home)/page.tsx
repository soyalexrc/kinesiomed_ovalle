import {
    AboutUsBanner, BlogBanner,
    Hero,
    NeedAttentionBanner,
    ProudBanner,
    ServicesBanner,
    TeamBanner,
    WhyUsBanner,
    TestimonialsBanner
} from "@/components/home";

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutUsBanner />
            <ServicesBanner />
            <ProudBanner />
            <WhyUsBanner />
            <NeedAttentionBanner />
            <TeamBanner />
            <TestimonialsBanner />
            <BlogBanner />
        </div>
    )
}
