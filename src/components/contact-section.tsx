"use client";

import { useState, type FormEvent } from "react";
import {
  Clock,
  FileCheck,
  GitBranch,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import { ObfuscatedEmail } from "./obfuscated-email";

const trustIcons = [Clock, FileCheck, GitBranch];

export function ContactSection({ dict }: { dict: Dictionary["contact"] }) {
  const [kind, setKind] = useState(dict.form.kinds[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    (document.activeElement as HTMLElement | null)?.blur();
    setSent(true);
  }

  function reset() {
    (document.activeElement as HTMLElement | null)?.blur();
    setSent(false);
    setName("");
    setEmail("");
    setBrief("");
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-[129px] px-5 py-14 lg:scroll-mt-[159px] lg:px-12 lg:py-28"
      style={{
        background: "linear-gradient(150deg, #03293F 0%, #004D7F 55%, #0A7E93 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 88% 12%, rgba(0,196,201,0.32), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1240px] gap-9 lg:grid-cols-[1fr_0.92fr] lg:items-start lg:gap-20">
        <div className="grid gap-4 lg:gap-[30px]">
          <div className="flex items-baseline gap-3.5 lg:gap-[18px]">
            <span className="font-mono text-[11.5px] text-[#8FE7EA] lg:text-xs">
              {dict.eyebrow}
            </span>
            <span className="font-mono text-[11.5px] tracking-[0.14em] text-white/60 uppercase lg:text-xs">
              {dict.label}
            </span>
          </div>
          <h2 className="m-0 text-[38px] leading-[1.04] font-semibold tracking-[-0.032em] text-balance text-white lg:max-w-[16ch] lg:text-[58px] lg:leading-[1.02] lg:tracking-[-0.035em]">
            {dict.title}
          </h2>
          <p className="m-0 text-[17px] leading-[1.55] font-light text-white/74 lg:max-w-[44ch] lg:text-[19px]">
            {dict.paragraph}
          </p>
          <div className="grid gap-3">
            {dict.trustItems.map((label, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={label}
                  className="flex items-center gap-[11px] text-[15px] text-white/82 lg:gap-3 lg:text-[15.5px]"
                >
                  <Icon size={16} strokeWidth={1.75} className="text-[#8FE7EA]" />
                  {label}
                </div>
              );
            })}
          </div>

          <div className="hidden gap-2 pt-1 font-mono text-[13.5px] lg:flex lg:items-center lg:gap-6">
            <ObfuscatedEmail className="border-b border-white/35 pb-0.5 text-white transition-colors hover:text-[#8FE7EA]" />
            <span className="text-white/50">{dict.location}</span>
          </div>
        </div>

        <div className="rounded-xl border border-white/16 bg-[#041A28]/42 p-6 backdrop-blur-sm lg:p-8">
          <div className="grid">
            <div
              className={`col-start-1 row-start-1 grid self-start gap-3.5 justify-items-start py-6 transition-opacity duration-300 lg:gap-4 ${
                sent ? "opacity-100" : "invisible opacity-0"
              }`}
              aria-hidden={!sent}
            >
              <CheckCircle2 size={28} strokeWidth={1.5} className="text-[#8FE7EA] lg:h-[30px] lg:w-[30px]" />
              <div className="text-[22px] font-medium tracking-[-0.02em] text-white lg:text-2xl">
                {dict.form.success.title}
              </div>
              <div className="text-[15.5px] leading-[1.55] font-light text-white/72 lg:text-base">
                {dict.form.success.body}
              </div>
              <button
                type="button"
                onClick={reset}
                tabIndex={sent ? 0 : -1}
                className="mt-1 min-h-11 rounded-md border border-white/30 bg-transparent px-4.5 text-[15px] text-white transition-colors hover:border-[#8FE7EA] hover:text-[#8FE7EA]"
              >
                {dict.form.success.reset}
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              aria-hidden={sent}
              className={`col-start-1 row-start-1 grid self-start gap-4.5 transition-opacity duration-300 lg:gap-[22px] ${
                sent ? "invisible opacity-0" : "opacity-100"
              }`}
            >
              <div className="grid gap-2">
                <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                  {dict.form.kindLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {dict.form.kinds.map((label) => {
                    const on = kind === label;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setKind(label)}
                        className={`min-h-11 rounded-full px-4 text-sm transition-colors ${
                          on
                            ? "border border-white bg-white font-medium text-blue-700"
                            : "border border-white/22 bg-white/6 text-white/80"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-2 lg:gap-4">
                <div className="grid gap-2">
                  <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                    {dict.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={dict.form.namePlaceholder}
                    className="min-h-12 w-full rounded-md border border-white/18 bg-black/22 px-3.5 text-base text-white outline-none focus:border-teal-300"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                    {dict.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.form.emailPlaceholder}
                    className="min-h-12 w-full rounded-md border border-white/18 bg-black/22 px-3.5 text-base text-white outline-none focus:border-teal-300"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                  {dict.form.briefLabel}
                </label>
                <textarea
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder={dict.form.briefPlaceholder}
                  className="w-full resize-y rounded-md border border-white/18 bg-black/22 px-3.5 py-3.5 text-base leading-[1.5] text-white outline-none focus:border-teal-300"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-5">
                <button
                  type="submit"
                  className="flex min-h-13 items-center justify-center gap-2.5 rounded-md bg-white px-6.5 text-base font-medium text-blue-700 transition-colors hover:bg-teal-300 hover:text-[#06304E] lg:inline-flex lg:min-h-0 lg:py-3.5"
                >
                  {dict.form.submit}
                  <ArrowUpRight size={17} strokeWidth={2} />
                </button>
                <span className="text-center text-[13px] font-light text-white/50">
                  {dict.form.note}
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="grid gap-2 pt-1 font-mono text-[13.5px] lg:hidden">
          <ObfuscatedEmail className="justify-self-start border-b border-white/35 pb-0.5 text-white" />
          <span className="text-white/50">{dict.location}</span>
        </div>
      </div>
    </section>
  );
}
