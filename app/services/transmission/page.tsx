import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  Droplets,
  Gauge,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "تعمیر گیربکس و گیربکس اتومات",
  description:
    "تعمیر تخصصی گیربکس دستی و اتومات و تعویض روغن گیربکس با دستگاه در خودرو پرشین — تهران.",
  path: "/services/transmission",
  keywords: [
    "تعمیر گیربکس",
    "گیربکس اتومات",
    "تعویض روغن گیربکس",
    "لغزش گیربکس",
  ],
});

const services = [
  "تعویض روغن گیربکس اتومات با دستگاه تمام‌اتوماتیک",
  "تعمیر و بازسازی گیربکس دستی",
  "عیب‌یابی و تعمیر گیربکس اتومات، دوکلاچه و متغیر",
  "تعویض فیلتر و سرویس سروو و هیدرولیک",
  "تست رانندگی و اسکن دیاگ پس از تعمیر",
  "تعویض کلاچ، دیسک و بلبرینگ‌های مرتبط",
];

const symptoms = [
  {
    title: "لغزش گیربکس",
    text: "موتور دور بالا می‌رود اما شتاب کم است یا دنده در حالت حرکت لغزش دارد.",
  },
  {
    title: "تأخیر در تعویض دنده",
    text: "فاصله زمانی غیرعادی بین پارک و حرکت یا هنگام تعویض دنده‌ها.",
  },
  {
    title: "ضربه هنگام تعویض دنده",
    text: "احساس ضربه یا تکان ناگهانی هنگام عوض کردن دنده در گیربکس اتومات.",
  },
  {
    title: "صدای غیرعادی",
    text: "صدای زوزه، تق‌تق یا ساییدگی در حالت‌های مختلف دنده.",
  },
];

const processSteps = [
  "ثبت علائم و تست اولیه رانندگی",
  "اتصال دیاگ و بررسی پارامترهای گیربکس",
  "بازدید سطح روغن، رنگ و بو — تصمیم سرویس یا تعمیر",
  "انجام سرویس/تعمیر و تست نهایی تحت بار",
];

export default function TransmissionRepairPage() {
  return (
    <article className="pb-16">
      {/* هدر */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="type-label text-gold mb-3 md:mb-4">
                تعمیر گیربکس
              </p>
              <h1 className="type-h1 mb-5 md:mb-6">
                تعمیر تخصصی{" "}
                <span className="text-gradient-gold">گیربکس خودرو</span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6 md:mb-8">
                {BRAND.name} با تجهیزات مدرن تعویض روغن گیربکس و تیم متخصص،
                سرویس و تعمیر گیربکس اتومات و دستی را با گزارش
                شفاف و ضمانت ارائه می‌دهد.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <BaleButton size="md" />
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  رزرو / استعلام قیمت
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
                src="/images/Hero.png"
                alt="تعمیر گیربکس در خودرو پرشین"
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

      {/* خدمات */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <h2 className="type-h2 mb-8 flex items-center gap-2">
            <Cog className="h-7 w-7 text-gold" strokeWidth={1.5} />
            خدمات گیربکس ما
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

      {/* علائم */}
      <section className="section-padding pt-0 bg-card/25">
        <div className="container-site">
          <h2 className="type-h2 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-7 w-7 text-gold" strokeWidth={1.5} />
            علائم هشدار
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            اگر هر یک از موارد زیر را تجربه می‌کنید، هرچه سریع‌تر برای عیب‌یابی
            مراجعه کنید.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {symptoms.map((s) => (
              <div key={s.title} className="glass-subtle p-5">
                <h3 className="font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* فرآیند + مزایا */}
      <section className="section-padding pt-0">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass p-6 md:p-8">
            <h2 className="type-h3 mb-5 flex items-center gap-2">
              <Droplets className="h-6 w-6 text-gold" />
              فرآیند کار
            </h2>
            <ol className="space-y-3">
              {processSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="text-gold font-bold tabular-nums shrink-0">
                    {i + 1}.
                  </span>
                  <span className="text-muted-foreground leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-subtle p-6 md:p-8 flex flex-col gap-4">
            <h2 className="type-h3 flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-gold" />
              چرا {BRAND.name}؟
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Gauge className="h-5 w-5 text-gold shrink-0" />
                تخصص در گیربکس‌های اتومات رایج بازار ایران
              </li>
              <li className="flex gap-2">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
                شفافیت در قیمت — بدون هزینه پنهان
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                گارانتی خدمات و گزارش کتبی وضعیت
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/80 mt-auto pt-2">
              آدرس: {CONTACT.address}
            </p>
          </div>
        </div>
      </section>

      {/* CTA پایین */}
      <section className="container-site">
        <div className="glass text-center p-8 md:p-10 rounded-2xl">
          <h2 className="type-h2 mb-4">
            برای سرویس گیربکس <span className="text-gradient-gold">همین حالا</span>{" "}
            وقت بگیرید
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            استعلام قیمت تعویض روغن گیربکس یا تعمیر تخصصی — پاسخگویی از طریق بله
            و تلفن.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft transition-colors"
            >
              بازگشت به لیست خدمات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
