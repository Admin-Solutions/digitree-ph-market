import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../locales/en';
import tl from '../locales/tl';

const translations = { en, tl };

const LanguageContext = createContext();

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'tl', name: 'Tagalog', nativeName: 'Tagalog' },
];

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage first, then browser language, default to 'en'
    const saved = localStorage.getItem('language');
    if (saved && translations[saved]) return saved;

    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) return browserLang;

    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  // Get translation by key path (e.g., 'nav.services')
  const t = (key, replacements = {}) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if key not found
        value = translations.en;
        for (const k2 of keys) {
          if (value && typeof value === 'object' && k2 in value) {
            value = value[k2];
          } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
          }
        }
        break;
      }
    }

    // Handle replacements like {count}, {name}, etc.
    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (_, key) => replacements[key] ?? `{${key}}`);
    }

    return value;
  };

  // Get array translations (for lists)
  const tArray = (key) => {
    const result = t(key);
    return Array.isArray(result) ? result : [];
  };

  const value = {
    language,
    setLanguage,
    t,
    tArray,
    languages: LANGUAGES,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
