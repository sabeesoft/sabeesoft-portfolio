import { serviceIcons } from "@/lib/content";
import type { Dictionary } from "@/lib/i18n/types";

export function ServicesSection({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section
      id="services"
      className="scroll-mt-[129px] px-5 py-14 lg:scroll-mt-[159px] lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-2 flex items-baseline gap-3.5 lg:mb-11 lg:flex-wrap lg:items-baseline lg:justify-between lg:gap-8">
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
        <p className="mb-7 text-[15.5px] font-light text-foreground/45 lg:hidden">
          {dict.subtitle}
        </p>

        <div className="grid gap-px bg-white/7 lg:grid-cols-4">
          {dict.items.map(({ id, title, body }) => {
            const Icon = serviceIcons[id];
            return (
              <div
                key={id}
                className="reveal-on-scroll grid grid-cols-[26px_1fr] items-start gap-4 bg-background py-[22px] transition-colors last:pb-1 lg:grid-cols-none lg:content-start lg:gap-3 lg:px-[26px] lg:py-7 lg:pb-[30px] lg:last:pb-[30px] lg:hover:bg-[#0C1319]"
              >
                <Icon size={22} strokeWidth={1.5} className="text-teal-300" />
                <div className="grid gap-[7px]">
                  <h3 className="m-0 text-lg font-medium tracking-[-0.015em] text-white">
                    {title}
                  </h3>
                  <p className="m-0 text-[15.5px] leading-[1.5] font-light text-foreground/50">
                    {body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
