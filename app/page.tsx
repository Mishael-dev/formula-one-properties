import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import FAQ from "@/components/Faq";
import Projects from "@/components/projects";
import CTA from "@/components/cta";
import Achievements from "@/components/achievements";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Projects />
      <FAQ />
      <Achievements />
      <CTA />
    </>
  );
}
