import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../constants/locale/en.json';

export default function initializeI18n(): Promise<TFunction> {
  return i18n.use(initReactI18next).init({
    resources: {
      en,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV !== 'production',
  });
}
