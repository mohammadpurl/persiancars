"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1 && e.pointerType !== "touch") return;
    updatePosition(e.clientX);
  };

  return (
    <SectionShell id="portfolio">
      <ScrollReveal>
        <SectionHeader
          label="نمونه کار"
          title="تغییر را با چشم خود ببینید"
          description="مقایسه قبل و بعد تعمیر بدنه و رنگ‌آمیزی در خودرو پرشین"
        />

        <div
          ref={containerRef}
          className="relative aspect-[16/10] w-full max-w-4xl mx-auto rounded-2xl overflow-hidden glass select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          role="slider"
          aria-label="مقایسه قبل و بعد"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <Image
            src="/images/car-persian-clinic.jpeg"
            alt="بعد از تعمیر — خودرو پرشین"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />

          <div
            className="absolute inset-y-0 start-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src="/images/car-persian-clinic.jpeg"
              alt="قبل از تعمیر — خودرو پرشین"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover brightness-75 contrast-125 saturate-50"
            />
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />
          </div>

          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg z-10"
            style={{
              insetInlineStart: `${position}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "h-10 w-10 rounded-full glass flex items-center justify-center"
              )}
            >
              <span className="text-white text-xs font-bold">↔</span>
            </div>
          </div>

          <span className="absolute top-4 start-4 glass-subtle px-3 py-1 text-xs font-medium">
            قبل
          </span>
          <span className="absolute top-4 end-4 glass-subtle px-3 py-1 text-xs font-medium">
            بعد
          </span>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}
