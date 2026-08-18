import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { ObfuscatedEmail } from "@/components/obfuscated-email";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/legal-notice">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.metadata.legalNotice.title,
    description: dict.metadata.legalNotice.description,
    robots: "index, follow",
  };
}

const linkClass =
  "text-foreground/65 underline decoration-white/25 underline-offset-2 transition-colors hover:text-teal-300";

export default async function LegalNoticePage({
  params,
}: PageProps<"/[lang]/legal-notice">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { legalNotice: t, common } = getDictionary(lang);

  return (
    <LegalPage
      lang={lang}
      backLabel={common.backToHome}
      eyebrow={t.eyebrow}
      title={t.title}
      updatedLabel={common.lastUpdated}
      updated={t.updated}
    >
      <LegalSection title={t.operator.title}>
        <p className="m-0">{t.operator.body}</p>
      </LegalSection>

      <LegalSection title={t.copyright.title}>
        <p className="m-0">{t.copyright.body}</p>
      </LegalSection>

      <LegalSection title={t.trademarks.title}>
        <p className="m-0">{t.trademarks.body}</p>
      </LegalSection>

      <LegalSection title={t.noWarranty.title}>
        <p className="m-0">{t.noWarranty.body}</p>
      </LegalSection>

      <LegalSection title={t.liability.title}>
        <p className="m-0">{t.liability.body}</p>
      </LegalSection>

      <LegalSection title={t.governingLaw.title}>
        <p className="m-0">{t.governingLaw.body}</p>
      </LegalSection>

      <LegalSection title={t.contact.title}>
        <p className="m-0">
          <ObfuscatedEmail className={linkClass} />
          {t.contact.suffix}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
