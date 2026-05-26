import Image from "next/image";
import { cn } from "@/lib/utils";

type BaleLogoProps = {
  className?: string;
  size?: number;
};

export default function BaleLogo({ className, size = 28 }: BaleLogoProps) {
  return (
    <Image
      src="/images/Bale-Logo.svg"
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden
    />
  );
}
