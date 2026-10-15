import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import { ThemeToggle } from '@/components/custom/ThemeToggle'
import Navigate from '@/components/layout/navigate'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

// Match Tailwind's xl breakpoint: keep links comfortable on narrow laptops.
const DESKTOP_QUERY = '(min-width: 1280px)'

export function Header() {
  const location = useLocation()
  const [openAtLocation, setOpenAtLocation] = useState<string | null>(null)
  const brandRef = useRef<HTMLAnchorElement>(null)
  const menuTriggerRef = useRef<HTMLButtonElement>(null)
  const open = openAtLocation === location.key

  // Forget the old route so returning with Back cannot reopen a stale menu.
  if (openAtLocation !== null && openAtLocation !== location.key) {
    setOpenAtLocation(null)
  }

  function closeMenu() {
    setOpenAtLocation(null)
  }

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const onResize = () => {
      if (media.matches) setOpenAtLocation(null)
    }
    media.addEventListener('change', onResize)
    return () => media.removeEventListener('change', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 shadow-xs supports-backdrop-filter:backdrop-blur-sm">
      <a
        href="#conteudo-principal"
        className="sr-only rounded-md bg-primary text-primary-foreground focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-3"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          ref={brandRef}
          to="/"
          aria-label="Prototipe - página inicial"
          className="shrink-0 rounded-sm text-2xl font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Prototipe
          <span aria-hidden="true" className="text-muted-foreground">
            .
          </span>
        </Link>

        <div className="hidden xl:block">
          <Navigate />
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <NavLink
            to="/contato"
            className={cn(
              buttonVariants(),
              'hidden min-h-11 min-w-42 rounded-full bg-brand-purple px-6 text-brand-paper hover:bg-brand-purple/90 motion-reduce:transition-none xl:inline-flex',
            )}
          >
            Quero contratar
          </NavLink>
          <ThemeToggle />
          <Sheet
            open={open}
            onOpenChange={(nextOpen) =>
              setOpenAtLocation(nextOpen ? location.key : null)
            }
          >
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-11 xl:hidden"
                />
              }
              ref={menuTriggerRef}
              aria-label="Abrir menu de navegação"
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              showCloseButton={false}
              className="overflow-y-auto p-4 motion-reduce:transition-none data-[side=right]:w-[min(22rem,100%)]"
              finalFocus={() =>
                window.matchMedia(DESKTOP_QUERY).matches
                  ? brandRef.current
                  : menuTriggerRef.current
              }
            >
              <SheetHeader className="p-0 pr-12">
                <SheetTitle className="text-xl font-bold">
                  Menu Prototipe
                </SheetTitle>
                <SheetDescription>
                  Conheça a Prototipe e encontre seu próximo passo.
                </SheetDescription>
              </SheetHeader>
              <SheetClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 size-11"
                  />
                }
                aria-label="Fechar menu de navegação"
              >
                <X aria-hidden="true" />
              </SheetClose>
              <Navigate mobile onNavigate={closeMenu} />
              <div className="mt-auto flex flex-col gap-3 border-t pt-4">
                <Link
                  to="/contato"
                  onClick={closeMenu}
                  className={cn(
                    buttonVariants(),
                    'min-h-11 rounded-full bg-brand-purple px-6 text-brand-paper hover:bg-brand-purple/90 motion-reduce:transition-none',
                  )}
                >
                  Quero contratar
                </Link>
                <NavLink
                  to="/processo-seletivo"
                  onClick={closeMenu}
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'min-h-11 motion-reduce:transition-none aria-[current=page]:underline',
                  )}
                >
                  Quero fazer parte
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
