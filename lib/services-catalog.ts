import type { LucideIcon } from "lucide-react";

import {

  Settings,

  Droplet,

  AlertCircle,

  Wrench,

  Car,

  Gauge,

  Snowflake,

  Calendar,

} from "lucide-react";



export type ServiceItem = {

  slug: string;

  href: string;

  title: string;

  subtitle: string;

  description: string;

  image: string;

  imageAlt: string;

  icon: LucideIcon;

  keywords?: string[];

};



export const SERVICES_CATALOG: ServiceItem[] = [

  {

    slug: "engine-repair",

    href: "/services/engine-repair",

    title: "تعمیر موتور",

    subtitle: "تعمیر و بازسازی موتور",

    description: "بازسازی و تعمیر تخصصی موتور با قطعات اصل و تست نهایی.",

    image: "/images/motorRepair.jpg",

    imageAlt: "تعمیر موتور تخصصی در خودرو پرشین",

    icon: Settings,

    keywords: ["تعمیر موتور", "بازسازی موتور", "مکانیکی تخصصی"],

  },

  {

    slug: "transmission",

    href: "/services/transmission",

    title: "تعمیر گیربکس",

    subtitle: "گیربکس دستی و اتومات",

    description: "سرویس و تعمیر گیربکس اتومات و دستی با تجهیزات مدرن.",

    image: "/images/Hero.png",

    imageAlt: "تعمیر گیربکس در خودرو پرشین",

    icon: Wrench,

    keywords: ["تعمیر گیربکس", "گیربکس اتومات", "تعویض روغن گیربکس"],

  },

  {

    slug: "diagnostics",

    href: "/services/diagnostics",

    title: "عیب‌یابی و دیاگ",

    subtitle: "عیب‌یابی الکترونیکی",

    description: "دیاگ پیشرفته، خواندن خطا و تشخیص دقیق ایراد.",

    image: "/images/stepbystep-2.jpg",

    imageAlt: "عیب‌یابی و دیاگ خودرو در خودرو پرشین",

    icon: AlertCircle,

    keywords: ["عیب‌یابی", "دیاگ خودرو", "چراغ چک موتور"],

  },

  {

    slug: "oil-change",

    href: "/services/oil-change",

    title: "تعویض روغن",

    subtitle: "سرویس روغن موتور",

    description: "تعویض روغن موتور و فیلتر با روغن‌های معتبر.",

    image: "/images/repairoil.jpg",

    imageAlt: "تعویض روغن موتور در خودرو پرشین",

    icon: Droplet,

    keywords: ["تعویض روغن", "روغن موتور"],

  },

  {

    slug: "periodic",

    href: "/services/periodic",

    title: "سرویس دوره‌ای",

    subtitle: "نگهداری برنامه‌ای",

    description: "سرویس دوره‌ای مطابق دستور کارخانه سازنده.",

    image: "/images/periodic.jpg",

    imageAlt: "سرویس دوره‌ای خودرو در خودرو پرشین",

    icon: Calendar,

    keywords: ["سرویس دوره‌ای", "نگهداری خودرو"],

  },

  {

    slug: "tuning",

    href: "/services/tuning",

    title: "تنظیم موتور",

    subtitle: "بهینه‌سازی عملکرد",

    description: "تنظیم موتور برای مصرف بهینه و عملکرد بهتر.",

    image: "/images/Hero2.png",

    imageAlt: "تنظیم موتور در خودرو پرشین",

    icon: Gauge,

    keywords: ["تنظیم موتور", "بهینه‌سازی مصرف"],

  },

  {

    slug: "brake-repair",

    href: "/services/brake-repair",

    title: "ترمز و جلوبندی",

    subtitle: "ایمنی و پایداری",

    description: "تعمیر ترمز، لنت و سرویس جلوبندی.",

    image: "/images/HeroMobile.png",

    imageAlt: "تعمیر ترمز و جلوبندی در خودرو پرشین",

    icon: Car,

    keywords: ["تعمیر ترمز", "جلوبندی", "لنت ترمز"],

  },

  {

    slug: "car-ac-repair",

    href: "/services/car-ac-repair",

    title: "کولر و تهویه",

    subtitle: "سرویس کولر خودرو",

    description: "شارژ گاز، تعمیر کمپرسور و سرویس کولر.",

    image: "/images/Hero.png",

    imageAlt: "تعمیر کولر خودرو در خودرو پرشین",

    icon: Snowflake,

    keywords: ["تعمیر کولر", "شارژ گاز کولر"],

  },

];



export function getServiceBySlug(slug: string) {

  return SERVICES_CATALOG.find((s) => s.slug === slug);

}

