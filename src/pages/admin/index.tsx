import { useNavigate, Outlet } from 'react-router-dom'

import { Button } from '@/components/ui/button'

function Admin() {
    const navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col">
            <header className="flex flex-wrap items-center gap-4 border-b p-4">
                <h1 className="text-xl font-bold">Painel Administrativo</h1>
                <nav aria-label="Navegação do admin" className="flex gap-2">
                    <Button variant="ghost" onClick={() => navigate('/admin')}>
                        Dashboard
                    </Button>
                    <Button variant="ghost" onClick={() => navigate('/admin/portfolio')}>
                        Portfólio
                    </Button>
                    <Button variant="ghost" onClick={() => navigate('/admin/blog')}>
                        Blog
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/')}>
                        Voltar ao site
                    </Button>
                </nav>
            </header>
            <main className="flex-1 p-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Admin
