import { NavLink } from 'react-router-dom'

import { cn } from '@/lib/utils'

const NAVIGATION_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/quem-somos', label: 'Quem somos' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contato', label: 'Contato' },
  { to: '/processo-seletivo', label: 'Quero fazer parte' },
] as const

interface NavigateProps {
  mobile?: boolean
  onNavigate?: () => void
}

function Navigate({ mobile = false, onNavigate }: NavigateProps) {
  return (
    <nav aria-label={mobile ? 'Navegação móvel' : 'Navegação principal'}>
      <ul className={cn('flex gap-1', mobile ? 'flex-col' : 'items-center')}>
        {NAVIGATION_LINKS.filter(
          ({ to }) => !mobile || to !== '/processo-seletivo',
        ).map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground motion-reduce:transition-none',
                  mobile && 'text-base',
                  isActive
                    ? 'bg-accent text-accent-foreground underline decoration-2 underline-offset-4'
                    : 'text-muted-foreground',
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigate
