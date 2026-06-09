import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustedBySection from "@/components/TrustedBySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CinematicBrandSection from "@/components/CinematicBrandSection";
import Preloader from "@/components/Preloader";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TrustedBySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CinematicBrandSection />
      <CTASection overlap={true} />
      <FooterSection />
      <BackToTopButton />
    </>
  );
}
