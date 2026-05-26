import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CONTACT, LINKS } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import BaleButton from "@/components/ui/BaleButton";
import MapEmbed from "@/components/ui/MapEmbed";

export const metadata = createPageMetadata({
  title: "تماس با ما",
  description: `تماس با ${CONTACT.mobileDisplay} — آدرس، ساعات کاری و نقشه ${CONTACT.address}. پیام در بله یا تماس تلفنی.`,
  path: "/contact",
  keywords: ["تماس", "آدرس تعمیرگاه", "نقشه", "بله"],
});

export default function ContactPage() {
  return (
    <section className="py-16" id="contact">
      <div className="container py-16 mx-auto px-4">
        <header className="mb-12 ">
          <h1 className="type-h1 mb-4 md:mb-5">
            <span className="text-primary">ارتباط</span> با ما
          </h1>
          <p className="type-lead text-muted-foreground max-w-2xl">
            برای دریافت اطلاعات بیشتر، نوبت‌گیری یا مشاوره، از روش‌های زیر با ما در تماس باشید.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">اطلاعات تماس</CardTitle>
              <CardDescription>راه‌های سریع ارتباطی با مجموعه</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">شماره تماس</div>
                <Link href={`tel:${CONTACT.phone}`} className="text-primary hover:underline">
                  {CONTACT.phoneDisplay}
                </Link>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">موبایل</div>
                <Link href={`tel:${CONTACT.mobile}`} className="text-primary hover:underline">
                  {CONTACT.mobileDisplay}
                </Link>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">پیام در بله</div>
                <BaleButton size="sm" label="ارسال پیام" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">ایمیل</div>
                <Link href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
                  {CONTACT.email}
                </Link>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">ساعات کاری</div>
                <ul className="space-y-1">
                  <li>{CONTACT.hours}</li>
                  <li>{CONTACT.friday}</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">موقعیت ما روی نقشه</CardTitle>
              <CardDescription>برای مسیریابی، نقشه زیر را باز کنید</CardDescription>
            </CardHeader>
            <CardContent>
              <MapEmbed
                src={LINKS.googleMapsEmbed}
                className="h-[280px] sm:h-[320px] rounded-lg border border-border"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
