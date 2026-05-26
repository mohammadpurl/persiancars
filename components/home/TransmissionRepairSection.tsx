import Image from "next/image";

import Link from "next/link";

import { Cog, ArrowLeft } from "lucide-react";

import SectionShell from "@/components/layout/SectionShell";

import SectionHeader from "@/components/layout/SectionHeader";

import ScrollReveal from "@/components/ui/ScrollReveal";

import { BRAND } from "@/lib/constants";



const highlights = [

  "تعمیر گیربکس اتومات و دستی",

  "تعویض روغن با دستگاه مخصوص و فیلتر استاندارد",

  "تست سلامت کلاچ، بدنه و سنسورها پس از تعمیر",

  "گزارش شفاف قبل و بعد از سرویس",

];



export default function TransmissionRepairSection() {

  return (

    <SectionShell id="transmission-repair">

      <ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="order-2 lg:order-1">

            <SectionHeader

              label="تعمیر گیربکس"

              title="تعمیر تخصصی گیربکس"

              description={`تیم ${BRAND.name} روی لغزش گیربکس، تأخیر در دنده و صدای غیرعادی تخصص دارد.`}

              align="start"

              className="mb-6 md:mb-8"

            />



            <ul className="space-y-3 mb-8">

              {highlights.map((item) => (

                <li

                  key={item}

                  className="flex items-start gap-3 type-body-sm text-muted-foreground"

                >

                  <Cog

                    className="h-5 w-5 text-gold shrink-0 mt-0.5"

                    strokeWidth={1.5}

                  />

                  <span>{item}</span>

                </li>

              ))}

            </ul>



            <Link

              href="/services/transmission"

              className="inline-flex items-center gap-2 rounded-full bg-gold text-primary-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition-all"

            >

              سرویس گیربکس

              <ArrowLeft className="h-4 w-4" />

            </Link>

          </div>



          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden glass-subtle">

            <Image

              src="/images/stepbystep-2.jpg"

              alt="تعمیر گیربکس در خودرو پرشین"

              fill

              sizes="(max-width: 1024px) 100vw, 50vw"

              className="object-cover object-center"

            />

            <div className="absolute inset-0 bg-gradient-to-l from-background/70 via-transparent to-transparent" />



            <div className="absolute top-4 end-4 glass-hero-card px-4 py-3 max-w-[200px]">

              <p className="text-xs text-muted-foreground mb-1">تخصص</p>

              <p className="text-sm font-bold text-foreground">

                گیربکس اتومات

              </p>

            </div>

            <div className="absolute bottom-4 start-4 glass-hero-card px-4 py-3 max-w-[200px]">

              <p className="text-xs text-muted-foreground mb-1">سرویس</p>

              <p className="text-sm font-bold text-foreground">

                روغن + دیاگ

              </p>

            </div>

          </div>

        </div>

      </ScrollReveal>

    </SectionShell>

  );

}

