import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Results from "@/components/sections/Results";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <WhoWeServe />
      <Results />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
