import Aafiyat from "@/components/sections/Aafiyat";
import Capabilities from "@/components/sections/Capabilities";
import CaseStudies from "@/components/sections/CaseStudies";
import Companies from "@/components/sections/Companies";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Writing from "@/components/sections/Writing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Capabilities />
      <Aafiyat />
      <CaseStudies />
      <Projects />
      <Experience />
      <Skills />
      <Writing />
      <Contact />
    </main>
  );
}
