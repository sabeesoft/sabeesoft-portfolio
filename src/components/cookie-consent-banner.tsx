"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_CHANGE_EVENT,
  getStoredConsent,
  setStoredConsent,
  type ConsentValue,
} from "@/lib/cookie-consent";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export function CookieConsentBanner({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["cookieConsent"];
}) {
  const [consent, setConsent] = useState<ConsentValue | null>("granted");

  useEffect(() => {
    setConsent(getStoredConsent());
    function onChange(event: Event) {
      setConsent((event as CustomEvent<ConsentValue | null>).detail ?? null);
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B1116] px-5 py-4 lg:px-12">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-3.5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <p className="m-0 max-w-[62ch] text-[14px] leading-[1.55] font-light text-foreground/68">
          {dict.message}{" "}
          <Link
            href={`/${lang}/privacy`}
            className="text-teal-300 underline decoration-teal-300/40 underline-offset-2 hover:decoration-teal-300"
          >
            {dict.privacyLink}
          </Link>
        </p>
        <div className="flex w-full shrink-0 gap-2.5 lg:w-auto">
          <button
            type="button"
            onClick={() => setStoredConsent("denied")}
            className="flex min-h-11 flex-1 items-center justify-center rounded-md border border-white/14 px-5 text-[14px] text-foreground/70 transition-colors hover:border-teal-300/50 hover:text-teal-300 lg:flex-none"
          >
            {dict.decline}
          </button>
          <button
            type="button"
            onClick={() => setStoredConsent("granted")}
            className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-gradient-to-r from-blue-700 to-teal-300 px-5 text-[14px] font-medium text-white transition-[filter] hover:brightness-110 lg:flex-none"
          >
            {dict.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
