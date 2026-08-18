import type { Viewport } from "next";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import "../globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080C10",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${outfit.variable} ${ibmPlexMono.variable} font-sans`}>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader lang={lang} dict={dict.header} />
          {children}
          <SiteFooter
            lang={lang}
            dict={dict.footer}
            services={dict.services.items}
            showCookiePreferences={Boolean(gaId)}
          />
        </div>
        {gaId && process.env.NODE_ENV === "production" && <Analytics gaId={gaId} />}
        {gaId && <CookieConsentBanner lang={lang} dict={dict.cookieConsent} />}
      </body>
    </html>
  );
}
