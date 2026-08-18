import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Hero } from "@/components/hero";
import { SectionDivider } from "@/components/section-divider";
import { ServicesSection } from "@/components/services-section";
import { WorkSection } from "@/components/work-section";
import { ProcessSection } from "@/components/process-section";
import { ContactSection } from "@/components/contact-section";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    robots: "index, follow",
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <SectionDivider index={dict.services.eyebrow} label={dict.sectionLabels.services} />
      <ServicesSection dict={dict.services} />
      <SectionDivider index={dict.work.eyebrow} label={dict.sectionLabels.work} />
      <WorkSection dict={dict.work} />
      <SectionDivider index={dict.process.eyebrow} label={dict.sectionLabels.process} />
      <ProcessSection dict={dict.process} />
      <SectionDivider index={dict.contact.eyebrow} label={dict.sectionLabels.contact} />
      <ContactSection dict={dict.contact} lang={lang} />
    </>
  );
}
