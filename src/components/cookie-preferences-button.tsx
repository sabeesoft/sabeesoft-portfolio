"use client";

import { clearStoredConsent } from "@/lib/cookie-consent";

export function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => clearStoredConsent()}
      className="transition-colors hover:text-teal-300"
    >
      {label}
    </button>
  );
}
