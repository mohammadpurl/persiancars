import BaleLogo from "@/components/ui/BaleLogo";
import { LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BaleButtonProps = {
  className?: string;
  label?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg" | "fab";
};

const sizeStyles = {
  sm: {
    btn: "px-3 py-2 text-xs gap-2 rounded-xl",
    logo: 22,
  },
  md: {
    btn: "px-4 py-2.5 text-sm gap-2.5 rounded-xl",
    logo: 26,
  },
  lg: {
    btn: "px-6 py-3.5 sm:py-4 text-sm sm:text-base gap-3 rounded-xl",
    logo: 30,
  },
  fab: {
    btn: "flex-col gap-1 p-0 bg-transparent border-0 shadow-none hover:opacity-100",
    logo: 32,
  },
};

export default function BaleButton({
  className,
  label = "پیام در بله",
  showLabel = true,
  size = "md",
}: BaleButtonProps) {
  const s = sizeStyles[size];

  if (size === "fab") {
    return (
      <a
        href={LINKS.bale}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex flex-col items-center justify-center -mt-6",
          className
        )}
        aria-label={label}
      >
        <span className="bale-btn-fab flex h-14 w-14 items-center justify-center rounded-full">
          <BaleLogo size={s.logo} />
        </span>
        <span className="text-[10px] mt-1 text-muted-foreground">بله</span>
      </a>
    );
  }

  return (
    <a
      href={LINKS.bale}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("bale-btn inline-flex items-center font-semibold", s.btn, className)}
    >
      <BaleLogo size={s.logo} />
      {showLabel && <span>{label}</span>}
    </a>
  );
}
