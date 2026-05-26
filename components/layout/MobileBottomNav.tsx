"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Wrench, ImageIcon, Phone } from "lucide-react";
import BaleButton from "@/components/ui/BaleButton";
import { MOBILE_NAV } from "@/lib/constants";
import { isNavLinkActive, useNavHash } from "@/lib/use-nav-active";
import { cn } from "@/lib/utils";

const iconMap = {
  home: Home,
  services: Wrench,
  portfolio: ImageIcon,
  contact: Phone,
} as const;

export default function MobileBottomNav() {
  const pathname = usePathname();
  const hash = useNavHash();

  return (
    <nav
      className="md:hidden fixed bottom-4 inset-x-4 z-50 mx-auto max-w-lg"
      aria-label="ناوبری موبایل"
    >
      <div className="flex items-center justify-around h-16 px-2 rounded-full border border-white/25 bg-[#0a0a0a]/92 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.55)]">
        {MOBILE_NAV.map((item) => {
          const isBale = item.icon === "bale";

          if (isBale) {
            return <BaleButton key={item.title} size="fab" />;
          }

          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const href =
            "external" in item && item.external ? item.path : item.path;
          const active = isNavLinkActive(pathname, hash, item.path);

          return (
            <Link
              key={item.title}
              href={href}
              className={cn(
                "flex flex-col items-center justify-center gap-0.5 min-w-[52px] min-h-[44px] rounded-xl transition-all duration-200",
                active
                  ? "text-gold bg-gold/12"
                  : "text-white/75 hover:text-white hover:bg-white/6"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  active && "scale-110 drop-shadow-[0_0_6px_hsl(var(--gold)/0.5)]"
                )}
                strokeWidth={active ? 2.25 : 1.75}
              />
              <span
                className={cn(
                  "text-[10px]",
                  active ? "font-bold text-gold" : "font-medium"
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
