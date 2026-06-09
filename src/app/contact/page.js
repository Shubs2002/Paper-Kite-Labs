import Navbar from "@/components/Navbar";
import ContactPageSection from "@/components/ContactPageSection";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: 'Contact - Paperkite Labs',
  description: 'Get in touch with Paperkite Labs to discuss your next project or book a discovery call.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactPageSection />
      <FooterSection />
    </>
  );
}
