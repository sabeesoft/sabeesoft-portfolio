export function SectionDivider({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div aria-hidden="true" className="bg-background">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,196,201,0.75) 0%, rgba(0,196,201,0.18) 12%, rgba(255,255,255,0.06) 38%, rgba(255,255,255,0.06) 100%)",
        }}
      />
      <div className="reveal-on-scroll mx-auto flex h-14 max-w-[1240px] items-center gap-3 px-5 lg:h-[76px] lg:gap-5 lg:px-12">
        <span className="font-mono text-[11px] tracking-[0.14em] text-teal-300 lg:text-[11.5px]">
          {index}
        </span>
        <span className="font-mono text-[11px] tracking-[0.14em] text-foreground/40 uppercase lg:text-[11.5px] lg:tracking-[0.16em]">
          {label}
        </span>
        <span
          className="h-[7px] flex-1"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.15) 0 1px, transparent 1px 13px)",
          }}
        />
        <span className="flex items-center gap-1 lg:gap-[5px]">
          <span className="block h-[3px] w-[18px] rounded-sm bg-blue-700 lg:w-7" />
          <span className="block h-[3px] w-[9px] rounded-sm bg-blue-500 lg:w-3.5" />
          <span className="block h-[3px] w-6 rounded-sm bg-teal-300 lg:w-9" />
        </span>
      </div>
    </div>
  );
}
