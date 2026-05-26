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
    <article className="py-16">
      <div className="container-site py-16">
        <header className="max-w-3xl mb-10">
          <p className="type-label text-gold mb-3">ایمنی و پایداری</p>
          <h1 className="type-h1 mb-5 md:mb-6">تعمیر سیستم ترمز و جلوبندی خودرو</h1>
          <p className="type-lead text-muted-foreground">
            سیستم ترمز و جلوبندی مستقیما با ایمنی راننده و سرنشینان در ارتباط است. هر صدای غیرعادی،
            کشیدن خودرو به یک سمت یا کاهش قدرت ترمز باید سریع بررسی شود.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section className="glass-subtle p-6 md:p-8">
            <h2 className="type-h3 mb-4">خدمات ما</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>تعویض لنت جلو و عقب با قطعات معتبر</li>
              <li>تراش یا تعویض دیسک ترمز و بررسی تاب‌برداشتن</li>
              <li>هواگیری و تنظیم کامل مدار ترمز</li>
              <li>بازدید بوستر، پمپ ترمز، روغن ترمز و سیستم ABS</li>
              <li>بررسی سیبک، کمک‌فنر، موج‌گیر و قطعات جلوبندی</li>
            </ul>
          </section>

          <section className="glass p-6 md:p-8">
            <h2 className="type-h3 mb-4">نشانه‌های خرابی</h2>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li>صدای سوت یا ساییدگی هنگام ترمزگیری</li>
              <li>لرزش فرمان یا پدال هنگام کاهش سرعت</li>
              <li>کشیده شدن خودرو به چپ یا راست</li>
              <li>افزایش مسافت توقف یا نرم شدن پدال</li>
            </ul>
          </section>
        </div>

        <section className="glass mt-6 p-6 md:p-8">
          <h2 className="type-h3 mb-4">چرا سرویس به‌موقع مهم است؟</h2>
          <p className="type-body-sm text-muted-foreground leading-8">
            سرویس به‌موقع ترمز باعث افزایش ایمنی، کاهش استهلاک قطعات جانبی و حفظ کنترل خودرو در
            شرایط اضطراری می‌شود. بازدید دوره‌ای جلوبندی نیز از ساییدگی غیرعادی لاستیک‌ها و فشار
            بیشتر به سیستم تعلیق جلوگیری می‌کند.
          </p>
        </section>
      </div>
    </article>
  );
}
