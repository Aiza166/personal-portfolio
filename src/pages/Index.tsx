import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100);
    return () => clearTimeout(t);
  }, [hash]);
  return (
    <div id="hero" className="min-h-screen bg-background noise-bg overflow-x-clip">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <FloatingNav />
    </div>
  );
};

export default Index;
