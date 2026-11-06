/**
 * Utilidades para manejar el tema (claro/oscuro) con persistencia en localStorage.
 */

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'portfolio-theme';

/* Detecta la preferencia del sistema */
export function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/* Lee el tema guardado, o la preferencia del sistema si no hay nada guardado */
export function getStoredTheme(): Theme {
  if (typeof window === 'undefined' || !localStorage) return getSystemTheme();
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
  return getSystemTheme();
}

/* Aplica el tema resuelto al <html> mediante data-theme */
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  const resolved = theme === 'system' ? getSystemTheme() : theme;
  document.documentElement.setAttribute('data-theme', resolved);

  /* Guarda la preferencia original (incluyendo 'system') */
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, theme);
  }
}

/* Alterna entre light y dark (mantiene 'system' si está activo) */
export function toggleTheme(current: Theme): Theme {
  if (current === 'system') {
    const sys = getSystemTheme();
    return sys === 'light' ? 'dark' : 'light';
  }
  return current === 'light' ? 'dark' : 'light';
}
