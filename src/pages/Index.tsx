import HeroSection from "@/components/HeroSection";
import IdeaSection from "@/components/IdeaSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StatsSection from "@/components/StatsSection";
import RevenueSection from "@/components/RevenueSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <IdeaSection />
      <ProblemSection />
      <SolutionSection />
      <StatsSection />
      <RevenueSection />
      <CTASection />
    </main>
  );
};

export default Index;
