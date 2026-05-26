"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BaleButton from "@/components/ui/BaleButton";
import SiteLogo from "@/components/ui/SiteLogo";
import { NAV_LINKS } from "@/lib/constants";
import { isNavLinkActive, useNavHash } from "@/lib/use-nav-active";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hash = useNavHash();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 border-b",
        scrolled
          ? "glass-nav shadow-lg border-white/15 bg-black/75"
          : "border-white/10 bg-black/55 backdrop-blur-lg"
      )}
    >
      <div className="container-site h-full flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity">
          <SiteLogo size={36} variant="gold" />
        </Link>

        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="منوی اصلی"
        >
          {NAV_LINKS.map((link) => {
            const active = isNavLinkActive(pathname, hash, link.path);
            return (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "px-2.5 py-2 text-sm md:px-3 lg:px-4 lg:type-body-sm font-medium rounded-full transition-all duration-200",
                  active
                    ? "text-gold bg-gold/15 ring-1 ring-gold/35"
                    : "text-white/90 hover:text-gold hover:bg-white/8"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>

        <BaleButton size="sm" className="shrink-0" />
      </div>
    </header>
  );
}
