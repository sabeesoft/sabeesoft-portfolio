import "server-only";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import en from "@/dictionaries/en";
import hu from "@/dictionaries/hu";

const dictionaries: Record<Locale, Dictionary> = { en, hu };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
