export function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/lockup/sabeesoft-lockup-horizontal-dark.svg"
      alt="Sabeesoft"
      className={className}
    />
  );
}
