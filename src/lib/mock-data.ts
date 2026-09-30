/**
 * Mock data para desenvolvimento do site da Prototipe.
 *
 * Estes dados são provisórios: quando o backend (PostgreSQL via API) estiver
 * pronto, as páginas passarão a consumir os dados reais — ver README.md
 * (seções "Configuration" e "Portfolio and Content Structure").
 *
 * Como migrar depois:
 * 1. As páginas/componentes devem importar estes dados somente via helpers
 *    (getBySlug / filterBy...), nunca iterando o array com lógica de negócio
 *    duplicada — assim a troca para a API fica localizada neste arquivo.
 * 2. SUBSTITUIR o retorno dos helpers por chamadas fetch/axios.
 *
 * Os tipos de domínio vivem em `@/types` e são importados aqui.
 */
import type {
  BlogPost,
  CompanyInfo,
  PortfolioItem,
  SelectionProcess,
  Service,
  ServiceType,
} from '@/types'

// ---------------------------------------------------------------------------
// Serviços — apresentação dual e equilibrada das duas frentes (AGENTS.md:
// "Dual-Service Presentation").
// ---------------------------------------------------------------------------

export const MOCK_SERVICES: Service[] = [
  {
    id: 'sv-001',
    slug: 'prototipagem-ux',
    title: 'Prototipagem & UX',
    tagline: 'Valide sua ideia antes de investir em desenvolvimento',
    description:
      'Do wireframe à maquete física: transformamos ideias em modelos tangíveis e testáveis. Trabalhamos com prototipagem digital (wireframes, protótipos navegáveis e testes de usabilidade) e prototipagem física com modelagem 3D, corte em MDF, acrílico e impressão de filamento — para você validar hipóteses com baixo investimento.',
    icon: 'PenTool',
    features: [
      'Validação com usuários reais',
      'Prototipagem física e digital',
      'Baixo investimento inicial',
      'Transição direta para o desenvolvimento',
    ],
    deliverables: [
      'Wireframes de baixa e alta fidelidade',
      'Protótipo navegável (Figma/Marvel)',
      'Maquetes físicas em MDF, acrílico e impressão 3D',
      'Relatório de testes de usabilidade com recomendações',
    ],
    process: [
      {
        step: 'Descoberta',
        description:
          'Entendimento do problema, do público-alvo e das hipóteses a validar.',
      },
      {
        step: 'Ideação',
        description:
          'Exploração de soluções por meio de benchmark, rascunhos e wireframes.',
      },
      {
        step: 'Prototipagem',
        description:
          'Construção do protótipo digital (navegável) ou físico (MDF/acrílico/3D).',
      },
      {
        step: 'Validação',
        description:
          'Testes com usuários reais, coleta de métricas e relatório final.',
      },
    ],
    averageTime: '2 a 4 semanas',
  },
  {
    id: 'sv-002',
    slug: 'desenvolvimento-software',
    title: 'Desenvolvimento de Software',
    tagline: 'Do conceito validado ao produto em produção',
    description:
      'Sites, aplicações web/mobile e sistemas internos sob medida, construídos com engenharia rigorosa: código versionado e documentado, testes e acompanhamento próximo de cada entrega. Ideal para empresas e startups que já validaram a ideia e precisam de um produto funcional e confiável.',
    icon: 'Code2',
    features: [
      'Código versionado e documentado',
      'Entregas parciais com acompanhamento',
      'Mobile-first e acessível',
      'Transferência de conhecimento ao final',
    ],
    deliverables: [
      'Sites institucionais e landing pages',
      'Aplicações web e mobile',
      'Sistemas internos sob medida',
      'Código entregue com documentação e deploy realizado',
    ],
    process: [
      {
        step: 'Descoberta e escopo',
        description:
          'Levantamento de requisitos e definição do escopo junto ao cliente.',
      },
      {
        step: 'Design de interface',
        description:
          'Protótipo de alta fidelidade aprovado antes de qualquer código.',
      },
      {
        step: 'Desenvolvimento',
        description:
          'Implementação com entregas parciais, code review e testes contínuos.',
      },
      {
        step: 'Entrega e deploy',
        description:
          'Publicação em produção, documentação e transferência de conhecimento.',
      },
    ],
    averageTime: '4 a 12 semanas',
  },
]

