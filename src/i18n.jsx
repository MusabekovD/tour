import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import Backend from "i18next-http-backend";
import uzTranslation from "./locales/uz.json";
import engTranslation from "./locales/eng.json";
import ruTranslation from "./locales/ru.json";

i18n
  .use(Backend)
  // Tilni aniqlash
  .use(LanguageDetector)
  // bog'lash
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "eng",
    lng: "ru",
    resources: {
      uz: { translation: uzTranslation },
      eng: { translation: engTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18n;
