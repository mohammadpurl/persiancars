export const BRAND = {
  name: "خودرو پرشین",
  tagline: "کلینیک تخصصی تعمیر و نگهداری خودرو",
  siteUrl: "https://persiancars.ir",
  icon: "/favicon.ico",
} as const;

export const CONTACT = {
  phone: "02144746531",
  phoneDisplay: "۰۲۱-۴۴۷۴۶۵۳۱",
  mobile: "09124054376",
  mobileDisplay: "۰۹۱۲-۴۰۵-۴۳۷۶",
  email: "falahyabolfazl87@gmail.com",
  address:
    "تهران، شهرک گلستان، بلوار علیمرادی (کوهک)، خیابان نسیم ششم، پلاک ۲۷",
  hours: "شنبه تا پنجشنبه: ۸:۰۰ تا ۲۰:۰۰",
  hoursShort: "۸:۰۰ – ۲۰:۰۰",
  friday: "جمعه: تعطیل",
  lat: 35.72127151489258,
  lng: 51.24491882324219,
  rating: 4.9,
  ratingCount: 150,
} as const;

/** لینک پیام در بله — باز کردن چت با شماره پشتیبانی */
export const LINKS = {
  bale: `https://ble.ir/${CONTACT.mobile}`,
  baleWeb: "https://web.bale.ai/",
  instagram: "https://instagram.com/persian_car_clinic",
  googleMaps: `https://www.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}`,
  /** embed سازگار با iframe — maps.google.com پایدارتر از www.google.com/maps?output=embed */
  googleMapsEmbed: `https://maps.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}&hl=fa&z=16&ie=UTF8&iwloc=&output=embed`,
  /** جایگزین بدون محدودیت گوگل (هاست ایران / مرورگر) */
  openStreetMapEmbed: `https://www.openstreetmap.org/export/embed.html?bbox=${CONTACT.lng - 0.012},${CONTACT.lat - 0.008},${CONTACT.lng + 0.012},${CONTACT.lat + 0.008}&layer=mapnik&marker=${CONTACT.lat}%2C${CONTACT.lng}`,
} as const;

export const NAV_LINKS = [
  { title: "صفحه اصلی", path: "/", hash: undefined },
  { title: "خدمات", path: "/#services", hash: "services" },
  { title: "موقعیت", path: "/#location", hash: "location" },
  { title: "درباره ما", path: "/about" },
  { title: "تماس", path: "/contact" },
] as const;

export const MOBILE_NAV = [
  { title: "خانه", path: "/", icon: "home" as const },
  { title: "خدمات", path: "/#services", icon: "services" as const },
  { title: "بله", path: LINKS.bale, icon: "bale" as const, external: true },
  { title: "موقعیت", path: "/#location", icon: "location" as const },
  { title: "تماس", path: "/contact", icon: "contact" as const },
] as const;

export const STATS = [
  { value: "۱", label: "شعبه فعال", icon: "building" as const },
  { value: "۱۰+", label: "سال تجربه", icon: "calendar" as const },
  { value: "۲۵۰۰+", label: "خودرو تعمیر شده", icon: "car" as const },
  { value: "۱۵۰۰+", label: "مشتری راضی", icon: "users" as const },
] as const;
