export type ConsentValue = "granted" | "denied";

const STORAGE_KEY = "sabeesoft-consent";
export const CONSENT_CHANGE_EVENT = "sabeesoft-consent-change";

export function getStoredConsent(): ConsentValue | null {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

function deleteAnalyticsCookies() {
  for (const name of document.cookie.split(";").map((part) => part.split("=")[0].trim())) {
    if (name === "_ga" || name.startsWith("_ga_")) {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
}

export function setStoredConsent(value: ConsentValue) {
  localStorage.setItem(STORAGE_KEY, value);
  if (value === "denied") deleteAnalyticsCookies();
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
}

export function clearStoredConsent() {
  localStorage.removeItem(STORAGE_KEY);
  deleteAnalyticsCookies();
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: null }));
}
