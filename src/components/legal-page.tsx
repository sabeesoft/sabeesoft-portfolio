import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";

export function LegalPage({
  lang,
  backLabel,
  eyebrow,
  title,
  updatedLabel,
  updated,
  children,
}: {
  lang: Locale;
  backLabel: string;
  eyebrow: string;
  title: string;
  updatedLabel: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 34% at 84% 0%, rgba(0,196,201,0.14), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[720px] px-5 pt-12 pb-20 lg:px-12 lg:pt-20 lg:pb-28">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-[14px] text-foreground/50 transition-colors hover:text-teal-300"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          {backLabel}
        </Link>

        <span className="mt-8 block font-mono text-[11px] tracking-[0.14em] text-teal-300 uppercase lg:text-[11.5px]">
          {eyebrow}
        </span>
        <h1 className="m-0 mt-3 text-[34px] font-semibold tracking-[-0.03em] text-white lg:text-[46px]">
          {title}
        </h1>
        <p className="mt-3 font-mono text-[12.5px] text-foreground/40">
          {updatedLabel}: {updated}
        </p>

        <div className="mt-10 grid gap-8 border-t border-white/8 pt-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-3">
      <h2 className="m-0 text-[19px] font-medium tracking-[-0.015em] text-white lg:text-[21px]">
        {title}
      </h2>
      <div className="grid gap-3 text-[15.5px] leading-[1.65] font-light text-foreground/65 lg:text-base">
        {children}
      </div>
    </section>
  );
}
