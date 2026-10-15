import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { Header } from '@/components/layout/Header'
import { ThemeProvider } from '@/contexts/ThemeProvider'

let desktop: boolean
let resizeListeners: Set<() => void>

function mountHeader(path = '/') {
  const router = createMemoryRouter(
    [
      {
        path: '*',
        element: (
          <ThemeProvider>
            <Header />
            <main id="conteudo-principal" tabIndex={-1}>
              Conteúdo
            </main>
          </ThemeProvider>
        ),
      },
    ],
    { initialEntries: [path] },
  )
  render(<RouterProvider router={router} />)
  return router
}

beforeEach(() => {
  desktop = false
  resizeListeners = new Set()
  localStorage.clear()
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      get matches() {
        return query.includes('1280') && desktop
      },
      addEventListener: (_: string, listener: () => void) => {
        if (query.includes('1280')) resizeListeners.add(listener)
      },
      removeEventListener: (_: string, listener: () => void) =>
        resizeListeners.delete(listener),
    })),
  )
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  localStorage.clear()
})

describe('Header', () => {
  it('uses real links, including recruitment, and marks the current route', () => {
    mountHeader('/servicos')
    const navigation = within(
      screen.getByRole('navigation', { name: 'Navegação principal' }),
    )
    expect(navigation.getByRole('link', { name: 'Serviços' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      navigation.getByRole('link', { name: 'Início' }),
    ).not.toHaveAttribute('aria-current')
    expect(
      navigation.getByRole('link', { name: 'Quero fazer parte' }),
    ).toHaveAttribute('href', '/processo-seletivo')
    expect(
      screen.getByRole('link', { name: 'Quero contratar' }),
    ).toHaveAttribute('href', '/contato')
    expect(
      screen.getByRole('link', { name: 'Pular para o conteúdo' }),
    ).toHaveAttribute('href', '#conteudo-principal')
  })

  it('marks Blog active on a nested article route', () => {
    mountHeader('/blog/artigo')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('opens a named dialog and closes after navigation', async () => {
    const router = mountHeader()
    fireEvent.click(
      screen.getByRole('button', { name: 'Abrir menu de navegação' }),
    )
    const dialog = await screen.findByRole('dialog', { name: 'Menu Prototipe' })
    fireEvent.click(within(dialog).getByRole('link', { name: 'Portfólio' }))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    expect(router.state.location.pathname).toBe('/portfolio')
  })

  it('closes on Escape and restores focus to the trigger', async () => {
    mountHeader()
    const trigger = screen.getByRole('button', {
      name: 'Abrir menu de navegação',
    })
    trigger.focus()
    fireEvent.click(trigger)
    const dialog = await screen.findByRole('dialog')
    fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape' })
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    await waitFor(() => expect(trigger).toHaveFocus())
  })

  it('closes when the visitor selects the current page too', async () => {
    mountHeader()
    fireEvent.click(
      screen.getByRole('button', { name: 'Abrir menu de navegação' }),
    )
    const dialog = await screen.findByRole('dialog')
    fireEvent.click(within(dialog).getByRole('link', { name: 'Início' }))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('closes when the viewport grows to desktop and removes its listener on unmount', async () => {
    mountHeader()
    fireEvent.click(
      screen.getByRole('button', { name: 'Abrir menu de navegação' }),
    )
    await screen.findByRole('dialog')
    act(() => {
      desktop = true
      resizeListeners.forEach((listener) => listener())
    })
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    cleanup()
    expect(resizeListeners.size).toBe(0)
  })

  it('does not reopen an old menu on Back after navigation outside the Header', async () => {
    const router = mountHeader()
    fireEvent.click(
      screen.getByRole('button', { name: 'Abrir menu de navegação' }),
    )
    await screen.findByRole('dialog')
    await act(() => router.navigate('/blog'))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
    await act(() => router.navigate(-1))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
