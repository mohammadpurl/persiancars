import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import EngineRepairSection from "@/components/home/EngineRepairSection";
import TransmissionRepairSection from "@/components/home/TransmissionRepairSection";
import DiagnosticProcess from "@/components/home/DiagnosticProcess";
import CommonProblems from "@/components/home/CommonProblems";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LocationMap from "@/components/home/LocationMap";
import Testimonials from "@/components/home/Testimonials";
import ContactCta from "@/components/home/ContactCta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "تعمیر موتور و گیربکس در تهران",
  description:
    "خودرو پرشین — تعمیر موتور، گیربکس، عیب‌یابی و سرویس تخصصی در تهران.",
  path: "/",
  keywords: [
    "تعمیر موتور تهران",
    "تعمیر گیربکس",
    "عیب‌یابی خودرو",
    "سرویس دوره‌ای",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EngineRepairSection />
      <TransmissionRepairSection />
      <DiagnosticProcess />
      <CommonProblems />
      {/* <BeforeAfterSlider /> */}
      <WhyChooseUs />
      <LocationMap />
      <Testimonials />
      <ContactCta />
    </>
  );
}
