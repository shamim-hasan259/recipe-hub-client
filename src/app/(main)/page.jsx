import ChefCtaSection from "@/components/ChefCtaSection";
import FeatureRecipe from "@/components/FeatureRecipe";
import HeroSection from "@/components/Hero";
import PopularRecipe from "@/components/PopularRecipe";
import StateSection from "@/components/StateSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularRecipe />
      <FeatureRecipe />
      <StateSection />
      <ChefCtaSection />
    </>
  );
}
