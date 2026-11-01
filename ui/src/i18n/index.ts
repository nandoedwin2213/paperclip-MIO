import i18n, { type InitOptions, type TOptions } from "i18next";
import { initReactI18next, useTranslation as useReactI18nextTranslation } from "react-i18next";

import { DEFAULT_LOCALE, i18nextResources, supportedLocales } from "./locales";

export const UI_LOCALES = ["es", "en"] as const;
export type UiLocale = (typeof UI_LOCALES)[number];
// Spanish is the product default; tests keep English so existing copy assertions hold.
export const PREFERRED_LOCALE: UiLocale = import.meta.env?.MODE === "test" ? "en" : "es";
const LOCALE_STORAGE_KEY = "galeno.locale";

function readStoredLocale(): UiLocale {
  try {
    const stored = globalThis.localStorage?.getItem(LOCALE_STORAGE_KEY);
    if (stored && (UI_LOCALES as readonly string[]).includes(stored)) return stored as UiLocale;
  } catch {
    // Storage can be unavailable (private mode, tests); fall back to the preferred locale.
  }
  return PREFERRED_LOCALE;
}

export function setUiLocale(locale: UiLocale) {
  try {
    globalThis.localStorage?.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore storage failures; the in-memory language still switches.
  }
  if (typeof document !== "undefined") document.documentElement.lang = locale;
  void i18n.changeLanguage(locale);
}

const i18nextOptions: InitOptions = {
  resources: i18nextResources,
  lng: readStoredLocale(),
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: supportedLocales,
  defaultNS: "translation",
  interpolation: { escapeValue: false },
  returnObjects: false,
  initAsync: false,
};

void i18n.use(initReactI18next).init(i18nextOptions).catch((error: unknown) => {
  console.error("Failed to initialize i18next", error);
});

export function t(key: string, options: TOptions = {}) {
  return i18n.t(key, options);
}

export const useTranslation = useReactI18nextTranslation;
export { i18n };
