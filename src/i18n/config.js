import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "../locales/en/translation.json";
import deTranslation from "../locales/de/translation.json";
import arTranslation from "../locales/ar/translation.json";
import frTranslation from "../locales/fr/translation.json";
import zhTranslation from "../locales/zh/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      de: { translation: deTranslation },
      ar: { translation: arTranslation },
      fr: { translation: frTranslation },
      zh: { translation: zhTranslation },
    },
    supportedLngs: ["en", "de", "ar", "fr", "zh"],
    fallbackLng: "en",
    load: "languageOnly",
    interpolation: { escapeValue: false },
  });

const applyDir = (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
};

applyDir(i18n.resolvedLanguage);
i18n.on("languageChanged", applyDir);

export default i18n;