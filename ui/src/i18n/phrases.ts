import i18n from "i18next";
import es from "./phrases.es.json";

const PHRASES: Record<string, Record<string, string>> = { es };

/** Translates a literal English UI phrase for the active locale; unknown phrases fall back to English. */
export function tx(english: string): string {
  return PHRASES[i18n.language]?.[english] ?? english;
}
