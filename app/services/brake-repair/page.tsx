import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "تعمیر ترمز",
  description:
    "تعمیر و سرویس سیستم ترمز — تعویض لنت، دیسک و هواگیری در خودرو پرشین.",
  path: "/services/brake-repair",
  keywords: ["تعمیر ترمز", "لنت ترمز", "دیسک ترمز"],
});

export default function BrakeRepairPage() {
  return (
    <div className='py-16' >
    <main className=" mx-auto px-4 py-16">
      <h1 className="type-h1 mb-6 md:mb-8 text-primary">
        تعمیر سیستم ترمز خودرو
      </h1>
      <p className="type-body text-muted-foreground mb-4">
        سیستم ترمز یکی از حیاتی‌ترین بخش‌های خودرو است که در ایمنی شما نقش
        مستقیم دارد. هرگونه اختلال در ترمز می‌تواند خطرات جدی ایجاد کند.
      </p>
      <p className="type-body text-muted-foreground mb-4">
        در <strong>خودرو پرشین</strong> با استفاده از ابزارهای تخصصی و
        قطعات باکیفیت، خدمات کامل تعمیر و سرویس ترمز ارائه می‌دهیم.
      </p>
      <ul className="list-disc list-inside mb-6 leading-8">
        <li>تعویض لنت ترمز جلو و عقب</li>
        <li>تراش یا تعویض دیسک ترمز</li>
        <li>هواگیری و تنظیم سیستم ترمز</li>
        <li>بررسی و تعمیر سیستم ترمز ضد قفل</li>
      </ul>
      <div className="bg-secondary/20 rounded-xl p-6 shadow-md">
        <h2 className="type-h3 mb-4">چرا سرویس به موقع ترمز مهم است؟</h2>
        <p className="type-body-sm text-muted-foreground">
          - افزایش ایمنی خودرو و سرنشینان <br />
          - کاهش استهلاک لوازم جانبی ترمز <br />
          - عملکرد نرم و دقیق پدال ترمز <br />
          - اطمینان خاطر در رانندگی
        </p>
      </div>
    </main>
    </div>
  );
}
