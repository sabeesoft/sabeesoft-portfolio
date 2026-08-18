import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const SITE_URL = "https://sabeesoft.com";
const PATHS = ["", "/legal-notice", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, `${SITE_URL}/${altLocale}${path}`])
        ),
      },
    }))
  );
}
