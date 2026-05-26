import Image from "next/image";

import Link from "next/link";

import { Settings, ArrowLeft } from "lucide-react";

import SectionShell from "@/components/layout/SectionShell";

import SectionHeader from "@/components/layout/SectionHeader";

import ScrollReveal from "@/components/ui/ScrollReveal";

import { BRAND } from "@/lib/constants";



const storySteps = [

  {

    step: "۰۱",

    title: "عیب‌یابی دقیق",

    text: "بررسی فشردگی، دیاگ و تست رانندگی قبل از هر تصمیم تعمیراتی.",

  },

  {

    step: "۰۲",

    title: "بازدید و برنامه‌ریزی",

    text: "گزارش شفاف ایرادات موتور و تخمین زمان و هزینه با قطعات اصل.",

  },

  {

    step: "۰۳",

    title: "تعمیر و مونتاژ",

    text: "تعمیر موتور، تنظیم سوخت و آزمایش نهایی تحت بار واقعی.",

  },

  {

    step: "۰۴",

    title: "تحویل با ضمانت",

    text: "تحویل خودرو پس از تست کیفیت و ثبت گارانتی خدمات.",

  },

];



export default function EngineRepairSection() {

  return (

    <SectionShell id="engine-repair" className="bg-card/20">

      <ScrollReveal>

        <SectionHeader

          label="تعمیر موتور"

          title="تعمیر تخصصی موتور"

          description={`در ${BRAND.name} فرآیند تعمیر موتور شفاف، مرحله‌به‌مرحله و با تجهیزات حرفه‌ای انجام می‌شود.`}

          align="start"

        />



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-subtle">

            <Image

              src="/images/motorRepair.jpg"

              alt="تعمیر موتور تخصصی در خودرو پرشین"

              fill

              sizes="(max-width: 1024px) 100vw, 50vw"

              className="object-cover object-center"

            />

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 start-4 end-4 glass-subtle px-4 py-3 flex items-center gap-3">

              <Settings className="h-6 w-6 text-gold shrink-0" strokeWidth={1.5} />

              <p className="text-sm text-foreground/90 leading-snug">

                بازسازی موتور، رفع لرزش و بهبود عملکرد — استاندارد کارخانه

              </p>

            </div>

          </div>



          <ol className="space-y-4">

            {storySteps.map((item) => (

              <li

                key={item.step}

                className="glass-subtle p-4 sm:p-5 flex gap-4 items-start"

              >

                <span className="text-gold font-bold text-lg tabular-nums shrink-0">

                  {item.step}

                </span>

                <div>

                  <h3 className="type-h4 text-foreground mb-1">{item.title}</h3>

                  <p className="type-body-sm text-muted-foreground">

                    {item.text}

                  </p>

                </div>

              </li>

            ))}

          </ol>

        </div>



        <div className="mt-8 text-start">

          <Link

            href="/services/engine-repair"

            className="inline-flex items-center gap-2 text-gold hover:text-gold-soft text-sm font-semibold transition-colors"

          >

            جزئیات تعمیر موتور

            <ArrowLeft className="h-4 w-4" />

          </Link>

        </div>

      </ScrollReveal>

    </SectionShell>

  );

}

