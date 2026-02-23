import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import TrustedBy from "@/components/sections/TrustedBy";
import Solutions from "@/components/sections/Solutions";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Results from "@/components/sections/Results";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import WaveDivider from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Solutions />
      <TrustedBy />
      <WaveDivider from="white" to="light" />
      <WhoWeServe />
      <WaveDivider from="light" to="dark" />
      <Results />
      <WaveDivider from="dark" to="dark" />
      <WhyUs />
      <WaveDivider from="dark" to="white" />
      <Process />
      <WaveDivider from="white" to="light" />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
