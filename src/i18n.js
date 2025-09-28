import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // carga archivos JSON
  .use(LanguageDetector) // detecta idioma automáticamente
  .use(initReactI18next) // conecta con React
  .init({
    fallbackLng: 'en', // idioma por defecto si no encuentra traducción
    debug: true, // para ver en consola los problemas de carga
    interpolation: { escapeValue: false }, // React ya escapa por defecto
    react: { useSuspense: false }, // evita suspenso mientras carga
  });

export default i18n;