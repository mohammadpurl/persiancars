"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** hash فعلی مرورگر (مثلاً #services) — فقط سمت کلاینت */
export function useNavHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return hash;
}

/**
 * فقط یک آیتم منو فعال: در / بدون hash فقط «صفحه اصلی»،
 * با #services فقط «خدمات»، با #location فقط «موقعیت».
 */
export function isNavLinkActive(
  pathname: string,
  hash: string,
  path: string
): boolean {
  if (path === "/") {
    return pathname === "/" && (hash === "" || hash === "#");
  }

  if (path.startsWith("/#")) {
    if (pathname !== "/") return false;
    return hash === path.slice(1);
  }

  const base = path.split("#")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

export function useNavActive(path: string) {
  const pathname = usePathname();
  const hash = useNavHash();
  return isNavLinkActive(pathname, hash, path);
}
