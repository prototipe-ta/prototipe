/// <reference types="node" />
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { runInNewContext } from 'node:vm'
import { describe, expect, it } from 'vitest'

import { SYSTEM_THEME_QUERY, THEME_STORAGE_KEY } from '@/lib/theme'

const html = readFileSync(resolve('index.html'), 'utf8')
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1]

describe('theme before React loads', () => {
  it.each([
    ['dark', false, false, 'dark'],
    ['light', true, false, 'light'],
    [null, true, false, 'dark'],
    [null, false, false, 'light'],
    ['invalid', true, false, 'dark'],
    [null, true, true, 'dark'],
  ])(
    'resolves saved=%s systemDark=%s storageDenied=%s to %s',
    (saved, darkSystem, denied, expected) => {
      const root = document.createElement('html')
      runInNewContext(bootstrap!, {
        document: { documentElement: root },
        localStorage: {
          getItem: (key: string) => {
            expect(key).toBe(THEME_STORAGE_KEY)
            if (denied) throw new Error('denied')
            return saved
          },
        },
        window: {
          matchMedia: (query: string) => {
            expect(query).toBe(SYSTEM_THEME_QUERY)
            return { matches: darkSystem }
          },
        },
      })
      expect(root.classList.contains('dark')).toBe(expected === 'dark')
      expect(root.style.colorScheme).toBe(expected)
    },
  )
})
