import Link from "next/link";
import { Logo } from "./logo";
import { ObfuscatedEmail } from "./obfuscated-email";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function SiteFooter({
  lang,
  dict,
  services,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
  services: Dictionary["services"]["items"];
}) {
  const studioLinks = [
    { href: `/${lang}#process`, label: dict.studioLinks.howWeWork },
    { href: `/${lang}#work`, label: dict.studioLinks.work },
    { href: `/${lang}#contact`, label: dict.studioLinks.startAProject },
  ];

  return (
    <footer className="border-t border-white/6 bg-background px-5 pt-11 pb-8 lg:px-12 lg:pt-[72px] lg:pb-0">
      <div className="mx-auto grid max-w-[1240px] gap-9 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-14">
        <div className="grid content-start gap-4 lg:gap-5">
          <Logo className="h-[22px] w-auto lg:h-6" />
          <p className="m-0 max-w-[32ch] text-[15px] leading-[1.6] font-light text-foreground/45 lg:text-[15.5px]">
            {dict.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-7 lg:contents">
          <div className="grid content-start gap-2.5 lg:gap-3.5">
            <div className="font-mono text-[10.5px] tracking-[0.12em] text-foreground/35 uppercase lg:text-[11px]">
              {dict.servicesHeading}
            </div>
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/${lang}#services`}
                className="text-[15px] text-foreground/62 transition-colors hover:text-teal-300"
              >
                {service.title}
              </Link>
            ))}
          </div>

          <div className="grid content-start gap-2.5 lg:gap-3.5">
            <div className="font-mono text-[10.5px] tracking-[0.12em] text-foreground/35 uppercase lg:text-[11px]">
              {dict.studioHeading}
            </div>
            {studioLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[15px] text-foreground/62 transition-colors hover:text-teal-300"
              >
                {link.label}
              </Link>
            ))}
            <ObfuscatedEmail
              label={dict.contactLinkLabel}
              className="text-[15px] text-foreground/62 transition-colors hover:text-teal-300 lg:hidden"
            />
          </div>
        </div>

        <div className="hidden content-start gap-3.5 lg:grid">
          <div className="font-mono text-[11px] tracking-[0.12em] text-foreground/35 uppercase">
            {dict.contactHeading}
          </div>
          <ObfuscatedEmail className="font-mono text-[13px] break-all text-foreground/62 transition-colors hover:text-teal-300" />
          <span className="text-[15px] font-light text-foreground/45">
            {dict.location}
          </span>
          <span className="text-[15px] font-light text-foreground/45">
            {dict.hours}
          </span>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1240px] flex-wrap items-center justify-between gap-4 border-t border-white/6 pt-[22px] pb-0 lg:mt-13 lg:pt-8 lg:pb-10">
        <span className="font-mono text-[11.5px] text-foreground/32 lg:text-xs">
          © {new Date().getFullYear()} Sabeesoft
        </span>
        <div className="flex gap-5 text-[13px] text-foreground/32 lg:gap-6.5">
          <Link href={`/${lang}/privacy`} className="transition-colors hover:text-teal-300">
            {dict.privacy}
          </Link>
          <Link href={`/${lang}/legal-notice`} className="transition-colors hover:text-teal-300">
            {dict.legalNotice}
          </Link>
        </div>
      </div>
    </footer>
  );
}
