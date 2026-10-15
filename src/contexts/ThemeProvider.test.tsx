import { StrictMode } from 'react'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { ThemeToggle } from '@/components/custom/ThemeToggle'
import { ThemeProvider } from '@/contexts/ThemeProvider'
import { useTheme } from '@/hooks/useTheme'
import { SYSTEM_THEME_QUERY, THEME_STORAGE_KEY } from '@/lib/theme'

function ThemeProbe() {
  const { theme, isDark } = useTheme()
  return (
    <output>
      {theme}:{String(isDark)}
    </output>
  )
}

let darkSystem: boolean
let listeners: Set<() => void>

function mountTheme() {
  return render(
    <StrictMode>
      <ThemeProvider>
        <ThemeProbe />
        <ThemeToggle />
      </ThemeProvider>
    </StrictMode>,
  )
}

function changeSystem(dark: boolean) {
  act(() => {
    darkSystem = dark
    listeners.forEach((listener) => listener())
  })
}

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  darkSystem = false
  listeners = new Set()
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: query === SYSTEM_THEME_QUERY && darkSystem,
      addEventListener: (_: string, listener: () => void) =>
        listeners.add(listener),
      removeEventListener: (_: string, listener: () => void) =>
        listeners.delete(listener),
    })),
  )
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
  document.documentElement.style.removeProperty('color-scheme')
})

describe('ThemeProvider and useTheme', () => {
  it('uses light for a light system and does not save an implicit choice', () => {
    mountTheme()
    expect(screen.getByRole('status')).toHaveTextContent('light:false')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBeNull()
    expect(document.documentElement.style.colorScheme).toBe('light')
  })

  it('follows system changes until the visitor chooses a theme', () => {
    mountTheme()
    changeSystem(true)
    expect(screen.getByRole('status')).toHaveTextContent('dark:true')
    expect(document.documentElement).toHaveClass('dark')
    fireEvent.click(screen.getByRole('button', { name: 'Tema escuro' }))
    changeSystem(false)
    changeSystem(true)
    expect(screen.getByRole('status')).toHaveTextContent('light:false')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
  })

  it.each(['light', 'dark'] as const)(
    'restores saved %s over the system preference',
    (saved) => {
      darkSystem = saved !== 'dark'
      localStorage.setItem(THEME_STORAGE_KEY, saved)
      mountTheme()
      expect(screen.getByRole('status')).toHaveTextContent(
        `${saved}:${saved === 'dark'}`,
      )
      expect(document.documentElement.classList.contains('dark')).toBe(
        saved === 'dark',
      )
    },
  )

  it('ignores invalid stored values and uses the system', () => {
    localStorage.setItem(THEME_STORAGE_KEY, 'invalid')
    darkSystem = true
    mountTheme()
    expect(screen.getByRole('status')).toHaveTextContent('dark:true')
  })

  it('toggles both ways, exposes pressed state and persists across remounts', () => {
    const { unmount } = mountTheme()
    const button = screen.getByRole('button', { name: 'Tema escuro' })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    unmount()
    mountTheme()
    expect(document.documentElement).toHaveClass('dark')
    fireEvent.click(screen.getByRole('button', { name: 'Tema escuro' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
  })

  it('works when storage reads and writes are denied', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('denied')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('denied')
    })
    darkSystem = true
    mountTheme()
    expect(document.documentElement).toHaveClass('dark')
    fireEvent.click(screen.getByRole('button', { name: 'Tema escuro' }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('syncs another tab and returns to the system when its preference is cleared', () => {
    mountTheme()
    act(() =>
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: THEME_STORAGE_KEY,
          newValue: 'dark',
        }),
      ),
    )
    expect(document.documentElement).toHaveClass('dark')
    act(() =>
      window.dispatchEvent(
        new StorageEvent('storage', { key: null, newValue: null }),
      ),
    )
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('cleans up system subscriptions including StrictMode remounts', () => {
    const { unmount } = mountTheme()
    expect(listeners.size).toBe(1)
    unmount()
    expect(listeners.size).toBe(0)
  })

  it('falls back to light when matchMedia is unavailable', () => {
    vi.stubGlobal('matchMedia', undefined)
    mountTheme()
    expect(screen.getByRole('status')).toHaveTextContent('light:false')
  })

  it('explains misuse outside the provider', () => {
    expect(() => render(<ThemeProbe />)).toThrow(
      'useTheme deve ser usado dentro de ThemeProvider.',
    )
  })
})
