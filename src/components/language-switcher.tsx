"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function LanguageSwitcher({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  const pathname = usePathname();

  function targetPath(locale: Locale) {
    const rest = pathname.replace(`/${lang}`, "") || "";
    return `/${locale}${rest}`;
  }

  return (
    <div
      aria-label={label}
      className="flex items-center gap-0.5 rounded-md border border-white/12 p-0.5 font-mono text-[12px] uppercase"
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={targetPath(locale)}
          onClick={() => {
            document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}`;
          }}
          aria-current={locale === lang ? "true" : undefined}
          className={`rounded-[5px] px-2 py-1.5 transition-colors ${
            locale === lang
              ? "bg-white/12 text-white"
              : "text-foreground/50 hover:text-teal-300"
          }`}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
