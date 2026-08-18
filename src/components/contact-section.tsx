"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import {
  Clock,
  FileCheck,
  GitBranch,
  CheckCircle2,
  ArrowUpRight,
  Loader2,
} from "lucide-react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { submitContactForm } from "@/lib/actions/contact";
import { initialContactFormState } from "@/lib/actions/contact-state";
import { ObfuscatedEmail } from "./obfuscated-email";

const trustIcons = [Clock, FileCheck, GitBranch];

export function ContactSection({
  dict,
  lang,
}: {
  dict: Dictionary["contact"];
  lang: Locale;
}) {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );
  const [kind, setKind] = useState(dict.form.kinds[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [dismissed, setDismissed] = useState(false);

  function handleSubmit() {
    setDismissed(false);
  }

  function reset() {
    (document.activeElement as HTMLElement | null)?.blur();
    setDismissed(true);
    setKind(dict.form.kinds[0]);
    setName("");
    setEmail("");
    setBrief("");
  }

  const sent = state.status === "success" && !dismissed;
  const errors = state.status === "error" ? state.errors : undefined;

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

        <div className="relative overflow-hidden rounded-xl border border-white/16 bg-[#041A28]/42 p-6 backdrop-blur-sm lg:p-8">
          <div
            className="absolute inset-x-0 top-0 h-[2px] overflow-hidden bg-white/10"
            aria-hidden="true"
          >
            {pending && (
              <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-[#8FE7EA] to-transparent animate-progress-bar" />
            )}
          </div>
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
              action={formAction}
              onSubmit={handleSubmit}
              aria-hidden={sent}
              inert={pending || undefined}
              className={`col-start-1 row-start-1 grid self-start gap-4.5 transition-[opacity,filter] duration-300 lg:gap-[22px] ${
                sent
                  ? "invisible opacity-0"
                  : pending
                    ? "opacity-70 saturate-50"
                    : "opacity-100"
              }`}
            >
              <input type="hidden" name="locale" value={lang} />
              <input type="hidden" name="kind" value={kind} />
              <input type="hidden" name="startedAt" value={startedAt} />
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute h-0 w-0 opacity-0"
                style={{ left: "-9999px" }}
              />

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
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={dict.form.namePlaceholder}
                    className="min-h-12 w-full rounded-md border border-white/18 bg-black/22 px-3.5 text-base text-white outline-none focus:border-teal-300"
                  />
                  {errors?.name && (
                    <span className="text-[13px] text-red-300">{errors.name}</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                    {dict.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={dict.form.emailPlaceholder}
                    className="min-h-12 w-full rounded-md border border-white/18 bg-black/22 px-3.5 text-base text-white outline-none focus:border-teal-300"
                  />
                  {errors?.email && (
                    <span className="text-[13px] text-red-300">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <label className="font-mono text-[10.5px] tracking-[0.1em] text-white/55 uppercase lg:text-[11px]">
                  {dict.form.briefLabel}
                </label>
                <textarea
                  name="brief"
                  required
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder={dict.form.briefPlaceholder}
                  className="w-full resize-y rounded-md border border-white/18 bg-black/22 px-3.5 py-3.5 text-base leading-[1.5] text-white outline-none focus:border-teal-300"
                />
                {errors?.brief && (
                  <span className="text-[13px] text-red-300">{errors.brief}</span>
                )}
              </div>

              <div className="grid gap-1.5">
                <label className="flex items-start gap-2.5 text-[13px] leading-[1.5] font-light text-white/70">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-teal-300"
                  />
                  <span>
                    {dict.form.consent.before}
                    <Link
                      href={`/${lang}/privacy`}
                      className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-teal-300"
                    >
                      {dict.form.consent.linkLabel}
                    </Link>
                    {dict.form.consent.after}
                  </span>
                </label>
                {errors?.consent && (
                  <span className="text-[13px] text-red-300">{errors.consent}</span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-5">
                <button
                  type="submit"
                  disabled={pending}
                  className="flex min-h-13 items-center justify-center gap-2.5 rounded-md bg-white px-6.5 text-base font-medium text-blue-700 transition-colors hover:bg-teal-300 hover:text-[#06304E] disabled:opacity-60 lg:inline-flex lg:min-h-0 lg:py-3.5"
                >
                  {pending ? dict.form.submitting : dict.form.submit}
                  {pending ? (
                    <Loader2 size={17} strokeWidth={2} className="animate-spin" />
                  ) : (
                    <ArrowUpRight size={17} strokeWidth={2} />
                  )}
                </button>
                <span className="text-center text-[13px] font-light text-white/50">
                  {dict.form.note}
                </span>
              </div>
              {errors?.form && (
                <span className="text-[13px] text-red-300">{errors.form}</span>
              )}
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
