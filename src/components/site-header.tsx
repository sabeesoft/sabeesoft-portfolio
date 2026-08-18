"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["header"];
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#work`, label: dict.nav.work },
    { href: `/${lang}#process`, label: dict.nav.process },
    { href: `/${lang}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/6 bg-background/[0.72] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:px-12 lg:py-5">
        <Link href={`/${lang}`} className="block justify-self-start">
          <Logo className="h-[22px] w-auto lg:h-[26px]" />
        </Link>

        <nav className="hidden items-center gap-9 text-[14.5px] lg:flex lg:justify-self-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/72 transition-colors hover:text-teal-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 lg:justify-self-end">
          <LanguageSwitcher lang={lang} label={dict.languageLabel} />
          <Link
            href={`/${lang}#contact`}
            className="hidden items-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-blue-700 to-teal-300 px-4 py-2.5 text-[14px] font-medium text-white transition-[filter] hover:brightness-110 lg:inline-flex lg:px-5 lg:text-[14.5px]"
          >
            {dict.cta}
          </Link>
          <button
            type="button"
            aria-label={dict.menuLabel}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/14 text-foreground lg:hidden"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} />
            ) : (
              <Menu size={20} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="grid gap-0.5 border-t border-white/7 bg-background px-5 pb-4 pt-2 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center border-b border-white/5 py-3.5 text-[17px] text-foreground/78 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={`/${lang}#contact`}
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-700 to-teal-300 px-4 text-[15px] font-medium text-white"
          >
            {dict.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
