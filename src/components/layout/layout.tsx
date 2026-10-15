import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/Header'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="flex flex-1 scroll-mt-24 flex-col"
      >
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
