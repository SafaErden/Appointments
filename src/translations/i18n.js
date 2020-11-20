import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './en.json';
import commonTr from './tr.json';

const resources = {
  en: {
    translation: commonEn,
  },
  tr: {
    translation: commonTr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lang: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
