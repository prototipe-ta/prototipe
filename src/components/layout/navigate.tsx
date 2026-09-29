import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'

function Navigate() {
    const navigate = useNavigate()

    return (
        <nav aria-label="Navegação principal" className="flex flex-wrap justify-center gap-4">
            <Button onClick={() => navigate('/servicos')}>
                Serviços
            </Button>
            <Button variant="secondary" onClick={() => navigate('/portifolio')}>
                Portfólio
            </Button>
            <Button variant="secondary" onClick={() => navigate('/blog')}>
                Blog
            </Button>
            <Button variant="outline" onClick={() => navigate('/quem-somos')}>
                Quem Somos
            </Button>
            <Button variant="outline" onClick={() => navigate('/processo-seletivo')}>
                Processo Seletivo
            </Button>
            <Button variant="default" size="lg" onClick={() => navigate('/contato')}>
                Entre em Contato
            </Button>
        </nav>
    )
}

export default Navigate
