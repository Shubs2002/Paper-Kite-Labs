import Navbar from "@/components/Navbar";
import CreativeWorkSection from "@/components/CreativeWorkSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: 'Creative Work - Paperkite Labs',
  description: 'Films, presentations, and visual identity projects by Paperkite Labs.',
};

export default function CreativeWorkPage() {
  return (
    <>
      <Navbar />
      <CreativeWorkSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
