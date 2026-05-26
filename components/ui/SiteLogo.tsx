import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  size?: number;
  showName?: boolean;
  variant?: "default" | "gold";
  className?: string;
  nameClassName?: string;
};

export default function SiteLogo({
  size = 36,
  showName = true,
  variant = "default",
  className,
  nameClassName,
}: SiteLogoProps) {
  const isGold = variant === "gold";

  return (
    <span className={cn("flex items-center gap-2.5 shrink-0", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          isGold
            ? "bg-gold/15 ring-2 ring-gold/50 shadow-[0_0_12px_hsl(var(--gold)/0.35)]"
            : "glass-subtle ring-1 ring-white/15"
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={BRAND.icon}
          alt={`لوگو ${BRAND.name}`}
          width={size}
          height={size}
          className={cn(
            "object-contain p-0.5",
            isGold && "logo-gold-tint"
          )}
          priority
        />
      </span>
      {showName && (
        <span
          className={cn(
            "font-bold text-base sm:text-lg tracking-tight",
            isGold ? "text-gradient-gold" : "text-foreground",
            nameClassName
          )}
        >
          {BRAND.name}
        </span>
      )}
    </span>
  );
}
