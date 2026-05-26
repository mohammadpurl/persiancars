"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BaleButton from "@/components/ui/BaleButton";
import { CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

const infoCards = [
  {
    icon: Phone,
    label: "تماس با ما",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    secondaryValue: CONTACT.mobileDisplay,
    secondaryHref: `tel:${CONTACT.mobile}`,
  },
  {
    icon: Clock,
    label: "ساعات کاری",
    value: CONTACT.hoursShort,
  },
  {
    icon: MapPin,
    label: "مکان ما",
    value: "تهران، شهرک گلستان، بلوار علیمرادی (کوهک)، خیابان نسیم ششم، پلاک ۲۷",
    href: "/contact",
  },
  {
    icon: Star,
    label: "امتیاز مشتریان",
    value: String(CONTACT.rating),
    isRating: true,
  },
];

type HeroInfoCardProps = (typeof infoCards)[number] & {
  variant?: "overlay" | "stacked";
  secondaryValue?: string;
  secondaryHref?: string;
};

function HeroInfoCard({
  icon: Icon,
  label,
  value,
  href,
  secondaryValue,
  secondaryHref,
  isRating,
  variant = "overlay",
}: HeroInfoCardProps) {
  const isStacked = variant === "stacked";

  const inner = (
    <div
      className={cn(
        "glass-hero-card group flex items-center gap-4 p-4 sm:p-5 min-h-[88px] sm:min-h-[100px]",
        "hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300",
        isStacked && "min-h-[80px]"
      )}
    >
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-white/[0.06]">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <span
          className={cn(
            "text-xs font-medium",
            isStacked ? "text-muted-foreground" : "text-white/55"
          )}
        >
          {label}
        </span>
        {isRating ? (
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={cn(
                "type-h3 tabular-nums",
                isStacked ? "text-foreground" : "text-white"
              )}
            >
              {value}
            </span>
            <div className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-gold text-gold"
                />
              ))}
            </div>
          </div>
        ) : secondaryValue ? (
          <div className="flex flex-col gap-1">
            {href ? (
              <a
                href={href}
                className={cn(
                  "type-body font-bold leading-snug hover:text-gold transition-colors",
                  isStacked ? "text-foreground" : "text-white"
                )}
              >
                {value}
              </a>
            ) : (
              <span
                className={cn(
                  "type-body font-bold leading-snug",
                  isStacked ? "text-foreground" : "text-white"
                )}
              >
                {value}
              </span>
            )}
            {secondaryHref ? (
              <a
                href={secondaryHref}
                className={cn(
                  "type-body-sm font-semibold leading-snug hover:text-gold transition-colors",
                  isStacked ? "text-muted-foreground" : "text-white/85"
                )}
              >
                {secondaryValue}
              </a>
            ) : (
              <span
                className={cn(
                  "type-body-sm font-semibold leading-snug",
                  isStacked ? "text-muted-foreground" : "text-white/85"
                )}
              >
                {secondaryValue}
              </span>
            )}
          </div>
        ) : (
          <span
            className={cn(
              "type-body font-bold leading-snug",
              isStacked ? "text-foreground" : "text-white"
            )}
          >
            {value}
          </span>
        )}
      </div>
    </div>
  );

  if (href && !secondaryValue) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}

function HeroHeading({ stacked }: { stacked?: boolean }) {
  return (
    <>
      <h1
        className={cn(
          "mb-4 md:mb-5",
          stacked ? "type-h1" : "type-display"
        )}
      >
        <span className={cn("block", stacked ? "text-foreground" : "text-white")}>
          تعمیر تخصصی خودرو
        </span>
        <span className="block text-gradient-gold mt-1">
          با استانداردهای جهانی
        </span>
      </h1>

      <p
        className={cn(
          "type-lead mb-2",
          stacked ? "text-muted-foreground" : "text-white/80"
        )}
      >
        ارائه خدمات تخصصی برای خودروهای داخلی و خارجی
      </p>
      <p
        className={cn(
          "type-body-sm mb-6 md:mb-8",
          stacked ? "text-muted-foreground/90" : "text-white/65"
        )}
      >
        با تجهیزات پیشرفته و تیم متخصص — موتور، گیربکس، دیاگ و بدنه
      </p>
    </>
  );
}

function HeroCTAs({ stacked }: { stacked?: boolean }) {
  return (
    <div
      className={cn(
        "flex gap-3",
        stacked ? "flex-col" : "flex-col sm:flex-row flex-wrap sm:gap-4"
      )}
    >
      <Link
        href="/booking"
        className={cn(
          "glass-hero-btn border border-gold/50 bg-white/[0.06]",
          "px-5 py-3.5 text-sm font-semibold text-foreground",
          "hover:bg-white/10 hover:border-gold/70",
          !stacked && "sm:px-7 sm:py-4 sm:text-base text-white"
        )}
      >
        <MessageCircle className="h-5 w-5 text-gold shrink-0" />
        دریافت مشاوره رایگان
      </Link>
      <BaleButton
        size={stacked ? "md" : "lg"}
        className={cn(
          "justify-center w-full sm:w-auto",
          !stacked && "sm:min-w-[200px]"
        )}
      />
    </div>
  );
}

function HeroCards({ variant }: { variant: "overlay" | "stacked" }) {
  return (
    <div
      className={cn(
        "grid gap-3",
        variant === "stacked"
          ? "grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:gap-4 lg:gap-5"
      )}
    >
      {infoCards.map((card) => (
        <HeroInfoCard key={card.label} {...card} variant={variant} />
      ))}
    </div>
  );
}

/** موبایل: تصویر بالا + محتوا پایین */
function HeroMobile() {
  return (
    <section className="md:hidden bg-background">
      {/* تصویر */}
      <div className="relative w-full h-[42dvh] min-h-[220px] max-h-[380px]">
        <Image
          src="/images/HeroMobile.png"
          alt="تعمیر تخصصی خودرو در خودرو پرشین"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>

      {/* متن و کارت‌ها */}
      <div className="container-site -mt-2 pb-8 space-y-6">
        <ScrollReveal>
          <HeroHeading stacked />
          <HeroCTAs stacked />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <HeroCards variant="stacked" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/** دسکتاپ: تصویر پس‌زمینه + متن روی آن */
function HeroDesktop() {
  return (
    <section className="relative hidden md:flex min-h-[100dvh] flex-col overflow-hidden">
      <Image
        src="/images/Hero2.png"
        alt="تعمیر تخصصی خودرو در خودرو پرشین"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 container-site flex flex-col min-h-[100dvh] pt-24 pb-10 w-full">
        <div className="flex-1 flex items-center py-12">
          <ScrollReveal className="w-full max-w-xl lg:max-w-2xl ms-0 me-auto text-start">
            <HeroHeading />
            <HeroCTAs />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150} className="w-full mt-auto">
          <HeroCards variant="overlay" />
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <HeroMobile />
      <HeroDesktop />
    </>
  );
}
