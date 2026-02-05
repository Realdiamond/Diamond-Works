import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BentoPortfolio from "@/components/sections/BentoPortfolio";
import ImpactStatement from "@/components/sections/ImpactStatement";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsShowcaseWrapper from "@/components/sections/TestimonialsShowcaseWrapper";
import BlogSection from "@/components/sections/BlogSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBySection />
      <ServicesGrid />
      <BentoPortfolio />
      <ImpactStatement />
      <ProcessTimeline />
      <TestimonialsShowcaseWrapper />
      <BlogSection />
      <FinalCTA />
    </Layout>
  );
}
