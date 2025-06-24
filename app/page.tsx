import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import FAQ from "@/components/Faq";
import Projects from "@/components/projects";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Projects />
      <FAQ />
      <CTA />
    </>
  );
}