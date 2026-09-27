import es from './es.json';
import en from './en.json';
import { defaultLocale, locales, type Locale } from './config';

export { defaultLocale, locales } from './config';
export type { Locale } from './config';

export type Dict = typeof es;

type StringKeyOf<D> = { [K in keyof D]: D[K] extends string ? K : never }[keyof D];
type ListKeyOf<D> = { [K in keyof D]: D[K] extends string[] ? K : never }[keyof D];

export type TranslationKey = StringKeyOf<Dict>;
export type TranslationListKey = ListKeyOf<Dict>;

const dictionaries: Record<Locale, Dict> = { es, en };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

export function resolveLocale(currentLocale: string | undefined | null): Locale {
  return isLocale(currentLocale) ? currentLocale : defaultLocale;
}

/** Open Graph locale values (language_TERRITORY format). */
export const ogLocales: Record<Locale, string> = {
  es: 'es_AR',
  en: 'en_US',
};

/** Accessible label for the language switcher link, keyed by TARGET locale. */
export const switcherLabels: Record<Locale, string> = {
  es: 'Ver esta página en español',
  en: 'View this page in English',
};

export interface I18n {
  locale: Locale;
  otherLocale: Locale;
  t: (key: TranslationKey) => string;
  tList: (key: TranslationListKey) => string[];
}

export function useI18n(locale: Locale): I18n {
  const dict = dictionaries[locale];
  return {
    locale,
    otherLocale: locale === locales[0] ? locales[1] : locales[0],
    t(key) {
      const value = dict[key];
      if (typeof value !== 'string') {
        throw new Error(`[i18n] "${key}" is not a string translation`);
      }
      return value;
    },
    tList(key) {
      const value = dict[key];
      if (!Array.isArray(value)) {
        throw new Error(`[i18n] "${key}" is not a list translation`);
      }
      return value;
    },
  };
}

/**
 * Locale-aware internal path with a trailing slash (directory build format).
 * `localePath('es', 'projects/x')`  → `/projects/x/`
 * `localePath('en', 'projects/x')`  → `/en/projects/x/`
 * `localePath('es')`                → `/`
 * `localePath('en')`                → `/en/`
 */
export function localePath(locale: Locale, path: string = ''): string {
  const clean = path
    .replace(/^\/+/, '')
    .replace(/\/+$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (!clean) return `${prefix}/`;
  return `${prefix}/${clean}/`;
}

/** Anchor link to a homepage section in the given locale, e.g. `/#projects`. */
export function homeAnchor(locale: Locale, anchor: string): string {
  return `${localePath(locale)}#${anchor.replace(/^#+/, '')}`;
}

/**
 * Detect which locale a collection entry id belongs to and strip the locale
 * prefix to recover the shared slug. Ids look like `es/my-project`.
 */
export function splitEntryId(id: string): { locale: Locale; slug: string } {
  const normalized = id.replace(/\.md$/, '');
  const [head, ...rest] = normalized.split('/');
  if (rest.length > 0 && isLocale(head)) {
    return { locale: head, slug: rest.join('/') };
  }
  return { locale: defaultLocale, slug: normalized };
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/**
 * Build the hreflang cluster for the current URL following Google's rules:
 * absolute URLs, self-referencing, one entry per locale, plus x-default
 * pointing at the default-locale version.
 *
 * The current canonical URL is the source of truth so every href matches the
 * canonical (protocol, host and trailing slash) byte for byte.
 */
export function alternateLinks(site: URL | undefined, currentUrl: URL): AlternateLink[] {
  const origin = (site ?? currentUrl).origin;
  const rawPath = currentUrl.pathname;
  const path = rawPath.endsWith('/') || rawPath.includes('.') ? rawPath : `${rawPath}/`;

  const enPrefix = `/${locales.find((l) => l !== defaultLocale)}`;
  const isEn = path === `${enPrefix}/` || path.startsWith(`${enPrefix}/`);
  const basePath = isEn ? path.slice(enPrefix.length) || '/' : path;

  const defaultHref = `${origin}${basePath}`;
  const otherHref = `${origin}${enPrefix}${basePath === '/' ? '/' : basePath}`;

  return [
    { hreflang: defaultLocale, href: defaultHref },
    { hreflang: 'en', href: otherHref },
    { hreflang: 'x-default', href: defaultHref },
  ];
}

/**
 * Same-path URL in the target locale, used by the language switcher.
 * Keeps the path relative (no origin) and preserves a trailing hash from the
 * caller if provided.
 */
export function switchHref(pathname: string, hash: string, target: Locale): string {
  const enPrefix = '/en';
  const isEn = pathname === `${enPrefix}/` || pathname.startsWith(`${enPrefix}/`);
  const basePath = isEn ? pathname.slice(enPrefix.length) || '/' : pathname;
  const path = target === defaultLocale ? basePath : `${enPrefix}${basePath === '/' ? '/' : basePath}`;
  return `${path}${hash}`;
}
