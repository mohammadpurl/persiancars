import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Wrench,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Gauge,
  ArrowLeft,
} from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/services-catalog";
import { createPageMetadata } from "@/lib/seo";

const service = getServiceBySlug("engine-repair")!;

export const metadata = createPageMetadata({
  title: "تعمیر موتور تخصصی",
  description:
    "بازسازی و تعمیر موتور در خودرو پرشین — تعمیر تخصصی، قطعات اصل، عیب‌یابی و تست نهایی در تهران.",
  path: "/services/engine-repair",
  keywords: [
    "تعمیر موتور",
    "بازسازی موتور",
    "مکانیکی تخصصی",
    "تعمیرگاه تهران",
  ],
});

const services = [
  "بازسازی کامل موتور",
  "تعویض یاتاقان، پیستون، رینگ و قطعات فرسوده",
  "تنظیم موتور و انژکتور — بهبود مصرف و شتاب",
  "رفع لرزش، تق‌تق و صدای غیرعادی موتور",
  "تعویض تسمه تایم و قطعات جانبی",
  "تست فشردگی و دیاگ پس از تعمیر",
];

const symptoms = [
  {
    title: "صدای تق‌تق موتور",
    text: "به‌ویژه در شتاب یا سربالایی — نیاز به بررسی فوری.",
  },
  {
    title: "روشن نشدن یا خاموشی",
    text: "استارت ضعیف، خاموشی ناگهانی یا دور گرم نامنظم.",
  },
  {
    title: "دود غیرعادی",
    text: "دود آبی (روغن)، سفید (آب) یا سیاه (سوخت) از اگزوز.",
  },
  {
    title: "افزایش مصرف روغن",
    text: "کاهش مکرر سطح روغن بدون نشتی ظاهری.",
  },
];

const processSteps = [
  "عیب‌یابی اولیه و گوش دادن به شرح مشکل شما",
  "بازدید فنی و در صورت نیاز تست فشردگی",
  "ارائه برآورد هزینه و زمان تحویل شفاف",
  "تعمیر، مونتاژ و تست رانندگی نهایی",
];

export default function EngineRepairPage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="type-label text-gold mb-3 md:mb-4">
                تعمیر موتور
              </p>
              <h1 className="type-h1 mb-5 md:mb-6">
                تعمیر تخصصی{" "}
                <span className="text-gradient-gold">موتور خودرو</span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6 md:mb-8">
                {BRAND.name} با بیش از ۱۰ سال تجربه در تعمیر موتور، موتور
                خودروی شما را با قطعات استاندارد، ابزار دقیق و گزارش کامل
                سرویس می‌کند.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <BaleButton size="md" />
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  استعلام قیمت
                </Link>
                <a
                  href={`tel:${CONTACT.mobile}`}
                  className="inline-flex items-center justify-center rounded-xl glass px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  {CONTACT.mobileDisplay}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-subtle">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site">
          <h2 className="type-h2 mb-8 flex items-center gap-2">
            <Settings className="h-7 w-7 text-gold" strokeWidth={1.5} />
            خدمات تعمیر موتور
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((item) => (
              <div key={item} className="glass-subtle p-4 flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-card/25">
        <div className="container-site">
          <h2 className="type-h2 mb-8 flex items-center gap-2">
            <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.5} />
            علائم خرابی موتور
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <div key={s.title} className="glass-subtle p-5">
                <h3 className="type-h4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-6 md:p-8">
            <h2 className="type-h3 mb-5 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-gold" />
              مراحل کار
            </h2>
            <ol className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="text-gold font-bold shrink-0">{i + 1}.</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="glass-subtle p-6 md:p-8">
            <h2 className="type-h3 mb-5 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-gold" />
              چرا {BRAND.name}؟
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Gauge className="h-5 w-5 text-gold shrink-0" />
                تجهیزات مدرن و مکانیک‌های مجرب
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                قطعات با کیفیت و ضمانت خدمات
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                گزارش شفاف قبل از شروع تعمیر
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <p className="text-muted-foreground text-sm mb-4">
            مشکل موتور دارید؟ همین الان در بله پیام دهید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft"
            >
              همه خدمات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
