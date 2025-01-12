import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import faTranslate from '@locale/fa-translate.ts';
import enTranslate from '@locale/en-translate.ts';
type Locale = 'en' | 'fa';

const locale: Locale = (localStorage.getItem('locale') as Locale) ?? 'fa';

const resources = {
  en: {
    translation: enTranslate,
  },
  fa: {
    translation: faTranslate,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: locale,
  fallbackLng: 'fa',
});

export default i18n;
