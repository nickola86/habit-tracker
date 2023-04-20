import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { it } from './it';
import languageDetector from 'i18next-browser-languagedetector';

i18n.use(languageDetector)
.use(initReactI18next)
  .init({
    debug: true,
    resources:{
      it,
      en,
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;