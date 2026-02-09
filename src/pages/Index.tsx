import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import WorkSection from "@/components/WorkSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="relative">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <Marquee />
      <WorkSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
