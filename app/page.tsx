import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BentoPortfolioWrapper from "@/components/sections/BentoPortfolioWrapper";
import ImpactStatement from "@/components/sections/ImpactStatement";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TestimonialsShowcaseWrapper from "@/components/sections/TestimonialsShowcaseWrapper";
import BlogSection from "@/components/sections/BlogSection";
import FinalCTA from "@/components/sections/FinalCTA";

// Use webhook for instant updates - no time-based revalidation
export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBySection />
      <ServicesGrid />
      <BentoPortfolioWrapper />
      <ImpactStatement />
      <ProcessTimeline />
      <TestimonialsShowcaseWrapper />
      <BlogSection />
      <FinalCTA />
    </Layout>
  );
}
