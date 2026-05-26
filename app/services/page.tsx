import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { BRAND } from "@/lib/constants";
import { SERVICES_CATALOG } from "@/lib/services-catalog";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "خدمات تخصصی خودرو",
  description: `خدمات ${BRAND.name}: تعمیر موتور، گیربکس، عیب‌یابی، سرویس دوره‌ای و تعمیر تخصصی در تهران.`,
  path: "/services",
  keywords: [
    "خدمات خودرو",
    "تعمیر موتور",
    "تعمیر گیربکس",
    "عیب‌یابی",
    "تعمیرگاه تهران",
  ],
});

export default function ServicesPage() {
  return (
    <article className="pb-16">
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background pointer-events-none" />
        <div className="container-site relative text-center max-w-3xl mx-auto">
          <p className="type-label text-gold mb-3 md:mb-4">
            خدمات ما
          </p>
          <h1 className="type-h1 mb-5 md:mb-6">
            خدمات <span className="text-gradient-gold">تخصصی خودرو</span>
          </h1>
          <p className="type-lead text-muted-foreground mb-8">
            {BRAND.name} — تعمیر موتور، گیربکس، عیب‌یابی، سرویس دوره‌ای و
            نگهداری حرفه‌ای با تجهیزات مدرن و گزارش شفاف.
          </p>
          <div className="relative aspect-[21/9] max-h-[220px] rounded-2xl overflow-hidden glass-subtle mb-8">
            <Image
              src="/images/Hero2.png"
              alt={`خدمات تخصصی ${BRAND.name}`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-background/40" />
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES_CATALOG.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className="glass-subtle overflow-hidden flex flex-col group hover:bg-white/[0.08] transition-colors"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute bottom-3 start-3 flex h-10 w-10 items-center justify-center rounded-lg border border-gold/40 bg-background/60 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-2 flex-grow">
                    <p className="text-xs text-gold/90">{service.subtitle}</p>
                    <h2
                      itemProp="name"
                      className="type-h3 text-foreground"
                    >
                      {service.title}
                    </h2>
                    <p
                      itemProp="description"
                      className="text-sm text-muted-foreground leading-relaxed flex-grow"
                    >
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      itemProp="url"
                      className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft transition-colors mt-2"
                    >
                      مشاهده جزئیات
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-site">
        <div className="glass text-center p-8 rounded-2xl">
          <h2 className="type-h3 mb-4">نیاز به مشاوره دارید؟</h2>
          <p className="text-muted-foreground text-sm mb-6">
            نوع خدمت را مشخص کنید — در بله یا تلفن راهنمایی‌تان می‌کنیم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <BaleButton size="lg" />
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-xl bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110"
            >
              رزرو آنلاین
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
