import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LogLensPage } from "@/components/loglens-page";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/loglens">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const ogImage = {
    url: "https://sabeesoft.com/loglens/hero.png",
    width: 1280,
    height: 640,
    alt: dict.metadata.loglens.title,
  };

  return {
    title: dict.metadata.loglens.title,
    description: dict.metadata.loglens.description,
    robots: "index, follow",
    openGraph: {
      title: dict.metadata.loglens.title,
      description: dict.metadata.loglens.description,
      url: `https://sabeesoft.com/${lang}/loglens`,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.loglens.title,
      description: dict.metadata.loglens.description,
      images: [ogImage.url],
    },
  };
}

export default async function LogLens({
  params,
}: PageProps<"/[lang]/loglens">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { loglens, common } = getDictionary(lang);

  return (
    <LogLensPage lang={lang} backLabel={common.backToHome} dict={loglens} />
  );
}
