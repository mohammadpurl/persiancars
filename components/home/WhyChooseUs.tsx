import { CheckCircle2 } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import MotionSection from "@/components/ui/MotionSection";
import StatsGrid from "@/components/home/StatsGrid";
import { BRAND } from "@/lib/constants";

const features = [
  "تیم متخصص و با تجربه",
  "قطعات اصل و استاندارد",
  "تجهیزات پیشرفته تعمیرگاهی",
  "شفافیت در قیمت‌گذاری",
  "گارانتی خدمات انجام‌شده",
  "تحویل به‌موقع خودرو",
];

export default function WhyChooseUs() {
  return (
    <SectionShell className="bg-card/40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <MotionSection>
          <SectionHeader
            label="چرا ما"
            title={`چرا ${BRAND.name}؟`}
            description="بیش از یک دهه تجربه در تعمیر و نگهداری خودروهای لوکس و روزمره"
            align="start"
          />
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-gold shrink-0"
                  strokeWidth={2}
                />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </MotionSection>

        <MotionSection delay={0.1}>
          <StatsGrid />
        </MotionSection>
      </div>
    </SectionShell>
  );
}
