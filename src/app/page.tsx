import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import { FitSection } from "@/components/fit-section";
import { FooterSection } from "@/components/footer-section";
import { GoalSection } from "@/components/goal-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactSectionWrapper } from "@/components/impact-section-wrapper";
import { OffersSection } from "@/components/offers-section";
import { ProblemSection } from "@/components/problem-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="w-full mx-auto px-6 sm:px-8">
        <TopBar />
        <HeroSection />
        <div className="max-w-3xl mx-auto">
          <ProblemSection />
          <GoalSection />
          <OffersSection />
          <ImpactSectionWrapper />
          <TestimonialSection />
          <FitSection />
          <FAQSection />
          <CTASection />
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
