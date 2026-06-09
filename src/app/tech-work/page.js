import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: 'Tech Work - Paperkite Labs',
  description: 'Selected technical projects and robust platforms built by Paperkite Labs.',
};

export default function TechWorkPage() {
  return (
    <>
      <Navbar />
      <WorkSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
