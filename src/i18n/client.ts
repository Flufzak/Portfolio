import i18next from 'i18next';

import englishTranslations from '../locales/en.json';
import dutchTranslations from '../locales/nl.json';

import {
  defaultLanguage,
  languageStorageKey,
  supportedLanguages,
  type Language,
  type TranslationKey,
} from './index';

let initializationPromise: Promise<typeof i18next> | null = null;

function isSupportedLanguage(value: string | null): value is Language {
  return value !== null && supportedLanguages.includes(value as Language);
}

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);

  return isSupportedLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
}

export function initializeI18n(): Promise<typeof i18next> {
  if (initializationPromise) {
    return initializationPromise;
  }

  initializationPromise = i18next
    .init({
      lng: getStoredLanguage(),
      fallbackLng: defaultLanguage,
      supportedLngs: [...supportedLanguages],

      resources: {
        en: {
          translation: englishTranslations,
        },
        nl: {
          translation: dutchTranslations,
        },
      },

      interpolation: {
        escapeValue: false,
      },

      returnNull: false,
    })
    .then(() => i18next);

  return initializationPromise;
}

export async function setLanguage(language: Language): Promise<void> {
  await initializeI18n();
  await i18next.changeLanguage(language);

  window.localStorage.setItem(languageStorageKey, language);

  updateTranslatedElements();
  updateDocumentLanguage();
  updateLanguageButtons();

  window.dispatchEvent(
    new CustomEvent<Language>('languagechange', {
      detail: language,
    }),
  );
}

export function clientT(key: TranslationKey): string {
  return i18next.t(key);
}

export function updateTranslatedElements(): void {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n as TranslationKey | undefined;

    if (!key) {
      return;
    }

    element.textContent = clientT(key);
  });

  document
    .querySelectorAll<HTMLElement>('[data-i18n-aria-label]')
    .forEach((element) => {
      const key = element.dataset.i18nAriaLabel as TranslationKey | undefined;

      if (!key) {
        return;
      }

      element.setAttribute('aria-label', clientT(key));
    });

  document
    .querySelectorAll<HTMLElement>('[data-i18n-title]')
    .forEach((element) => {
      const key = element.dataset.i18nTitle as TranslationKey | undefined;

      if (!key) {
        return;
      }

      element.setAttribute('title', clientT(key));
    });

  document
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      '[data-i18n-placeholder]',
    )
    .forEach((element) => {
      const key = element.dataset.i18nPlaceholder as TranslationKey | undefined;

      if (!key) {
        return;
      }

      element.placeholder = clientT(key);
    });
}

function updateDocumentLanguage(): void {
  document.documentElement.lang = getStoredLanguage();
}

function updateLanguageButtons(): void {
  const currentLanguage = getStoredLanguage();

  document
    .querySelectorAll<HTMLButtonElement>('[data-language]')
    .forEach((button) => {
      const isActive = button.dataset.language === currentLanguage;

      button.setAttribute('aria-pressed', String(isActive));
      button.dataset.active = String(isActive);
    });
}

export async function startI18n(): Promise<void> {
  await initializeI18n();

  updateTranslatedElements();
  updateDocumentLanguage();
  updateLanguageButtons();
}
