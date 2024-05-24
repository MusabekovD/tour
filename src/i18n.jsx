import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import uzTranslation from "./locales/uz.json";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

const language = localStorage.getItem("i18nextLng") || "en"
i18n
  .use(Backend)
  // Tilni aniqlash
  .use(LanguageDetector)
  // bog'lash
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    lng: language,
  /*   backend: {
      loadPath: "/locales/{{en}}/{{ru}}/{{uz}}.json", // Path to your translation files in the public folder
    }, */
    resources: {
      uz: { translation: uzTranslation },
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;
