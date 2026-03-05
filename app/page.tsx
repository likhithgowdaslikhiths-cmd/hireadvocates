import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeServices from "@/components/HomeServices";
import OnlineConsultationSection from "@/components/OnlineConsultationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <HomeServices />
      <OnlineConsultationSection />
      <TestimonialsSection />
      <BlogSection />

    </>
  );
}