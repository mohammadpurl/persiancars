import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";

export default function ContactCta() {
  return (
    <section
      className="section-padding bg-checker-pattern relative overflow-hidden"
      aria-labelledby="contact-cta-heading"
    >
      {/* هاله طلایی ملایم روی grid */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,hsl(var(--gold)/0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-[min(100%,90rem)] mx-auto px-3 sm:px-5 lg:px-6">
        <MotionSection>
          <div className="glass w-full p-8 sm:p-10 md:p-12 lg:p-16 text-center rounded-2xl">
            <h2
              id="contact-cta-heading"
              className="type-h1 mb-4 md:mb-5"
            >
              آماده سرویس <span className="text-gradient-gold">خودروی شما</span>{" "}
              هستیم
            </h2>
            <p className="type-lead text-muted-foreground mb-8 max-w-4xl mx-auto">
              برای استعلام قیمت، رزرو نوبت یا مشاوره رایگان با {BRAND.name} در
              تماس باشید.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4 w-full max-w-5xl mx-auto">
            <BaleButton
              size="lg"
              className="w-full sm:flex-1 justify-center"
            />
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-primary-foreground px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold w-full sm:flex-1 hover:brightness-110 transition-all shadow-lg shadow-gold/20"
              >
                <Calendar className="h-5 w-5" />
                رزرو / استعلام
              </Link>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold w-full sm:flex-1 hover:bg-white/15 transition-colors"
              >
                <Phone className="h-5 w-5 text-gold" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