// ---------------------------------------------------------------------------
// Portfólio — 4 cases cobrindo os dois segmentos.
// Conteúdo segue a tabela "Portfolio Fields by Case Type" do README e as
// táticas para EJs com poucos cases (site próprio como case, redesigns
// conceituais de negócios locais).
// ---------------------------------------------------------------------------

export const MOCK_PORTFOLIO: PortfolioItem[] = [
  // Case de prototipagem digital (mobile) — validação de hipótese com
  // cliente local antes de investir no desenvolvimento.
  {
    id: 'pf-001',
    slug: 'app-sabor-da-serra',
    client: 'Restaurante Sabor da Serra',
    title: 'Protótipo navegável do aplicativo de pedidos',
    serviceType: 'prototipagem',
    secondaryCategory: 'mobile',
    thumbnail: '/portfolio/app-sabor-da-serra.svg',
    tags: ['UX', 'Figma', 'Protótipo navegável', 'Food service'],
    challenge:
      'O restaurante Sabor da Serra recebia pedidos apenas por telefone e WhatsApp, o que gerava erros de anotação, filas nos horários de pico e pedidos perdidos. A equipe queria validar, com baixo investimento, se um aplicativo de pedidos próprio resolveria o problema antes de investir no desenvolvimento.',
    visualSolution:
      'Foram criados wireframes de baixa fidelidade para mapear os fluxos principais (cardápio, carrinho, pagamento e acompanhamento do pedido) e, em seguida, um protótipo navegável de alta fidelidade com a identidade visual do restaurante. O protótipo foi testado com 12 clientes reais em sessões moderadas, usando device mockups para simular a experiência final.',
    engineering:
      'Prototipagem conduzida no Figma, com testes de usabilidade estruturados e testes A/B entre duas versões do fluxo de pedido. Os resultados alimentaram um relatório de recomendações técnicas que serviu de ponte para a fase futura de desenvolvimento, incluindo requisitos funcionais priorizados.',
    result:
      'A hipótese foi validada: 92% dos participantes concluíram o pedido sem ajuda e o NPS do protótipo foi 78. Com os requisitos validados, o restaurante aprovou a fase de desenvolvimento com escopo enxuto e risco reduzido — economia estimada de 30% no custo total do projeto.',
    productStage: 'Validação',
    mainDeliverable: 'Protótipo navegável + relatório de usabilidade',
    toolsStack: ['Figma', 'Marvel', 'A/B testing', 'Miro'],
    successMetrics:
      '92% de conclusão de pedidos no protótipo, NPS 78 e hipótese de demanda validada',
    averageTime: '3 semanas',
  },
  // Case de prototipagem digital (web) — Tática C do README: redesign
  // conceitual proativo para negócio local com site desatualizado.
  {
    id: 'pf-002',
    slug: 'redesign-otica-visao-clara',
    client: 'Ótica Visão Clara',
    title: 'Redesign conceitual do site institucional',
    serviceType: 'prototipagem',
    secondaryCategory: 'web',
    thumbnail: '/portfolio/redesign-otica-visao-clara.svg',
    tags: ['UX', 'Redesign', 'Mobile-first', 'Figma'],
    challenge:
      'O site da Ótica Visão Clara, construído há anos em HTML estático, não funcionava bem em celulares — onde está a maioria das buscas por óticas na região — e não comunicava seus serviços de exames e lentes premium. A loja queria entender como um site moderno poderia atrair novos clientes antes de contratar o desenvolvimento.',
    visualSolution:
      'Projeto conceitual com auditoria de UX do site atual, benchmark de concorrentes e novos fluxos de navegação. Foram entregues wireframes e um protótipo navegável mobile-first das páginas principais (home, serviços, agendamento de exame e contato), além de uma paleta alinhada à identidade visual da loja.',
    engineering:
      'Arquitetura de informação reconstruída no Miro, prototipagem no Figma e testes A/B de duas versões da home. O protótipo também serviu de especificação visual e funcional para o desenvolvimento futuro, com componentes já mapeados para facilitar a implementação em React.',
    result:
      'O conceito elevou a nota de clareza da proposta de valor de 4,2 para 8,7 (avaliação com 15 usuários) e foi aprovado como base do novo site. A ótica entrou na fila de desenvolvimento com o design pronto, reduzindo o tempo estimado de entrega em 2 semanas.',
    productStage: 'Ideação',
    mainDeliverable: 'Wireframes + protótipo navegável mobile-first',
    toolsStack: ['Figma', 'Miro', 'A/B testing'],
    successMetrics:
      'Clareza da proposta de valor de 4,2 → 8,7 em avaliação com usuários',
    averageTime: '2 semanas',
  },
  // Case de desenvolvimento (web) — Tática B do README: o próprio site da
  // EJ como case nº 1 de desenvolvimento.
  {
    id: 'pf-003',
    slug: 'site-prototipe',
    client: 'Prototipe (projeto interno)',
    title: 'Novo site institucional da Prototipe',
    serviceType: 'desenvolvimento',
    secondaryCategory: 'web',
    thumbnail: '/portfolio/site-prototipe.svg',
    tags: ['React', 'TypeScript', 'Tailwind', 'CMS'],
    challenge:
      'O site antigo da Prototipe era um cartão de visitas estático em HTML: sem CMS para publicar novos projetos ou artigos e sem representar a expansão para o desenvolvimento de software. Era preciso unificar as duas frentes de negócio em uma vitrine digital dinâmica, capaz de converter visitantes em clientes e atrair futuros membros.',
    visualSolution:
      'Design mobile-first com tema claro/escuro seguindo o estudo de branding da empresa, hierarquia clara de CTAs separando "quero contratar" de "quero fazer parte" e seções dedicadas para cada serviço. Portfólio e blog seguem estrutura de conteúdo padronizada, gerenciável pelo painel administrativo.',
    engineering:
      'Desenvolvido com Vite + React, TypeScript e Tailwind CSS, componentes shadcn/ui padronizados e rotas com React Router. Formulários com react-hook-form e zod, dados tipados de ponta a ponta e arquitetura preparada para integrar o backend em PostgreSQL, com build em Docker.',
    result:
      'A nova plataforma unificou os dois segmentos de negócio em um único catálogo dinâmico, com painel CMS para membros não técnicos publicarem conteúdo. Carregamento inicial abaixo de 3s em conexões 4G e base de código documentada para facilitar a transferência de conhecimento entre gerações de membros.',
    productStage: 'Construção',
    mainDeliverable: 'Site funcional + código entregue e deploy realizado',
    toolsStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    successMetrics:
      'Carregamento < 3s em 4G, portfólio e blog 100% gerenciáveis via CMS',
    averageTime: '8 semanas',
  },
  // Case de desenvolvimento (sistema interno) — cliente PME imaginário com
  // resultado quantificado.
  {
    id: 'pf-004',
    slug: 'agendamento-clinica-vida-mais',
    client: 'Clínica Vida Mais',
    title: 'Sistema interno de agendamento de consultas',
    serviceType: 'desenvolvimento',
    secondaryCategory: 'sistema',
    thumbnail: '/portfolio/agendamento-clinica-vida-mais.svg',
    tags: ['Sistema interno', 'Node.js', 'PostgreSQL', 'Saúde'],
    challenge:
      'A Clínica Vida Mais controlava agendamentos em planilhas e cadernos, o que causava conflitos de horário, faltas sem lembrete e retrabalho da recepção. A clínica precisava de um sistema interno simples, acessível pela equipe, sem o custo dos softwares de gestão completos do mercado.',
    visualSolution:
      'Sistema web responsivo com agenda por profissional, cadastro de pacientes, confirmação automática de consultas e painel de ocupação. A interface foi desenhada para que recepção e profissionais alternem entre computador e tablet durante o atendimento.',
    engineering:
      'Aplicação web com React no frontend e API REST em Node.js com PostgreSQL, autenticação por perfil de usuário (recepção, profissional e administração) e lembretes automáticos por e-mail. Deploy com Docker e backup diário do banco de dados.',
    result:
      'Conflitos de agenda zerados nos três primeiros meses de uso e queda de 40% nas faltas sem aviso graças aos lembretes automáticos. A recepção economiza cerca de 6 horas por semana em trabalho manual de confirmação.',
    productStage: 'Lançamento',
    mainDeliverable: 'Sistema interno funcional com deploy',
    toolsStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    successMetrics:
      'Uptime 99,9%, 40% menos faltas e 6h/semana economizadas na recepção',
    averageTime: '10 semanas',
  },
]

