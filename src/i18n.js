import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./data/translations/fr/translation.json";
import en from "./data/translations/en/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            fr: { translation: fr },
            en: { translation: en }
        },
        lng: "fr", // langue par défaut
        fallbackLng: "fr",
        interpolation: { escapeValue: false }
    });

export default i18n;