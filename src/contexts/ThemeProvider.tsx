import { useEffect, useLayoutEffect, useState, type ReactNode } from 'react'

import { ThemeContext } from '@/contexts/theme-context'
import {
  getSystemTheme,
  parseTheme,
  readThemePreference,
  SYSTEM_THEME_QUERY,
  THEME_STORAGE_KEY,
} from '@/lib/theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState(readThemePreference)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const theme = preference ?? systemTheme

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia?.(SYSTEM_THEME_QUERY)
    const onSystemChange = () => setSystemTheme(getSystemTheme())
    const onStorageChange = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) {
        setPreference(parseTheme(event.newValue))
      }
    }

    media?.addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorageChange)
    return () => {
      media?.removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setPreference(nextTheme)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    } catch {
      // The control still works for this visit when storage is unavailable.
    }
  }

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === 'dark', toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
