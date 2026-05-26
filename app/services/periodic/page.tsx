import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ClipboardCheck,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Wrench,
  ArrowLeft,
} from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/services-catalog";
import { createPageMetadata } from "@/lib/seo";

const service = getServiceBySlug("periodic")!;

export const metadata = createPageMetadata({
  title: "سرویس دوره‌ای خودرو",
  description:
    "سرویس دوره‌ای کامل مطابق دستور کارخانه — روغن، فیلترها، بازبینی ترمز، سیالات و دیاگ در خودرو پرشین تهران.",
  path: "/services/periodic",
  keywords: [
    "سرویس دوره‌ای",
    "سرویس خودرو",
    "نگهداری خودرو",
    "سرویس کارخانه‌ای",
    "تعمیرگاه تهران",
  ],
});

const services = [
  "تعویض روغن موتور و فیلتر روغن",
  "تعویض فیلتر هوا، بنزین و کابین (در صورت نیاز)",
  "بازبینی سطح و کیفیت روغن ترمز، فرمان و ضدیخ",
  "کنترل لنت و دیسک ترمز و سیستم جلوبندی",
  "بررسی تسمه‌ها، شمع و باتری",
  "اتصال دیاگ و پاک‌سازی خطاهای ساده",
  "تست رانندگی کوتاه و گزارش وضعیت خودرو",
];

const warnings = [
  {
    title: "رسیدن به کیلومتر سرویس",
    text: "طبق دفترچه یا برچسب قبلی تعمیرگاه — معمولاً هر ۱۰ تا ۱۵ هزار کیلومتر.",
  },
  {
    title: "چراغ سرویس روی داشبورد",
    text: "هشدار نگهداری از سوی خودرو — سرویس دوره‌ای را به تعویق نیندازید.",
  },
  {
    title: "کاهش شتاب یا افزایش مصرف",
    text: "فیلترهای کثیف یا روغن کهنه می‌توانند علت باشند.",
  },
  {
    title: "صدای غیرعادی یا لرزش",
    text: "بازبینی دوره‌ای به کشف زودهنگام ایراد کمک می‌کند.",
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "ثبت و بازدید",
    text: "ثبت کیلومتر، شرح درخواست و بازدید اولیه ۳۶۰ درجه.",
  },
  {
    icon: Wrench,
    title: "سرویس قطعات",
    text: "روغن، فیلترها و قطعات مصرفی طبق چک‌لیست استاندارد.",
  },
  {
    icon: Calendar,
    title: "بازبینی ایمنی",
    text: "ترمز، لاستیک، چراغ‌ها و سیالات حیاتی.",
  },
  {
    icon: ShieldCheck,
    title: "تحویل و گزارش",
    text: "گزارش فارسی، برچسب سرویس بعدی و توصیه‌های نگهداری.",
  },
];

const packages = [
  {
    title: "سرویس پایه",
    items: ["روغن و فیلتر روغن", "بازبینی سطح سیالات", "کنترل ترمز و لاستیک"],
  },
  {
    title: "سرویس کامل",
    items: [
      "همه موارد سرویس پایه",
      "فیلتر هوا و کابین",
      "دیاگ و گزارش کتبی",
      "تست رانندگی",
    ],
  },
];

export default function PeriodicServicePage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="type-label text-gold mb-3 md:mb-4">
                سرویس دوره‌ای
              </p>
              <h1 className="type-h1 mb-5 md:mb-6">
                نگهداری{" "}
                <span className="text-gradient-gold">برنامه‌ای خودرو</span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6 md:mb-8">
                {BRAND.name} سرویس دوره‌ای را مطابق استاندارد سازنده انجام
                می‌دهد — از تعویض روغن تا بازبینی ایمنی، با چک‌لیست شفاف و
                قیمت‌گذاری قبل از شروع کار.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <BaleButton size="md" />
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  رزرو سرویس
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
            <ClipboardCheck className="h-7 w-7 text-gold" strokeWidth={1.5} />
            چه کارهایی انجام می‌شود؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((item) => (
              <div
                key={item}
                className="glass-subtle p-4 flex items-start gap-3"
              >
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
          <h2 className="type-h2 mb-8">پکیج‌های پیشنهادی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div key={pkg.title} className="glass-subtle p-6">
                <h3 className="type-h3 text-gradient-gold mb-5">
                  {pkg.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            قیمت نهایی پس از بازدید و بر اساس نوع خودرو اعلام می‌شود.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site">
          <h2 className="type-h2 mb-8 flex items-center gap-2">
            <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.5} />
            زمان مناسب سرویس دوره‌ای
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warnings.map((w) => (
              <div key={w.title} className="glass-subtle p-5">
                <h3 className="type-h4">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site">
          <h2 className="type-h2 mb-10 md:mb-12 text-center">
            فرآیند سرویس — گام‌به‌گام
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="glass-subtle p-5 flex flex-col gap-3"
                >
                  <span className="text-xs text-gold font-medium">
                    مرحله {i + 1}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-sm">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site glass-subtle p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <ShieldCheck className="h-10 w-10 text-gold shrink-0" />
          <div className="flex-grow">
            <h2 className="type-h4 mb-3">چرا سرویس دوره‌ای مهم است؟</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              نگهداری منظم هزینه تعمیرات سنگین را کم می‌کند، ایمنی را بالا
              می‌برد و ارزش خودرو را حفظ می‌کند. فقط همان کاری انجام می‌شود که
              خودرو به آن نیاز دارد.
            </p>
          </div>
          <Link
            href="/services/oil-change"
            className="text-sm text-gold hover:text-gold-soft whitespace-nowrap shrink-0 inline-flex items-center gap-1"
          >
            تعویض روغن
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 md:p-10 rounded-2xl">
          <h2 className="type-h2 mb-4">
            وقت <span className="text-gradient-gold">سرویس دوره‌ای</span> است؟
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            از طریق بله، تلفن یا رزرو آنلاین هماهنگ کنید — پاسخگویی سریع و
            زمان‌بندی منعطف.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110"
            >
              رزرو آنلاین
            </Link>
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
