export type Theme = 'light' | 'dark'

// Keep this key and the fallback in sync with the pre-paint script in index.html.
export const THEME_STORAGE_KEY = 'prototipe-theme'
export const SYSTEM_THEME_QUERY = '(prefers-color-scheme: dark)'

export function parseTheme(value: string | null): Theme | null {
  return value === 'light' || value === 'dark' ? value : null
}

export function readThemePreference(): Theme | null {
  try {
    return parseTheme(localStorage.getItem(THEME_STORAGE_KEY))
  } catch {
    // Private browsing or browser policy may deny storage access.
    return null
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia?.(SYSTEM_THEME_QUERY).matches ? 'dark' : 'light'
}
