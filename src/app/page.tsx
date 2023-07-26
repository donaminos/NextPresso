import { HeroSection, FeaturesSection } from "@/template";

export const metadata = {
  title: "Home | Nextpresso",
  description: "Nextpresso, the blog engine for Next.js lovers",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
