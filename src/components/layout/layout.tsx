import { Outlet } from 'react-router-dom'

import Navigate from '@/components/layout/navigate'

function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="border-b p-4">
                <Navigate />
            </header>
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
