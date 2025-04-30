import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en.json';
import meTranslation from './me.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  me: {
    translation: meTranslation,
  },
};

i18n
  // Detect user language
  // Learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector) // Add the language detector plugin
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'me', // Fallback language if detection fails or detected lang is not available
    debug: process.env.NODE_ENV === 'development', // Enable debug logs in development

    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    detection: {
      // Order and from where user language should be detected.
      // We prioritize localStorage/cookie to remember the user's manual choice.
      // We added 'navigator' to ensure 'en' is the default unless explicitly changed.
      order: ['localStorage', 'cookie', 'navigator'],

      // Caches to store the detected/selected language
      caches: ['localStorage', 'cookie'],

      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',

      // Only detect languages ('en', 'me') that are present in the 'resources' object
      checkWhitelist: true,
    },

    react: {
      useSuspense: false,
    },
  } as any);

export default i18n;
