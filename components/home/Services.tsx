import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import MotionSection from "@/components/ui/MotionSection";
import { ServiceProps } from "@/types/services-type";
import { BRAND } from "@/lib/constants";
import { SERVICES_CATALOG } from "@/lib/services-catalog";

const servicesData = SERVICES_CATALOG.slice(0, 5).map((s) => ({
  title: s.title,
  description: s.description,
  icon: s.icon,
  link: s.href,
}));

const Services = ({ showButton = true }: ServiceProps) => {
  return (
    <SectionShell id="services">
      <MotionSection>
        <SectionHeader
          label="خدمات ما"
          title="خدمات تخصصی خودرو"
          description={`${BRAND.name}  تعمیر، سرویس و نگهداری حرفه‌ای برای خودروی شما`}
          align={showButton ? "center" : "start"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                itemScope
                itemType="https://schema.org/Service"
                className="glass-subtle p-5 flex flex-col gap-4 hover:bg-white/[0.1] transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3
                  itemProp="name"
                  className="type-h4 text-foreground"
                >
                  {service.title}
                </h3>
                <p
                  itemProp="description"
                  className="type-body-sm text-muted-foreground flex-grow"
                >
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  itemProp="url"
                  className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft transition-colors mt-auto"
                >
                  بیشتر بدانید
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {showButton && (
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-gold text-primary-foreground px-8 py-3 text-sm font-semibold hover:brightness-110 transition-all"
            >
              مشاهده تمام خدمات
            </Link>
          </div>
        )}
      </MotionSection>
    </SectionShell>
  );
};

export default Services;
