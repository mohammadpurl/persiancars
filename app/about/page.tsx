import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Wrench,
  Users,
  ArrowLeft,
} from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import StatsGrid from "@/components/home/StatsGrid";
import { BRAND, CONTACT } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "درباره ما",
  description: `${BRAND.name} — تعمیرگاه تخصصی خودرو در تهران با بیش از ۱۰ سال تجربه، تیم مجرب، تجهیزات مدرن و ضمانت کیفیت.`,
  path: "/about",
  keywords: ["درباره خودرو پرشین", "تعمیرگاه تخصصی", "تهران", "تیم متخصص"],
});

const values = [
  {
    icon: Wrench,
    title: "تخصص و دقت",
    text: "تعمیر موتور، گیربکس، دیاگ و سرویس دوره‌ای با استاندارد کارخانه و گزارش شفاف.",
  },
  {
    icon: ShieldCheck,
    title: "ضمانت و اعتماد",
    text: "قطعات معتبر، قیمت‌گذاری روشن قبل از شروع کار و گارانتی خدمات انجام‌شده.",
  },
  {
    icon: Users,
    title: "همراهی با شما",
    text: "مشاوره صادقانه، پاسخگویی سریع از طریق بله و تلفن، و تحویل به‌موقع خودرو.",
  },
];

export default function AboutPage() {
  return (
    <article className="pb-16">
      {/* هدر با تصویر */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="type-label text-gold mb-3 md:mb-4">درباره ما</p>
              <h1 className="type-h1 mb-5 md:mb-6 leading-tight">
                <span className="text-gradient-gold">{BRAND.name}</span>
                <span className="block text-foreground mt-2">
                  تعمیرگاه تخصصی خودرو
                </span>
              </h1>
              <p className="type-lead text-muted-foreground mb-6">
                {BRAND.tagline}. ما با تجهیزات مدرن و تیمی از تکنسین‌های مجرب،
                آماده نگهداری و تعمیر خودروهای داخلی و خارجی در محیطی حرفه‌ای
                و قابل اعتماد هستیم.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <BaleButton size="md" />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"
                >
                  تماس با ما
                </Link>
                <a
                  href={`tel:${CONTACT.mobile}`}
                  className="inline-flex items-center justify-center rounded-xl glass px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition-colors"
                >
                  {CONTACT.mobileDisplay}
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative aspect-[3/4] sm:aspect-[4/5] max-h-[520px] lg:max-h-none rounded-2xl overflow-hidden glass-subtle ring-1 ring-gold/25">
              <Image
                src="/images/khodropersian.png"
                alt={`تیم تخصصی ${BRAND.name} در تعمیرگاه — تعمیر تخصصی خودرو`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 start-4 end-4 glass-subtle px-4 py-3 text-center">
                <p className="type-caption text-gold mb-0.5">تعمیرگاه تخصصی</p>
                <p className="text-sm font-bold text-foreground">{BRAND.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* داستان ما */}
      <section className="section-padding pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
            <div className="flex flex-col">
              <h2 className="type-h2 mb-6 flex items-center gap-2 min-h-[2.75rem] lg:min-h-[3rem]">
                <Wrench className="h-7 w-7 text-gold shrink-0" strokeWidth={1.5} />
                داستان ما
              </h2>
              <div className="glass p-6 md:p-8 flex-1">
                <div className="space-y-4 type-body-sm text-muted-foreground">
                  <p>
                    {BRAND.name} با هدف ارائه خدمات تخصصی تعمیر و نگهداری خودرو
                    راه‌اندازی شد — جایی که کیفیت کار، شفافیت با مشتری و احترام به
                    زمان شما در اولویت است.
                  </p>
                  <p>
                    از تعویض روغن و سرویس دوره‌ای تا تعمیر موتور، گیربکس و عیب‌یابی
                    با دیاگ، هر خودرو با چک‌لیست استاندارد و تست نهایی تحویل
                    می‌شود.
                  </p>
                  <p>
                    تعمیرگاه ما در {CONTACT.address} پذیرای شماست و تیم ما آماده
                    پاسخگویی به سوالات فنی و هماهنگی نوبت سرویس است.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="type-h2 mb-6 min-h-[2.75rem] lg:min-h-[3rem] flex items-center">
                ارزش‌های ما
              </h2>
              <ul className="space-y-4 flex-1">
                {values.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.title}
                      className="glass-subtle p-5 flex gap-4 items-start"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                        <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="type-h4 text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="type-body-sm text-muted-foreground">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* آمار */}
      <section className="section-padding pt-0 bg-card/25">
        <div className="container-site">
          <h2 className="type-h2 text-center mb-3">در یک نگاه</h2>
          <p className="type-lead text-muted-foreground text-center max-w-xl mx-auto mb-10">
            اعداد و دستاوردهایی که نشان‌دهنده اعتماد مشتریان به {BRAND.name} است.
          </p>
          <div className="max-w-2xl mx-auto">
            <StatsGrid />
          </div>
        </div>
      </section>

      {/* چرا ما + لیست */}
      <section className="section-padding pt-0">
        <div className="container-site glass-subtle p-6 md:p-10">
          <h2 className="type-h2 mb-6 text-center">
            چرا <span className="text-gradient-gold">{BRAND.name}</span>؟
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {[
              "تیم مهندسی و تکنسین با تجربه",
              "قطعات اصل و استاندارد",
              "تجهیزات دیاگ و تعمیرگاهی مدرن",
              "شفافیت در برآورد هزینه",
              "گارانتی خدمات",
              "پشتیبانی از طریق بله و تلفن",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 type-body-sm text-foreground/90"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site">
        <div className="glass text-center p-8 md:p-10 rounded-2xl">
          <h2 className="type-h3 mb-3">
            آماده همکاری با <span className="text-gradient-gold">{BRAND.name}</span>{" "}
            هستید؟
          </h2>
          <p className="type-body-sm text-muted-foreground mb-6 max-w-lg mx-auto">
            برای رزرو، استعلام قیمت یا مشاوره فنی با ما در ارتباط باشید.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft font-semibold transition-colors"
            >
              مشاهده خدمات
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-xl border border-gold/50 px-6 py-3 text-sm font-semibold hover:bg-gold/10 transition-colors"
            >
              رزرو آنلاین
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
