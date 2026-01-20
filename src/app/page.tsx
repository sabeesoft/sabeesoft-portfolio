import { Stars } from "@/components/stars";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <Stars />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Sabeesoft
        </h1>
        <p className="text-lg text-zinc-400">Coming soon</p>
        <nav className="flex gap-6">
          <a
            href="https://github.com/sabeesoft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </main>
  );
}
