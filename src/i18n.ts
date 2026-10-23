export type Lang = 'en' | 'vi';

let currentLang: Lang = (localStorage.getItem('veraledger_lang') as Lang) || 'vi';
const listeners: Array<(lang: Lang) => void> = [];

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang) {
  if (lang !== 'en' && lang !== 'vi') return;
  currentLang = lang;
  try {
    localStorage.setItem('veraledger_lang', lang);
  } catch (e) {}
  document.documentElement.lang = lang;
  listeners.forEach(fn => fn(lang));
}

export function onLangChange(fn: (lang: Lang) => void) {
  listeners.push(fn);
}

export function t(en: string, vi: string): string {
  return currentLang === 'vi' ? vi : en;
}
