import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";

const codeLines: React.ReactNode[] = [
  <>
    <span className="text-teal-300">export const</span> ship ={" "}
    <span className="text-teal-300">async</span> (idea) =&gt; {"{"}
  </>,
  <>
    {"  "}
    <span className="text-[#4FA9CF]">const</span> spec{"  "}={" "}
    <span className="text-teal-300">await</span> discover(idea)
  </>,
  <>
    {"  "}
    <span className="text-[#4FA9CF]">const</span> build = ship.fast(spec,{" "}
    {"{"}
  </>,
  <>
    {"    "}stack: [<span className="text-[#8CD9A8]">&apos;react&apos;</span>
    , <span className="text-[#8CD9A8]">&apos;node&apos;</span>,{" "}
    <span className="text-[#8CD9A8]">&apos;aws&apos;</span>],
  </>,
  <>
    {"    "}tests: <span className="text-teal-300">true</span>,
  </>,
  <>{"  "}{"}"}{")"}</>,
  <>
    {"  "}
    <span className="text-teal-300">return</span> build.
    <span className="text-white">deploy</span>()
  </>,
  <>{"}"}</>,
];

const codeLineDurations = [900, 1050, 1200, 1350, 1500, 1650, 1800, 1950];

export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="relative scroll-mt-[73px] lg:scroll-mt-[83px]">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 gap-[26px] px-5 pt-[52px] pb-[60px] lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-[72px] lg:px-12 lg:pt-[132px] lg:pb-[150px]">
        <div className="grid gap-[26px] lg:gap-[34px]">
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-teal-300/28 bg-teal-300/6 py-[6px] pr-[13px] pl-[9px] font-mono text-[10.5px] tracking-[0.1em] text-[#5FD8DB] uppercase lg:py-[7px] lg:pr-[14px] lg:pl-[10px] lg:text-[11.5px]">
            <span className="animate-dot block h-[5px] w-[5px] rounded-full bg-teal-300 lg:h-[6px] lg:w-[6px]" />
            {dict.badge}
          </div>

          <h1 className="m-0 text-[44px] leading-[1.0] font-semibold tracking-[-0.035em] text-balance text-white lg:text-[78px] lg:leading-[0.97] lg:tracking-[-0.04em]">
            <span className="animate-rise block">{dict.titleLine1}</span>
            <span
              className="animate-sheen block bg-[length:200%_100%] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #4FA9CF, #00C4C9, #4FA9CF)",
              }}
            >
              {dict.titleLine2}
            </span>
          </h1>

          <p className="m-0 max-w-[46ch] text-[17px] leading-[1.55] font-light text-foreground/60 lg:text-[20px]">
            {dict.paragraph}
          </p>

          <div className="grid gap-3 lg:flex lg:flex-wrap lg:items-center lg:gap-[26px]">
            <a
              href="#contact"
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-blue-700 to-teal-300 px-6 text-[16px] font-medium text-white transition-[filter] hover:brightness-110 lg:inline-flex lg:min-h-0 lg:px-7 lg:py-[15px]"
            >
              {dict.ctaPrimary}
              <ArrowRight size={17} strokeWidth={2} />
            </a>
            <a
              href="#services"
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-md border border-white/12 px-6 text-[16px] text-foreground/70 transition-colors hover:border-teal-300/50 hover:text-teal-300 lg:inline-flex lg:min-h-0 lg:px-5 lg:py-[15px]"
            >
              {dict.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="rounded-xl p-px"
            style={{
              background:
                "linear-gradient(160deg, rgba(0,196,201,0.35), rgba(0,77,127,0.15) 45%, rgba(255,255,255,0.05))",
            }}
          >
            <div className="rounded-[11px] bg-[#0B1116] px-[18px] pt-[18px] pb-5 lg:px-[26px] lg:pt-6 lg:pb-[26px]">
              <div className="mb-4 flex items-center gap-2.5 lg:mb-5 lg:gap-3">
                <Image
                  src="/brand/logo/sabeesoft-mark-small-gradient.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="block lg:h-[17px] lg:w-[17px]"
                />
                <span className="font-mono text-[10.5px] text-white/34 lg:text-[11px]">
                  {dict.panel.filename}
                </span>
                <span className="animate-fade-in ml-auto font-mono text-[10px] text-[#5FD8DB] lg:text-[10.5px]">
                  {dict.panel.deployStatus}
                </span>
              </div>
              <div className="overflow-x-auto font-mono text-[11px] leading-[1.95] whitespace-pre text-white/72 lg:overflow-x-hidden lg:text-[clamp(10.5px,1.02vw,13.5px)] lg:leading-[2.05]">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className="animate-code-line"
                    style={{ animationDuration: `${codeLineDurations[index]}ms` }}
                  >
                    {line}
                    {index === codeLines.length - 1 && (
                      <span className="animate-caret ml-1.5 inline-block h-[1.05em] w-2 bg-teal-300 align-[-0.15em]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-[18px] border-t border-white/8 pt-[14px] font-mono text-[10.5px] text-white/40 lg:mt-[22px] lg:gap-7 lg:pt-[18px] lg:text-[11px]">
                {dict.panel.stats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