// ---------------------------------------------------------------------------
// Blog — artigos, case studies e novidades internas (README: "Blog Platform").
// ---------------------------------------------------------------------------

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'bp-001',
    slug: 'prototipagem-reduz-custos',
    title: 'Como a prototipagem reduz custos no desenvolvimento de produtos',
    excerpt:
      'Validar antes de construir: como wireframes, protótipos navegáveis e testes com usuários economizam meses de desenvolvimento e evitam retrabalho.',
    content:
      'Construir um produto digital sem validar a ideia é uma das formas mais caras de errar. Cada funcionalidade desenvolvida por engano não custa apenas o tempo de implementação: ela também demanda manutenção, documentação e suporte.\n\nA prototipagem ataca esse problema na raiz. Com wireframes e protótipos navegáveis, é possível colocar o produto nas mãos de usuários reais em dias — não meses. Testes moderados revelam problemas de navegação, fluxos confusos e suposições erradas de negócio quando ainda custam pouquíssimo corrigir.\n\nNa Prototipe, já vimos clientes economizarem cerca de 30% do custo total ao validar requisitos antes do desenvolvimento. O segredo é tratar o protótipo como ferramenta de decisão: o que valida ganha prioridade, o que não valida sai do escopo.\n\nSe você tem uma ideia no papel, comece pela validação. O custo de um protótipo é uma fração do custo de uma construção errada.',
    author: 'Ana Beatriz',
    publishedAt: '2026-08-12',
    tags: ['Prototipagem', 'UX', 'Negócios'],
    thumbnail: '/blog/prototipagem-reduz-custos.svg',
  },
  {
    id: 'bp-002',
    slug: 'ej-site-proprio-case-prototipe',
    title: 'Por que toda empresa júnior deve ter um site próprio: o case Prototipe',
    excerpt:
      'O site da própria EJ pode ser o melhor case de desenvolvimento do portfólio: baixo risco, cliente interno e resultado visível. Contamos como transformamos o nosso.',
    content:
      'Poucos cases de portfólio? A resposta pode estar debaixo do seu nariz: o site da própria empresa júnior. Foi o que fizemos — e uma das melhores decisões do nosso planejamento.\n\nTratar o próprio site como um projeto de cliente significa seguir todas as etapas formais: descoberta, escopo, design, desenvolvimento e entrega com métricas. A diferença é que o cliente é interno, o que reduz o risco e acelera o feedback.\n\nNo nosso caso, o site antigo era estático e não refletia a expansão para o desenvolvimento de software. O novo site unificou as duas frentes de negócio, ganhou um CMS para o time publicar conteúdo sem programar e se tornou o case nº 1 do portfólio de desenvolvimento.\n\nSe a sua EJ ainda exibe um HTML parado no tempo, transformá-lo em projeto é a forma mais rápida de iniciar o portfólio — com um problema real e um resultado que todos visitam todo dia.',
    author: 'Carlos Eduardo',
    publishedAt: '2026-07-28',
    tags: ['Desenvolvimento', 'Empresa Júnior', 'Case'],
    thumbnail: '/blog/ej-site-proprio-case-prototipe.svg',
  },
  {
    id: 'bp-003',
    slug: 'expansao-desenvolvimento-software',
    title: 'Novidades do semestre: a Prototipe agora desenvolve software',
    excerpt:
      'Da modelagem 3D em MDF ao código em produção: conheça a nova frente de desenvolvimento de software e o que muda para clientes e membros.',
    content:
      'É oficial: a Prototipe agora desenvolve aplicações e websites. A nova frente de negócio surge naturalmente do nosso histórico em prototipagem — afinal, muitos dos protótipos que construímos sempre acabam virando produtos reais.\n\nPara os clientes, a mudança significa um fluxo completo em um só lugar: validação da ideia com prototipagem, seguida da construção do produto com o mesmo time que já entende o projeto desde o primeiro dia.\n\nPara os membros, a expansão abre novas trilhas de aprendizado: React, Node.js, bancos de dados e boas práticas de engenharia, sempre com mentoria e projetos reais.\n\nNos próximos meses vamos publicar aqui no blog cases dos primeiros projetos entregues. E se você é estudante e quer participar dessa construção, fique de olho na página do Processo Seletivo.',
    author: 'Equipe Prototipe',
    publishedAt: '2026-09-14',
    tags: ['Institucional', 'Novidades'],
    thumbnail: '/blog/expansao-desenvolvimento-software.svg',
  },
]

