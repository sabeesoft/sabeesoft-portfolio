"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  CONSENT_CHANGE_EVENT,
  getStoredConsent,
  type ConsentValue,
} from "@/lib/cookie-consent";

export function Analytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    function onChange(event: Event) {
      setConsent((event as CustomEvent<ConsentValue | null>).detail ?? null);
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (consent !== "granted") return null;
  return <GoogleAnalytics gaId={gaId} />;
}
