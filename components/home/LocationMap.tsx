"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MapEmbed from "@/components/ui/MapEmbed";
import { CONTACT, LINKS } from "@/lib/constants";

export default function LocationMap() {
  const [useOsm, setUseOsm] = useState(false);

  return (
    <SectionShell id="location" className="bg-card/30">
      <ScrollReveal>
        <SectionHeader
          label="موقعیت"
          title="ما را به‌راحتی پیدا کنید"
          description={CONTACT.address}
          align="start"
        />
      </ScrollReveal>

      <div className="glass overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:min-h-[380px]">
        {/* ارتفاع صریح — h-full داخل aspect-auto روی دسکتاپ کار نمی‌کند */}
        <MapEmbed
          src={useOsm ? LINKS.openStreetMapEmbed : LINKS.googleMapsEmbed}
          className="h-[260px] sm:h-[300px] lg:min-h-[380px] lg:h-full"
        />

        <ScrollReveal delay={80}>
          <div className="p-6 md:p-8 flex flex-col justify-center gap-6 h-full">
            <div className="flex gap-3">
              <MapPin className="h-6 w-6 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">آدرس</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {CONTACT.address}
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">ساعات کاری</p>
              <p className="text-muted-foreground text-sm">{CONTACT.hours}</p>
              <p className="text-muted-foreground text-sm">{CONTACT.friday}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:bg-white/15 transition-colors w-full sm:w-auto"
              >
                <Navigation className="h-5 w-5 text-gold" />
                مسیریابی در گوگل
              </a>
              {!useOsm ? (
                <button
                  type="button"
                  onClick={() => setUseOsm(true)}
                  className="text-xs text-muted-foreground hover:text-gold transition-colors text-center sm:text-start"
                >
                  نقشه نمایش داده نمی‌شود؟ نمایش نقشه جایگزین
                </button>
              ) : null}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionShell>
  );
}
