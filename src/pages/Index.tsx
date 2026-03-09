import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div id="hero" className="min-h-screen bg-background noise-bg">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <FloatingNav />
    </div>
  );
};

export default Index;
