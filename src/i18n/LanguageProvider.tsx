"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  dictionaries,
  type DictionaryKey,
  type Locale,
} from "@/i18n/dictionaries";
import { pick } from "@/lib/locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: DictionaryKey) => string;
  /** Texto bilingüe: pick(es, en) */
  tx: <T>(es: T, en: T) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "heladeria-alacant-locale";

/**
 * El HTML del servidor se genera siempre en español (`<html lang="es">`), así
 * que el idioma persistido vive en un store externo que React lee con
 * useSyncExternalStore: durante la hidratación usa el snapshot de servidor y
 * solo después consulta localStorage, sin desajustes ni setState en efectos.
 */
const DEFAULT_LOCALE: Locale = "es";

function parseLocale(value: string | null): Locale {
  return value === "es" || value === "en" ? value : DEFAULT_LOCALE;
}

const listeners = new Set<() => void>();
let cachedLocale: Locale | null = null;

function emit() {
  for (const listener of listeners) listener();
}

function handleStorageEvent(event: StorageEvent) {
  if (event.key !== null && event.key !== STORAGE_KEY) return;
  cachedLocale = null;
  emit();
}

function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    window.addEventListener("storage", handleStorageEvent);
  }
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("storage", handleStorageEvent);
    }
  };
}

function getSnapshot(): Locale {
  if (cachedLocale === null) {
    try {
      cachedLocale = parseLocale(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      cachedLocale = DEFAULT_LOCALE;
    }
  }
  return cachedLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function storeLocale(next: Locale) {
  cachedLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Modo privado o almacenamiento bloqueado: el idioma solo dura la sesión.
  }
  emit();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    storeLocale(next);
  }, []);

  const t = useCallback(
    (key: DictionaryKey) => dictionaries[locale][key] ?? dictionaries.es[key],
    [locale],
  );

  const tx = useCallback(
    <T,>(es: T, en: T) => pick(locale, es, en),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, tx }),
    [locale, setLocale, t, tx],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
