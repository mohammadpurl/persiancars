import Image from "next/image";
import Link from "next/link";
import {
  Droplets,
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

const service = getServiceBySlug("oil-change")!;

export const metadata = createPageMetadata({
  title: "تعویض روغن موتور",
  description:
    "تعویض روغن و فیلتر موتور با روغن‌های معتبر و استاندارد سازنده — سرویس سریع و حرفه‌ای در خودرو پرشین تهران.",
  path: "/services/oil-change",
  keywords: [
    "تعویض روغن",
    "روغن موتور",
    "فیلتر روغن",
    "سرویس روغن",
    "تعمیرگاه تهران",
  ],
});

const services = [
  "بررسی سطح، رنگ و ویسکوزیته روغن فعلی",
  "تخلیه کامل روغن کهنه و بازیافت ایمن",
  "تعویض فیلتر روغن اصل یا معتبر",
  "انتخاب روغن متناسب با خودرو (مینرال، نیمه‌سنتتیک، سنتتیک)",
  "بستن درپوش و کنترل نشتی پس از سرویس",
  "ثبت کیلومتر و زمان سرویس بعدی روی برچسب",
];

const warnings = [
  {
    title: "روغن تیره یا بوی سوختگی",
    text: "نشانه کهنگی روغن — تعویض به‌موقع از سایش موتور جلوگیری می‌کند.",
  },
  {
    title: "صدای خش‌خش موتور",
    text: "ممکن است به‌خاطر روغن کم یا کیفیت پایین باشد؛ بررسی فوری لازم است.",
  },
  {
    title: "افزایش مصرف روغن",
    text: "کاهش مکرر سطح روغن بین دو سرویس — نیاز به بازدید فنی.",
  },
  {
    title: "گذشت از کیلومتر یا زمان سرویس",
    text: "طبق دفترچه خودرو معمولاً هر ۵ تا ۱۰ هزار کیلومتر یا ۶ ماه یک‌بار.",
  },
];

const processSteps = [
  "ثبت کیلومتر و نوع خودرو",
  "تخلیه روغن و تعویض فیلتر",
  "افزودن روغن با گرید استاندارد",
  "کنترل سطح روغن و تست نشتی",
];

const benefits = [
  "افزایش عمر مفید موتور و کاهش سایش",
  "بهبود راندمان و کاهش مصرف سوخت",
  "روانکاری بهتر در استارت سرد",
  "جلوگیری از رسوب و گرفتگی مسیر روغن",
];

export default function OilChangePage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="type-label text-gold mb-3 md:mb-4">
                تعویض روغن
              </p>
              <h1 className="type-h1 mb-5 md:mb-6">
                سرویس{" "}
                <span className="text-gradient-gold">روغن موتور</span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6 md:mb-8">
                در {BRAND.name} تعویض روغن با روغن و فیلتر باکیفیت، زمان‌بندی
                شفاف و قیمت منصفانه انجام می‌شود — یکی از مهم‌ترین
                سرویس‌های نگهداری خودرو.
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
            <Droplets className="h-7 w-7 text-gold" strokeWidth={1.5} />
            خدمات تعویض روغن
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
          <h2 className="type-h2 mb-8 flex items-center gap-2">
            <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.5} />
            چه زمانی روغن عوض کنیم؟
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
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-6 md:p-8">
            <h2 className="type-h3 mb-5 flex items-center gap-2">
              <Droplets className="h-6 w-6 text-gold" />
              مراحل کار
            </h2>
            <ol className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="text-gold font-bold shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-subtle p-6 md:p-8">
            <h2 className="type-h3 mb-5 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-gold" />
              مزایای سرویس به‌موقع
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/80 mt-6 pt-4 border-t border-white/10">
              برای سرویس کامل‌تر،{" "}
              <Link
                href="/services/periodic"
                className="text-gold hover:text-gold-soft"
              >
                سرویس دوره‌ای
              </Link>{" "}
              را هم ببینید.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site glass-subtle p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <Gauge className="h-10 w-10 text-gold shrink-0" />
          <div className="flex-grow">
            <h2 className="type-h4 mb-3">تعهد ما</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              روغن و فیلتر با کیفیت، بدون مخلوط کردن روغن کهنه با جدید، و
              گزارش شفاف از نوع روغن مصرف‌شده — برای آرامش خاطر شما.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <p className="text-muted-foreground text-sm mb-4">
            زمان تعویض روغن رسیده؟ همین الان نوبت بگیرید.
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
