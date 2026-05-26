import Image from "next/image";

import Link from "next/link";

import {

  ClipboardList,

  Cpu,

  FileSearch,

  Wrench,

  ArrowLeft,

} from "lucide-react";

import SectionShell from "@/components/layout/SectionShell";

import SectionHeader from "@/components/layout/SectionHeader";

import ScrollReveal from "@/components/ui/ScrollReveal";



const steps = [

  {

    icon: ClipboardList,

    title: "ثبت مشکل",

    text: "شرح دقیق صدا، چراغ چک و شرایط رانندگی از زبان شما.",

  },

  {

    icon: Cpu,

    title: "اتصال دیاگ",

    text: "خواندن خطاها و پارامترهای زنده واحد کنترل موتور.",

  },

  {

    icon: FileSearch,

    title: "تحلیل",

    text: "تشخیص ریشه‌ای؛ بدون تعویض قطعه غیرضروری.",

  },

  {

    icon: Wrench,

    title: "اقدام",

    text: "تعمیر هدفمند و تست مجدد پس از رفع ایراد.",

  },

];



export default function DiagnosticProcess() {

  return (

    <SectionShell id="diagnostics" className="bg-card/30">

      <ScrollReveal>

        <SectionHeader

          label="عیب‌یابی"

          title="فرآیند عیب‌یابی  گام‌به‌گام"

          description="مسیر شفاف از ثبت مشکل تا تحویل؛ مناسب خودروهای داخلی و خارجی."

        />



        <div className="relative aspect-[21/9] max-h-[220px] sm:max-h-[280px] rounded-2xl overflow-hidden glass-subtle mx-auto mb-8 sm:mb-10">

          <Image

            src="/images/findproblem.jpg"

            alt="فرآیند عیب‌یابی و دیاگ خودرو در خودرو پرشین"

            fill

            sizes="100vw"

            className="object-cover object-center opacity-60"

          />

          <div className="absolute inset-0 bg-background/50" />

        </div>



        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <li

                key={step.title}

                className="glass-subtle p-5 flex flex-col gap-3 relative"

              >

                <span className="text-xs font-medium text-gold/80">

                  مرحله {index + 1}

                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-white/[0.04]">

                  <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />

                </div>

                <h3 className="type-h4 text-foreground">{step.title}</h3>

                <p className="type-body-sm text-muted-foreground flex-grow">

                  {step.text}

                </p>

                {index < steps.length - 1 && (

                  <span

                    className="hidden lg:block absolute top-1/2 -start-2 w-4 h-px bg-gold/40 -translate-y-1/2"

                    aria-hidden

                  />

                )}

              </li>

            );

          })}

        </ol>



        <div className="mt-8 text-center">

          <Link

            href="/services/diagnostics"

            className="inline-flex items-center gap-2 text-gold hover:text-gold-soft text-sm font-semibold transition-colors"

          >

            خدمات عیب‌یابی تخصصی

            <ArrowLeft className="h-4 w-4" />

          </Link>

        </div>

      </ScrollReveal>

    </SectionShell>

  );

}

