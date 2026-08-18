import type { Dictionary } from "@/lib/i18n/types";

export function ProcessSection({ dict }: { dict: Dictionary["process"] }) {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1240px] scroll-mt-[129px] px-5 py-14 lg:scroll-mt-[159px] lg:px-12 lg:py-[120px]"
    >
      <div className="grid gap-9 lg:grid-cols-[1fr_1.25fr] lg:items-start lg:gap-[72px]">
        <div className="grid content-start gap-4 lg:gap-5">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-teal-300 lg:text-xs">
              {dict.eyebrow}
            </span>
            <h2 className="m-0 text-[28px] font-medium tracking-[-0.028em] text-white lg:text-4xl">
              {dict.title}
            </h2>
          </div>
          <p className="m-0 text-[16px] leading-[1.6] font-light text-foreground/50 lg:max-w-[34ch] lg:text-[16.5px]">
            {dict.subtitle}
          </p>

          <div className="mt-5 grid max-w-[320px]">
            {dict.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-baseline justify-between gap-4 border-t border-white/8 py-3.5"
              >
                <span className="text-[15px] font-light text-foreground/50">
                  {stat.label}
                </span>
                <span className="font-mono text-[14.5px] text-teal-300 lg:text-[15px]">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid">
          {dict.steps.map((step, index) => (
            <div
              key={step.number}
              className={`reveal-on-scroll grid grid-cols-[32px_1fr] gap-4 border-t border-white/8 py-[22px] lg:grid-cols-[40px_1fr] lg:gap-6 lg:py-7 ${
                index === dict.steps.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-[12.5px] text-teal-300 lg:text-[13px]">
                {step.number}
              </span>
              <div className="grid gap-1.5 lg:gap-2">
                <div className="text-lg font-medium text-white lg:text-xl">
                  {step.title}
                </div>
                <div className="text-[15.5px] leading-[1.55] font-light text-foreground/55 lg:text-base">
                  {step.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
