import Link from "next/link";
import { Snowflake, CheckCircle2, Fan, ArrowLeft } from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "تعمیر کولر خودرو",
  description: "شارژ و تعمیر سیستم کولر و تهویه خودرو در خودرو پرشین.",
  path: "/services/car-ac-repair",
  keywords: ["تعمیر کولر", "شارژ گاز کولر"],
});

const services = [
  "شارژ گاز کولر و بررسی فشار مدار",
  "بازدید کمپرسور، کندانسور و اواپراتور",
  "تشخیص نشتی در شلنگ‌ها و اتصالات",
  "بررسی فن و سیستم تهویه داخل کابین",
  "تعویض فیلتر کابین و سرویس دوره‌ای کولر",
];

const symptoms = [
  "خنک نکردن یا کاهش شدید سرمای کولر",
  "بوی نامطبوع هنگام روشن شدن تهویه",
  "صداهای غیرعادی از کمپرسور یا فن",
  "بالا رفتن فشار به موتور هنگام روشن کردن کولر",
];

export default function CarAcRepairPage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative max-w-4xl">
          <p className="type-label text-gold mb-3">سرویس کولر خودرو</p>
          <h1 className="type-h1 mb-5 md:mb-6">
            تعمیر و <span className="text-gradient-gold">سرویس کولر و تهویه</span>
          </h1>
          <p className="type-lead text-muted-foreground">
            اگر کولر خودرو سرمای کافی ندارد یا بوی نامطبوع ایجاد می‌کند، در {BRAND.name} سیستم
            تهویه و کولر به‌صورت کامل بازدید و سرویس می‌شود.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-subtle p-6 md:p-8">
            <h2 className="type-h3 mb-4 flex items-center gap-2">
              <Snowflake className="h-6 w-6 text-gold" />
              خدمات ما
            </h2>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-6 md:p-8">
            <h2 className="type-h3 mb-4 flex items-center gap-2">
              <Fan className="h-6 w-6 text-gold" />
              نشانه‌های خرابی کولر
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-5">
              پس از بررسی مدار و فشار گاز، راه‌حل مناسب از سرویس ساده تا تعمیر قطعات اصلی به شما
              اعلام می‌شود.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <p className="text-muted-foreground text-sm mb-4">
            برای شارژ گاز یا عیب‌یابی کولر خودرو، همین حالا با ما هماهنگ کنید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <a
              href={`tel:${CONTACT.mobile}`}
              className="inline-flex items-center justify-center rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {CONTACT.mobileDisplay}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft"
            >
              بازگشت به خدمات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
