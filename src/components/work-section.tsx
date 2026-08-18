import { ArrowUpRight } from "lucide-react";
import { techStack } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

export function WorkSection({ dict }: { dict: Dictionary["work"] }) {
  return (
    <section
      id="work"
      className="scroll-mt-[129px] border-b border-white/6 bg-surface-dark px-5 py-14 lg:scroll-mt-[159px] lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-3 flex items-baseline gap-3.5 lg:mb-0 lg:flex-wrap lg:items-end lg:justify-between lg:gap-10">
          <div className="grid gap-1 lg:gap-[18px]">
            <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
              <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
                {dict.eyebrow}
              </span>
              <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
                {dict.title}
              </h2>
            </div>
            <p className="hidden max-w-[52ch] text-[16.5px] leading-[1.6] font-light text-foreground/50 lg:block">
              {dict.subtitleDesktop}
            </p>
          </div>
          <a
            href="#contact"
            className="hidden items-center gap-2 border-b border-teal-300/45 pb-[3px] text-[15.5px] text-foreground/70 transition-colors hover:text-teal-300 lg:inline-flex"
          >
            {dict.cta}
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
        <p className="mb-6 text-[16px] leading-[1.6] font-light text-foreground/50 lg:hidden">
          {dict.subtitleMobile}
        </p>

        <div className="grid gap-px bg-white/7 lg:grid-cols-3">
          {dict.caseStudies.map((c) => (
            <div
              key={c.title}
              className="reveal-on-scroll grid gap-3.5 bg-surface-dark py-[26px] transition-colors lg:gap-[18px] lg:px-8 lg:py-[34px] lg:pb-9 lg:hover:bg-[#0D141A]"
            >
              <div className="flex items-center justify-between gap-3.5">
                <span className="font-mono text-[10.5px] tracking-[0.12em] text-foreground/35 uppercase lg:text-[11px]">
                  {c.sector}
                </span>
                <span className="font-mono text-[10.5px] text-foreground/28 lg:text-[11px]">
                  {c.year}
                </span>
              </div>
              <h3 className="m-0 text-[19px] leading-[1.3] font-medium tracking-[-0.015em] text-white lg:text-xl">
                {c.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] font-light text-foreground/55">
                {c.body}
              </p>
              <div className="flex items-baseline gap-2.5 pt-1.5">
                <span className="font-mono text-[23px] tracking-[-0.03em] text-teal-300 lg:text-[26px]">
                  {c.metric}
                </span>
                <span className="text-sm font-light text-foreground/50 lg:text-[14.5px]">
                  {c.metricLabel}
                </span>
              </div>
              <div className="flex flex-wrap gap-[7px] pt-1 font-mono text-[11.5px] text-foreground/45 lg:text-xs">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/12 px-2.5 py-[5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-6 flex min-h-11 items-center justify-between gap-3 border-t border-white/7 py-4 text-[15.5px] text-foreground/72 lg:hidden"
        >
          {dict.cta}
          <ArrowUpRight size={17} strokeWidth={2} className="text-teal-300" />
        </a>

        <div className="mt-3.5 grid grid-cols-2 gap-px bg-white/7 lg:mt-11 lg:grid-cols-4">
          {dict.stats.map((stat) => (
            <div key={stat.label} className="reveal-on-scroll grid gap-1.5 bg-surface-dark px-4 py-[18px] lg:gap-1.5 lg:px-[26px] lg:py-6">
              <span className="font-mono text-[18px] tracking-[-0.02em] text-teal-300 lg:text-xl">
                {stat.value}
              </span>
              <span className="text-[13.5px] leading-[1.4] font-light text-foreground/50 lg:text-[14.5px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-2 border-t border-white/7 pt-5 lg:mt-12 lg:flex lg:items-baseline lg:gap-3.5 lg:pt-[26px]">
          <span className="text-sm font-light text-foreground/38">
            {dict.techStackLabel}
          </span>
          <span className="font-mono text-[12.5px] leading-[1.8] text-foreground/50 lg:text-[13.5px] lg:leading-[1.7]">
            {techStack.join(" · ")}
          </span>
        </div>
      </div>
    </section>
  );
}
