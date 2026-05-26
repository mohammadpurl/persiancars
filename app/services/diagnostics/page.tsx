import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  ClipboardList,
  FileSearch,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/services-catalog";
import { createPageMetadata } from "@/lib/seo";

const service = getServiceBySlug("diagnostics")!;

export const metadata = createPageMetadata({
  title: "عیب‌یابی و دیاگ خودرو",
  description:
    "عیب‌یابی تخصصی با دستگاه دیاگ — خواندن خطا، پارامترهای زنده و رفع ایراد در خودرو پرشین تهران.",
  path: "/services/diagnostics",
  keywords: [
    "دیاگ خودرو",
    "عیب‌یابی",
    "چراغ چک موتور",
    "خواندن خطا",
  ],
});

const services = [
  "اتصال دیاگ و اسکن کامل واحد کنترل موتور",
  "خواندن و پاک کردن کدهای خطای ذخیره‌شده",
  "بررسی پارامترهای زنده: دما، سوخت، گیربکس",
  "تست سنسورها و عملگرها",
  "عیب‌یابی چراغ چک و مشکلات برقی",
  "گزارش فارسی قبل از هر تعمیر",
];

const symptoms = [
  {
    title: "روشن ماندن چراغ چک",
    text: "چراغ چک موتور ثابت یا چشمک‌زن — نیاز به اسکن دیاگ.",
  },
  {
    title: "خطاهای روی داشبورد",
    text: "ترمز ضد قفل، ایربگ، گیربکس یا سیستم‌های کمکی.",
  },
  {
    title: "عملکرد ضعیف",
    text: "کاهش شتاب، مصرف بالا یا دور گرم ناپایدار بدون علت ظاهری.",
  },
  {
    title: "استارت مشکل‌دار",
    text: "استارت سنگین در صبح یا پس از توقف کوتاه.",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "ثبت مشکل",
    text: "شرح دقیق علائم، زمان بروز و شرایط رانندگی.",
  },
  {
    icon: Cpu,
    title: "اسکن دیاگ",
    text: "خواندن خطاها و داده‌های زنده از دستگاه دیاگ.",
  },
  {
    icon: FileSearch,
    title: "تحلیل",
    text: "تشخیص ریشه‌ای؛ پیشنهاد تعمیر هدفمند.",
  },
  {
    icon: Wrench,
    title: "رفع ایراد",
    text: "تعمیر یا ارجاع به واحد تخصصی موتور/گیربکس.",
  },
];

export default function DiagnosticsPage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="type-label text-gold mb-3 md:mb-4">
                عیب‌یابی و دیاگ
              </p>
              <h1 className="type-h1 mb-5 md:mb-6">
                عیب‌یابی و{" "}
                <span className="text-gradient-gold">دیاگ تخصصی</span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6 md:mb-8">
                در {BRAND.name} قبل از تعویض قطعه تصادفی، با دیاگ حرفه‌ای
                علت واقعی مشکل را پیدا می‌کنیم — صرفه‌جوی در هزینه و زمان.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <BaleButton size="md" />
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  رزرو دیاگ
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
            <Cpu className="h-7 w-7 text-gold" strokeWidth={1.5} />
            خدمات دیاگ
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
            چه زمانی دیاگ بگیریم؟
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
        <div className="container-site">
          <h2 className="type-h2 mb-10 md:mb-12 text-center">
            فرآیند عیب‌یابی  گام‌به‌گام
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="glass-subtle p-5 flex flex-col gap-3">
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
            <h2 className="type-h4 mb-3">تعهد ما</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              فقط ایراد واقعی را گزارش می‌کنیم. در صورت نیاز به تعمیر موتور یا
              گیربکس، همان‌جا هماهنگی می‌شود — بدون هزینه اضافی غیرضروری.
            </p>
          </div>
          <Link
            href="/services/engine-repair"
            className="text-sm text-gold hover:text-gold-soft whitespace-nowrap shrink-0 inline-flex items-center gap-1"
          >
            تعمیر موتور
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <p className="text-muted-foreground text-sm mb-4">
            چراغ چک روشن است؟ همین الان اسکن دیاگ رزرو کنید.
          </p>
          <BaleButton size="lg" className="justify-center" />
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft mt-4"
          >
            بازگشت به خدمات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
