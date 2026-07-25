export const SITE_LANGUAGES = [
  { code: "en", label: "English", native: "English" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "fr", label: "French", native: "Français" },
  { code: "es", label: "Spanish", native: "Español" },
  { code: "pt", label: "Portuguese", native: "Português" },
  { code: "ru", label: "Russian", native: "Русский" },
  { code: "pl", label: "Polish", native: "Polski" },
  { code: "tr", label: "Turkish", native: "Türkçe" },
  { code: "zh-CN", label: "Chinese", native: "中文" },
  { code: "ja", label: "Japanese", native: "日本語" },
  { code: "ar", label: "Arabic", native: "العربية" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
] as const;

export type SiteLanguageCode = (typeof SITE_LANGUAGES)[number]["code"];

export const DEFAULT_LANGUAGE: SiteLanguageCode = "en";
export const LANGUAGE_STORAGE_KEY = "zadeyo-lang";

export function getLanguageByCode(code: string) {
  return SITE_LANGUAGES.find((lang) => lang.code === code) ?? SITE_LANGUAGES[0];
}
