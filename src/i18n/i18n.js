import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationES from './translations/es.json';
import translationEN from './translations/en.json';
import translationITA from './translations/ita.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLngs: 'en',
        supportedLngs: ['es', 'en', 'ita'],
        detection: {
            order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'], // Guarda el idioma detectado para futuras visitas
        },
        resources: {
            es: {
                translation: translationES
            },
            en: {
                translation: translationEN
            },
            ita: {
                translation: translationITA
            }
        },
        debug: true,

        interpolation: {
            escapeValue: false,
        },
        ns: ['translation'], // CLAVE: Añadido explícitamente el namespace por defecto
        defaultNS: 'translation',

        interpolation: {
            escapeValue: false, // React ya escapa los valores, no es necesario que i18next lo haga
            // formatSeparator: ',', // Separador para formatos personalizados (ej. {{fecha, DD/MM/YYYY}}) - no es estrictamente necesario si no lo usas
        }
    });

export default i18n;