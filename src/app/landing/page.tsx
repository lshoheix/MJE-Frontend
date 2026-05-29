import LandingLayout from "@/landing/ui/layout/LandingLayout";
import HeroSection from "@/landing/ui/components/sections/HeroSection";
import PainPointSection from "@/landing/ui/components/sections/PainPointSection";

export default function LandingPage() {
  return (
    <LandingLayout height={4750}>
      <HeroSection />
      <PainPointSection />
    </LandingLayout>
  );
}
