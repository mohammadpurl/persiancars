import Link from "next/link";

import { AlertTriangle, ArrowLeft } from "lucide-react";

import SectionShell from "@/components/layout/SectionShell";

import SectionHeader from "@/components/layout/SectionHeader";

import ScrollReveal from "@/components/ui/ScrollReveal";

import BaleButton from "@/components/ui/BaleButton";



const problems = [

  {

    id: "engine-knocking",

    title: "صدای تق‌تق موتور",

    symptom: "صدای فلزی هنگام شتاب یا در دور بالا",

    cause: "سوخت نامناسب، روغن کم یا ایراد یاتاقان/پیستون",

    action: "تعمیر موتور و بررسی فوری",

    href: "/services/engine-repair",

  },

  {

    id: "gearbox-slipping",

    title: "لغزش و تأخیر گیربکس",

    symptom: "دنده عوض نمی‌شود یا موتور دور بالا بدون شتاب",

    cause: "روغن کهنه، کلاچ فرسوده یا ایراد هیدرولیک",

    action: "سرویس و تعمیر تخصصی گیربکس",

    href: "/services/transmission",

  },

  {

    id: "check-engine",

    title: "روشن ماندن چراغ چک",

    symptom: "چراغ چک موتور روشن یا چشمک‌زن",

    cause: "خطای سنسور، سوخت‌رسانی یا اگزوز",

    action: "عیب‌یابی با دستگاه دیاگ",

    href: "/services/diagnostics",

  },

  {

    id: "rough-idle",

    title: "دور گرم نامنظم",

    symptom: "لرزش در توقف و خاموشی ناگهانی",

    cause: "شمع، سنسور فشار هوا یا نشت وکیوم",

    action: "عیب‌یابی و تنظیم موتور",

    href: "/services/diagnostics",

  },

];



export default function CommonProblems() {

  return (

    <SectionShell id="common-problems">

      <ScrollReveal>

        <SectionHeader

          label="مشکلات رایج"

          title="علائمی که نباید نادیده بگیرید"

          description="تشخیص سریع مشکلات پرتکرار و هشدارهای رایج خودرو."

        />



        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {problems.map((problem) => (

            <article

              key={problem.id}

              id={problem.id}

              className="glass-subtle p-5 sm:p-6 flex flex-col gap-3"

            >

              <div className="flex items-center gap-2">

                <AlertTriangle className="h-5 w-5 text-gold shrink-0" />

                <h3 className="type-h4 text-foreground">{problem.title}</h3>

              </div>



              <dl className="space-y-2 text-sm">

                <div>

                  <dt className="text-muted-foreground mb-0.5">علامت</dt>

                  <dd className="text-foreground">{problem.symptom}</dd>

                </div>

                <div>

                  <dt className="text-muted-foreground mb-0.5">علت محتمل</dt>

                  <dd className="text-foreground/90">{problem.cause}</dd>

                </div>

                <div>

                  <dt className="text-muted-foreground mb-0.5">اقدام</dt>

                  <dd className="text-gold-soft font-medium">{problem.action}</dd>

                </div>

              </dl>



              <Link

                href={problem.href}

                className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-soft mt-auto pt-1 transition-colors"

              >

                راه‌حل تخصصی

                <ArrowLeft className="h-3.5 w-3.5" />

              </Link>

            </article>

          ))}

        </div>



        <div className="mt-8 flex justify-center">

          <BaleButton size="md" />

        </div>

      </ScrollReveal>

    </SectionShell>

  );

}

