import HeroJourney from "@/components/HeroJourney";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroJourney />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