// ---------------------------------------------------------------------------
// Dados institucionais — página "Quem Somos" (AGENTS.md: conteúdo estático
// deve viver em constantes, nunca hardcoded no JSX).
// ---------------------------------------------------------------------------

export const MOCK_COMPANY: CompanyInfo = {
  name: 'Prototipe',
  history:
    'Fundada em Montes Claros, no coração do norte de Minas Gerais, a Prototipe começou como uma empresa júnior focada em prototipagem física: modelagem 3D e fabricação em MDF, acrílico e impressão de filamento. Com o tempo, o conhecimento teórico dos estudantes de Ciência da Computação encontrou a prática de mercado, e a empresa expandiu sua atuação para o desenvolvimento de aplicações e websites para clientes reais — diversificando o portfólio e ampliando o impacto regional.',
  mission:
    'Transformar ideias em soluções tangíveis e digitais, conectando o conhecimento acadêmico à prática de mercado e formando profissionais mais completos.',
  vision:
    'Ser referência em prototipagem e desenvolvimento de software no norte de Minas Gerais, reconhecida pela qualidade das entregas e pelo impacto na formação dos estudantes.',
  values: [
    {
      title: 'Empreendedorismo',
      description:
        'Iniciativa e proatividade para transformar oportunidades em resultados reais.',
    },
    {
      title: 'Excelência',
      description:
        'Compromisso com a qualidade em cada entrega, do primeiro wireframe ao deploy.',
    },
    {
      title: 'Colaboração',
      description:
        'Trabalho em equipe e troca constante de conhecimento entre membros, clientes e universidade.',
    },
    {
      title: 'Evolução contínua',
      description:
        'Aprendizado permanente, acompanhando as tecnologias e as necessidades do mercado.',
    },
  ],
  stats: [
    { label: 'Projetos entregues', value: '40+' },
    { label: 'Membros ativos', value: '25' },
    { label: 'Clientes atendidos', value: '30' },
    { label: 'Anos de história', value: '5' },
  ],
}

