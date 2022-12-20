import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { it } from './it';

i18n.use(initReactI18next)
  .init({
    fallbackLng: 'it',
    debug: true,
    lng:'it',
    resources:{
      it,
      en,
    }
  });

export default i18n;