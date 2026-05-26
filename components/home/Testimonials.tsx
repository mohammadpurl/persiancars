import { Star } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import MotionSection from "@/components/ui/MotionSection";
import { BRAND } from "@/lib/constants";

const testimonials = [
  {
    name: "علی محمدی",
    service: "تعمیر موتور",
    text: "مشکل موتورم را جاهای دیگر حل نکرده بودند؛ در خودرو پرشین سریع و حرفه‌ای برطرف شد.",
    rating: 5,
  },
  {
    name: "سارا کریمی",
    service: "تعویض روغن گیربکس",
    text: "بعد از سرویس گیربکس، ماشینم بسیار نرم‌تر شده. کیفیت کار و برخورد عالی بود.",
    rating: 5,
  },
  {
    name: "محمد رضایی",
    service: "عیب‌یابی",
    text: "محیط تمیز، پرسنل حرفه‌ای و قیمت منصفانه. مشتری دائمی شدم.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionShell id="testimonials">
      <MotionSection>
        <SectionHeader
          label="نظر مشتریان"
          title="مشتریان ما چه می‌گویند؟"
          description={`تجربه واقعی مراجعین ${BRAND.name}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-subtle p-6 flex flex-col gap-4"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-0.5" aria-label={`امتیاز ${item.rating} از ۵`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p
                itemProp="reviewBody"
                className="type-body-sm text-muted-foreground flex-grow"
              >
                «{item.text}»
              </p>
              <footer>
                <p itemProp="author" className="font-semibold type-body">
                  {item.name}
                </p>
                <p className="type-caption text-gold mt-1">{item.service}</p>
              </footer>
            </article>
          ))}
        </div>
      </MotionSection>
    </SectionShell>
  );
}
