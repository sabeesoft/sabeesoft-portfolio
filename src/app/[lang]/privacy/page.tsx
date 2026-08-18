import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LegalPage, LegalSection } from "@/components/legal-page";
import { ObfuscatedEmail } from "@/components/obfuscated-email";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.metadata.privacy.title,
    description: dict.metadata.privacy.description,
    robots: "index, follow",
  };
}

const linkClass =
  "text-foreground/65 underline decoration-white/25 underline-offset-2 transition-colors hover:text-teal-300";

export default async function PrivacyPolicyPage({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { privacy: t, common } = getDictionary(lang);

  return (
    <LegalPage
      lang={lang}
      backLabel={common.backToHome}
      eyebrow={t.eyebrow}
      title={t.title}
      updatedLabel={common.lastUpdated}
      updated={t.updated}
    >
      <LegalSection title={t.whoThisIs.title}>
        <p className="m-0">{t.whoThisIs.body}</p>
      </LegalSection>

      <LegalSection title={t.whatWeCollect.title}>
        <p className="m-0">{t.whatWeCollect.body1}</p>
        <p className="m-0">{t.whatWeCollect.body2}</p>
      </LegalSection>

      <LegalSection title={t.whyWeCollect.title}>
        <p className="m-0">{t.whyWeCollect.body}</p>
      </LegalSection>

      <LegalSection title={t.whatWeDontDo.title}>
        <p className="m-0">{t.whatWeDontDo.body}</p>
      </LegalSection>

      <LegalSection title={t.howLongWeKeep.title}>
        <p className="m-0">{t.howLongWeKeep.body}</p>
      </LegalSection>

      <LegalSection title={t.hosting.title}>
        <p className="m-0">{t.hosting.body}</p>
      </LegalSection>

      <LegalSection title={t.yourRights.title}>
        <p className="m-0">
          {t.yourRights.before}
          <ObfuscatedEmail className={linkClass} />
          {t.yourRights.after}
        </p>
      </LegalSection>

      <LegalSection title={t.changes.title}>
        <p className="m-0">{t.changes.body}</p>
      </LegalSection>

      <LegalSection title={t.contact.title}>
        <p className="m-0">
          {t.contact.before}
          <ObfuscatedEmail className={linkClass} />
        </p>
      </LegalSection>
    </LegalPage>
  );
}
