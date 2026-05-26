import Link from "next/link";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import SiteLogo from "@/components/ui/SiteLogo";
import { BRAND, CONTACT, LINKS, NAV_LINKS } from "@/lib/constants";
import { SERVICES_CATALOG } from "@/lib/services-catalog";

export default function Footer() {
  const footerServices = SERVICES_CATALOG.filter((service) =>
    ["engine-repair", "periodic", "oil-change", "transmission", "diagnostics"].includes(service.slug)
  );

  return (
    <footer className="bg-card/50 border-t border-border mt-8 pt-12 pb-24 md:pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <SiteLogo size={40} className="mb-4" variant="gold" showName={false} nameClassName="text-gold" />
            <p className="type-body-sm text-muted-foreground mb-4">
              {BRAND.tagline}. بیش از ۱۰ سال تجربه در تعمیر و نگهداری خودرو.
            </p>
            <div className="flex gap-4">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="اینستاگرام"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="text-muted-foreground hover:text-gold transition-colors"
                aria-label="تماس"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="type-h4 mb-4 text-foreground">دسترسی سریع</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  رزرو آنلاین
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="type-h4 mb-4 text-foreground">خدمات</h3>
            <ul className="space-y-2 type-body-sm text-muted-foreground">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-h4 mb-4 text-foreground">تماس</h3>
            <ul className="space-y-3 type-body-sm">
              <li className="flex gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href={`tel:${CONTACT.phone}`} className="hover:text-foreground">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-foreground"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-muted-foreground pt-1">
                <p>{CONTACT.hours}</p>
                <p>{CONTACT.friday}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}
