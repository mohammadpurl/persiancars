import Link from "next/link";
import { Gauge, CheckCircle2, Settings, ArrowLeft } from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";



export const metadata = createPageMetadata({
  title: "تنظیم موتور",
  description: "تنظیم موتور خودرو برای کاهش مصرف سوخت و افزایش توان — خودرو پرشین.",
  path: "/services/tuning",
  keywords: ["تنظیم موتور", "بهینه‌سازی موتور"],
});

const services = [
  "تنظیم موتور برای کاهش مصرف سوخت",
  "بررسی سنسورها و عملکرد انژکتور",
  "تنظیم دور آرام و رفع لرزش موتور",
  "بازدید شمع، وایر و سیستم جرقه",
  "کنترل فیلترها و هوارسانی موتور",
];

const symptoms = [
  "افزایش مصرف سوخت در مسیرهای روزمره",
  "کاهش شتاب و تنبلی موتور",
  "لرزش در دور آرام یا هنگام شروع حرکت",
  "خام‌سوزی، بوی بنزین یا احتراق نامنظم",
];

export default function TuningPage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative max-w-4xl">
          <p className="type-label text-gold mb-3">بهینه‌سازی عملکرد</p>
          <h1 className="type-h1 mb-5 md:mb-6">
            تنظیم و <span className="text-gradient-gold">بهینه‌سازی موتور</span>
          </h1>
          <p className="type-lead text-muted-foreground">
            در {BRAND.name} تنظیم موتور فقط به معنی افزایش توان نیست؛ هدف ما عملکرد نرم‌تر، مصرف
            بهینه‌تر و کاهش فشار به قطعات اصلی پیشرانه است.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-subtle p-6 md:p-8">
            <h2 className="type-h3 mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-gold" />
              خدمات تنظیم موتور
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
              <Gauge className="h-6 w-6 text-gold" />
              چه زمانی لازم است؟
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {symptoms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-5">
              پس از دیاگ و بازدید اولیه، وضعیت واقعی موتور مشخص می‌شود تا فقط همان موارد ضروری
              تنظیم یا تعمیر شوند.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <p className="text-muted-foreground text-sm mb-4">
            برای مشاوره یا رزرو بازدید تنظیم موتور با ما تماس بگیرید.
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
