import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import idCommon from "./locales/id/common.json";
import enHome from "./locales/en/home.json";
import idHome from "./locales/id/home.json";
import enFeatures from "./locales/en/features.json";
import idFeatures from "./locales/id/features.json";
import enAbout from "./locales/en/about.json";
import idAbout from "./locales/id/about.json";
import enContact from "./locales/en/contact.json";
import idContact from "./locales/id/contact.json";
import enBlog from "./locales/en/blog.json";
import idBlog from "./locales/id/blog.json";
import enDocs from "./locales/en/docs.json";
import idDocs from "./locales/id/docs.json";
import enFaq from "./locales/en/faq.json";
import idFaq from "./locales/id/faq.json";
import enPrivacy from "./locales/en/privacy.json";
import idPrivacy from "./locales/id/privacy.json";
import enTerms from "./locales/en/terms.json";
import idTerms from "./locales/id/terms.json";
import enRegister from "./locales/en/register.json";
import idRegister from "./locales/id/register.json";
import enReview from "./locales/en/review.json";
import idReview from "./locales/id/review.json";
import enNotFound from "./locales/en/notFound.json";
import idNotFound from "./locales/id/notFound.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "id",
    ns: [
      "common", "home", "features", "about", "contact", "review",
      "blog", "docs", "faq", "privacy", "terms", "register", "notFound",
    ],
    defaultNS: "common",
    resources: {
      en: {
        common: enCommon, home: enHome, features: enFeatures,
        about: enAbout, contact: enContact, review: enReview,
        blog: enBlog, docs: enDocs, faq: enFaq, privacy: enPrivacy,
        terms: enTerms, register: enRegister, notFound: enNotFound,
      },
      id: {
        common: idCommon, home: idHome, features: idFeatures,
        about: idAbout, contact: idContact, review: idReview,
        blog: idBlog, docs: idDocs, faq: idFaq, privacy: idPrivacy,
        terms: idTerms, register: idRegister, notFound: idNotFound,
      },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
