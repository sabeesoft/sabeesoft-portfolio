import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import {
  LOGLENS_GITHUB_URL,
  LOGLENS_MARKETPLACE_URL,
} from "@/components/loglens-page";

export function ProductsSection({
  dict,
  lang,
}: {
  dict: Dictionary["products"];
  lang: Locale;
}) {
  const { item } = dict;

  return (
    <section
      id="products"
      className="scroll-mt-[129px] px-5 py-14 lg:scroll-mt-[159px] lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-7 flex items-baseline gap-3.5 lg:mb-11 lg:flex-wrap lg:items-baseline lg:justify-between lg:gap-8">
          <div className="flex items-baseline gap-3.5 lg:gap-4.5">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.eyebrow}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.title}
            </h2>
          </div>
          <span className="hidden text-[15.5px] font-light text-foreground/45 lg:block">
            {dict.subtitle}
          </span>
        </div>

        <Link
          href={`/${lang}/loglens`}
          className="reveal-on-scroll group relative block overflow-hidden rounded-xl border border-white/10 bg-surface-dark px-6 py-8 transition-colors hover:border-teal-300/35 lg:px-10 lg:py-10"
          style={{
            backgroundImage:
              "radial-gradient(55% 90% at 100% 0%, rgba(0,196,201,0.10), transparent 70%)",
          }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="grid gap-3.5 lg:max-w-[62ch]">
              <div className="flex items-baseline gap-3">
                <h3 className="m-0 text-[24px] font-medium tracking-[-0.02em] text-white lg:text-[28px]">
                  {item.name}
                </h3>
                <span className="font-mono text-[14px] text-teal-300 lg:text-[15px]">
                  {item.tagline}
                </span>
              </div>
              <p className="m-0 text-[15.5px] leading-[1.6] font-light text-foreground/60 lg:text-base">
                {item.body}
              </p>
              <div className="flex flex-wrap gap-[7px] pt-1 font-mono text-[11.5px] text-foreground/45 lg:text-xs">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/12 px-2.5 py-[5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 border-b border-teal-300/45 pb-[3px] text-[15.5px] text-foreground/80 transition-colors group-hover:text-teal-300">
              {item.cta}
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </div>
        </Link>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12.5px] text-foreground/40 lg:text-[13px]">
          <a
            href={LOGLENS_MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-300"
          >
            VS Code Marketplace
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
          <a
            href={LOGLENS_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-300"
          >
            GitHub
            <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
