/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translations: EN,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en'];

export default i18n;
