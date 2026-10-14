import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Download,
  Filter,
  Globe,
  Search,
  ShieldCheck,
  Table2,
  Terminal,
  Waypoints,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export const LOGLENS_MARKETPLACE_URL =
  "https://marketplace.visualstudio.com/items?itemName=sabeesoft.log-lens";
export const LOGLENS_GITHUB_URL = "https://github.com/sabeesoft/log-lens";

const SCREENSHOTS = [
  "/loglens/shot-search.webp",
  "/loglens/shot-query.webp",
  "/loglens/shot-details.webp",
];

const surfaceIcons: LucideIcon[] = [Code2, Globe, Download];
const featureIcons: LucideIcon[] = [
  Search,
  Terminal,
  BarChart3,
  Table2,
  Filter,
  Waypoints,
];

function MarketplaceButton({ label }: { label: string }) {
  return (
    <a
      href={LOGLENS_MARKETPLACE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-700 to-teal-300 px-5 text-[14.5px] font-medium text-white transition-[filter] hover:brightness-110"
    >
      {label}
      <ArrowUpRight size={16} strokeWidth={2} />
    </a>
  );
}

function GithubButton({ label }: { label: string }) {
  return (
    <a
      href={LOGLENS_GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/14 px-5 text-[14.5px] text-foreground/80 transition-colors hover:border-teal-300/45 hover:text-teal-300"
    >
      {label}
      <ArrowUpRight size={16} strokeWidth={2} />
    </a>
  );
}

export function LogLensPage({
  lang,
  backLabel,
  dict,
}: {
  lang: Locale;
  backLabel: string;
  dict: Dictionary["loglens"];
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

      {/* Hero */}
      <section className="relative mx-auto max-w-[1240px] px-5 pt-12 pb-14 lg:px-12 lg:pt-20 lg:pb-24">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 text-[14px] text-foreground/50 transition-colors hover:text-teal-300"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          {backLabel}
        </Link>

        <div className="mt-8 max-w-[760px] lg:mt-12">
          <span className="block font-mono text-[11px] tracking-[0.14em] text-teal-300 uppercase lg:text-[11.5px]">
            {dict.eyebrow}
          </span>
          <h1 className="m-0 mt-4 text-[40px] leading-[1.05] font-semibold tracking-[-0.03em] text-white lg:text-[62px]">
            {dict.title}
          </h1>
          <p className="m-0 mt-3 text-[22px] font-medium tracking-[-0.02em] text-teal-300 lg:text-[27px]">
            {dict.tagline}
          </p>
          <p className="mt-6 max-w-[62ch] text-[16.5px] leading-[1.65] font-light text-foreground/60 lg:text-[17.5px]">
            {dict.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <MarketplaceButton label={dict.ctaMarketplace} />
            <GithubButton label={dict.ctaGithub} />
          </div>
        </div>

        <figure className="m-0 mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-dark shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/loglens/demo.gif"
              alt={dict.screenshotAlt}
              width={960}
              height={540}
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-center font-mono text-[12px] text-foreground/40 lg:text-[12.5px]">
            {dict.screenshotCaption}
          </figcaption>
        </figure>
      </section>

      {/* Surfaces */}
      <section className="relative border-t border-white/6 bg-surface-dark px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.surfacesLabel}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.surfacesTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-px bg-white/7 lg:mt-11 lg:grid-cols-3">
            {dict.surfaces.map((surface, i) => {
              const Icon = surfaceIcons[i] ?? Code2;
              return (
                <div
                  key={surface.name}
                  className="grid content-start gap-3.5 bg-surface-dark py-[26px] lg:gap-[18px] lg:px-8 lg:py-[34px]"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className="text-teal-300"
                    aria-hidden="true"
                  />
                  <h3 className="m-0 text-[19px] leading-[1.3] font-medium tracking-[-0.015em] text-white lg:text-xl">
                    {surface.name}
                  </h3>
                  <p className="m-0 text-[15.5px] leading-[1.6] font-light text-foreground/55">
                    {surface.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-white/6 px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.featuresLabel}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.featuresTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-px bg-white/7 lg:mt-11 lg:grid-cols-3">
            {dict.features.map((feature, i) => {
              const Icon = featureIcons[i] ?? Search;
              return (
                <div
                  key={feature.title}
                  className="grid content-start gap-3.5 bg-surface-dark py-[26px] transition-colors lg:gap-4 lg:px-8 lg:py-[34px] lg:hover:bg-[#0D141A]"
                >
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className="text-teal-300"
                    aria-hidden="true"
                  />
                  <h3 className="m-0 text-[18px] leading-[1.3] font-medium tracking-[-0.015em] text-white lg:text-[19px]">
                    {feature.title}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.6] font-light text-foreground/55">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="relative border-t border-white/6 bg-surface-dark px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.screenshots.label}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.screenshots.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-11 lg:grid-cols-3 lg:gap-6">
            {SCREENSHOTS.map((src, i) => (
              <figure key={src} className="m-0">
                <div className="overflow-hidden rounded-lg border border-white/10 bg-background">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={dict.screenshots.items[i]?.caption ?? ""}
                    width={960}
                    height={540}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2.5 font-mono text-[12px] text-foreground/40 lg:text-[12.5px]">
                  {dict.screenshots.items[i]?.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="relative border-t border-white/6 px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.installation.label}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.installation.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-px bg-white/7 lg:mt-11 lg:grid-cols-3">
            {dict.installation.steps.map((step, i) => (
              <div
                key={step.title}
                className="grid content-start gap-3 bg-surface-dark py-[26px] lg:gap-3.5 lg:px-8 lg:py-[34px]"
              >
                <span className="font-mono text-[13px] text-teal-300 lg:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 text-[18px] leading-[1.3] font-medium tracking-[-0.015em] text-white lg:text-[19px]">
                  {step.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] font-light text-foreground/55">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 lg:mt-8">
            <MarketplaceButton label={dict.ctaMarketplace} />
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="relative border-t border-white/6 bg-surface-dark px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div
            className="relative overflow-hidden rounded-xl border border-teal-300/20 px-6 py-9 lg:px-12 lg:py-12"
            style={{
              background:
                "radial-gradient(60% 80% at 100% 0%, rgba(0,196,201,0.10), transparent 70%)",
            }}
          >
            <div className="grid gap-9 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="grid content-start gap-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.75}
                    className="text-teal-300"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10.5px] tracking-[0.12em] text-teal-300 uppercase lg:text-[11px]">
                    {dict.privacy.label}
                  </span>
                </div>
                <h2 className="m-0 text-[25px] font-medium tracking-[-0.025em] text-white lg:text-[32px]">
                  {dict.privacy.title}
                </h2>
                <p className="m-0 max-w-[48ch] text-[15.5px] leading-[1.65] font-light text-foreground/60 lg:text-base">
                  {dict.privacy.body}
                </p>
              </div>

              <ul className="m-0 grid content-center gap-3.5 p-0">
                {dict.privacy.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-300/12 text-teal-300">
                      <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-[1.55] font-light text-foreground/70">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative border-t border-white/6 px-5 py-14 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-3">
            <h2 className="m-0 text-[26px] font-medium tracking-[-0.025em] text-white lg:text-[34px]">
              {dict.closing.title}
            </h2>
            <p className="m-0 max-w-[52ch] text-[16px] leading-[1.6] font-light text-foreground/55 lg:text-[17px]">
              {dict.closing.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <MarketplaceButton label={dict.ctaMarketplace} />
            <GithubButton label={dict.ctaGithub} />
          </div>
        </div>
      </section>
    </div>
  );
}
