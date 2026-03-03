import { translations, type Locale } from "./translations";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "fr", "pl", "br"];

// Shared regex for stripping locale prefixes from paths
const localePrefix = /^\/(en|fr|pl|br)/;
// Shared regex for stripping locale prefixes from content IDs
export const localePrefixSlash = /^(en|fr|pl|br)\//;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Locale): string {
  const cleanPath = path.replace(localePrefix, "") || "/";
  if (lang === defaultLocale) return cleanPath;
  return `/${lang}${cleanPath === "/" ? "" : cleanPath}`;
}

export function stripLocalePrefix(pathname: string): string {
  return pathname.replace(localePrefix, "") || "/";
}

export function getDateLocale(lang: Locale): string {
  const map: Record<Locale, string> = {
    en: "en-GB",
    fr: "fr-FR",
    pl: "pl-PL",
    br: "br-FR",
  };
  return map[lang];
}

export function getOgLocale(lang: Locale): string {
  const map: Record<Locale, string> = {
    en: "en_GB",
    fr: "fr_FR",
    pl: "pl_PL",
    br: "br_FR",
  };
  return map[lang];
}

export function getBlogPath(lang: Locale): string {
  return lang === defaultLocale ? "/blog" : `/${lang}/blog`;
}
