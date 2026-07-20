import englishTranslations from '../locales/en.json';

export const supportedLanguages = ['en', 'nl'] as const;

export type Language = (typeof supportedLanguages)[number];

export type TranslationKey = keyof typeof englishTranslations;

export const defaultLanguage: Language = 'en';

export const languageStorageKey = 'portfolio-language';
export function t(key: TranslationKey): string {
  return englishTranslations[key];
}
