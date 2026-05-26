import { Vazirmatn } from "next/font/google";
import "./globals.css";
import GlassNavbar from "@/components/layout/GlassNavbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/Footer";
import LocalBusinessJsonLd from "@/components/seo/LocalBusinessJsonLd";
import { rootMetadata } from "@/lib/seo";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} font-sans antialiased text-[1.0625rem] leading-[1.8]`}>
        <LocalBusinessJsonLd />
        <GlassNavbar />
        <main className="pb-nav-safe md:pb-0 min-h-screen">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