// ---------------------------------------------------------------------------
// Processo Seletivo — Persona 3 "Future Member" (AGENTS.md): cronograma,
// requisitos e instruções para estudantes que querem entrar na empresa.
// ---------------------------------------------------------------------------

export const MOCK_SELECTION_PROCESS: SelectionProcess = {
  title: 'Processo Seletivo Prototipe',
  description:
    'Faça parte de uma empresa júnior que transforma ideias em protótipos e produtos digitais. Aqui você trabalha em projetos reais, aprende com a prática e desenvolve habilidades que o mercado valoriza — com ou sem experiência prévia.',
  isOpen: true,
  requirements: [
    'Estar regularmente matriculado em curso de graduação',
    'Disponibilidade de ao menos 8 horas semanais',
    'Compromisso com prazos e com o trabalho em equipe',
    'Vontade de aprender — experiência prévia não é obrigatória',
  ],
  schedule: [
    {
      step: 'Inscrições',
      period: '01 a 15 de março',
      description:
        'Preencha o formulário de inscrição contando quem você é e por que quer entrar na empresa.',
    },
    {
      step: 'Dinâmica em grupo',
      period: '20 de março',
      description:
        'Atividade coletiva para avaliar colaboração, comunicação e pensamento criativo.',
    },
    {
      step: 'Entrevistas individuais',
      period: '24 a 27 de março',
      description:
        'Conversa com membros do time para entender seu perfil, interesses e disponibilidade.',
    },
    {
      step: 'Resultado e integração',
      period: '30 de março',
      description:
        'Divulgação dos selecionados e início do programa de integração dos novos membros.',
    },
  ],
  instructions: [
    'Realize a inscrição pelo formulário disponível nesta página durante o período indicado.',
    'Acompanhe o e-mail cadastrado: todas as convocações são enviadas por lá.',
    'Não é necessário conhecimento técnico prévio — avaliamos perfil e vontade de aprender.',
    'Dúvidas? Fale conosco pela página de contato ou pelo nosso Instagram oficial.',
  ],
  faq: [
    {
      question: 'Preciso ter experiência prévia para participar?',
      answer:
        'Não. Avaliamos perfil, vontade de aprender e comprometimento. A empresa oferece treinamentos e mentoria para os novos membros.',
    },
    {
      question: 'Preciso ser estudante de Ciência da Computação?',
      answer:
        'Não. O processo seletivo é aberto a estudantes de todos os cursos — idealizamos equipes multidisciplinares para prototipagem, desenvolvimento, marketing e gestão.',
    },
    {
      question: 'Posso participar do processo seletivo mais de uma vez?',
      answer:
        'Sim. Quem não é selecionado recebe feedback construtivo e é fortemente incentivado a tentar novamente na próxima edição.',
    },
    {
      question: 'O trabalho na empresa júnior é remunerado?',
      answer:
        'Os projetos podem gerar distribuição de resultados aos membros, conforme as regras do movimento empresa júnior e o desempenho em projetos.',
    },
  ],
}

// ---------------------------------------------------------------------------
// Helpers de acesso — concentram as consultas que as páginas precisam hoje.
// Quando o backend estiver pronto [TODO], apenas estes helpers serão
// reescritos para buscar da API (ex.: `lib/api.ts` com VITE_API_BASE_URL),
// sem alterar nenhum componente.
// ---------------------------------------------------------------------------

/** Retorna um item do portfólio pelo slug, ou undefined se não existir. */
export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return MOCK_PORTFOLIO.find((item) => item.slug === slug)
}

/** Filtra o portfólio por segmento de serviço (badge principal do card). */
export function filterPortfolioByServiceType(
  serviceType: ServiceType
): PortfolioItem[] {
  return MOCK_PORTFOLIO.filter((item) => item.serviceType === serviceType)
}

/** Retorna um post do blog pelo slug, ou undefined se não existir. */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return MOCK_BLOG_POSTS.find((post) => post.slug === slug)
}

/** Retorna um serviço pelo slug, ou undefined se não existir. */
export function getServiceBySlug(slug: string): Service | undefined {
  return MOCK_SERVICES.find((service) => service.slug === slug)
}
