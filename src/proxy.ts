import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";

const LOCALE_COOKIE = "NEXT_LOCALE";

function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, qValue] = part.trim().split(";q=");
      return { tag: tag.split("-")[0].toLowerCase(), q: qValue ? Number(qValue) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const match = preferred.find((entry) => isLocale(entry.tag));
  return match ? (match.tag as Locale) : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : localeFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|brand|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
