import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "رزرو آنلاین",
  description:
    "رزرو نوبت و استعلام قیمت تعمیر خودرو در خودرو پرشین — انتخاب زمان، ثبت درخواست و پیگیری آنلاین.",
  path: "/booking",
  keywords: ["رزرو نوبت", "استعلام قیمت", "نوبت‌دهی"],
});

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
