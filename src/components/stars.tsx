function generateStarShadows(count: number, maxX: number, maxY: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

const smallStars = generateStarShadows(200, 2000, 2000);
const mediumStars = generateStarShadows(100, 2000, 2000);
const largeStars = generateStarShadows(50, 2000, 2000);

export function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute h-[1px] w-[1px] animate-[twinkle_4s_ease-in-out_infinite]"
        style={{ boxShadow: smallStars }}
      />
      <div
        className="absolute h-[2px] w-[2px] animate-[twinkle_6s_ease-in-out_infinite_1s]"
        style={{ boxShadow: mediumStars }}
      />
      <div
        className="absolute h-[3px] w-[3px] rounded-full animate-[twinkle_8s_ease-in-out_infinite_2s]"
        style={{ boxShadow: largeStars }}
      />
    </div>
  );
}
