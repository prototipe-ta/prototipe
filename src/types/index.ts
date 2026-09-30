/**
 * Tipos de domínio do site da Prototipe.
 *
 * Ponto central de todas as interfaces TypeScript do projeto (AGENTS.md:
 * `src/types/` guarda as definições de tipos). Qualquer componente, hook ou
 * helper que trabalhe com os dados do site deve importar os tipos daqui.
 *
 * Convenções:
 * - Opções válidas de um campo "enum" vivem em constantes `*_OPTIONS`
 *   (`as const`) e o tipo union é derivado delas — assim o zod pode reutilizar
 *   as mesmas opções em schemas de validação sem duplicar valores.
 * - Comentários JSDoc em pt-BR para facilitar a transferência de conhecimento
 *   entre gerações de membros (ver README → Contributing).
 */

// ---------------------------------------------------------------------------
// Unions e suas opções (fonte única da verdade para filtros, badges e schemas)
// ---------------------------------------------------------------------------

/** Segmentos de serviço da empresa — regra de apresentação dual (AGENTS.md). */
export const SERVICE_TYPE_OPTIONS = ['prototipagem', 'desenvolvimento'] as const

/** Badge principal do card de portfólio e tipo de serviço no formulário de contato. */
export type ServiceType = (typeof SERVICE_TYPE_OPTIONS)[number]

/** Categorias secundárias do portfólio: [Web] / [Mobile] / [Sistema interno]. */
export const SECONDARY_CATEGORY_OPTIONS = ['web', 'mobile', 'sistema'] as const

/** Badge secundário do card de portfólio. */
export type SecondaryCategory = (typeof SECONDARY_CATEGORY_OPTIONS)[number]

/**
 * Papéis de acesso ao painel administrativo (CMS).
 *
 * - `admin` → diretoria: gestão completa (conteúdo + configurações).
 * - `editor` → desenvolvedores e marketing: gestão de conteúdo (blog/portfólio).
 *
 * Membros comuns não possuem conta no CMS — o guard de rotas futuro deve
 * liberar /admin apenas para esses dois papéis.
 */
export type UserRole = 'admin' | 'editor'

// ---------------------------------------------------------------------------
// Tipos auxiliares (blocos repetidos entre interfaces)
// ---------------------------------------------------------------------------

/** Etapa do processo de trabalho de um serviço. */
export interface ProcessStep {
  step: string
  description: string
}

/** Etapa do cronograma do processo seletivo. */
export interface SelectionProcessStep {
  step: string
  /** Período da etapa (ex.: '01 a 15 de março'). */
  period: string
  description: string
}

/** Par pergunta/resposta da seção de FAQ. */
export interface FaqItem {
  question: string
  answer: string
}

/** Número institucional exibido na página Quem Somos (ex.: "40+ projetos"). */
export interface StatItem {
  label: string
  value: string
}

// ---------------------------------------------------------------------------
// Portfólio (0.7.1) — estrutura padronizada de case (README/PDFs):
// cliente, badges, e corpo Desafio → Solução Visual → Engenharia → Resultado.
// ---------------------------------------------------------------------------

export interface PortfolioItem {
  id: string
  slug: string
  client: string
  title: string
  /** Badge principal do card: 'prototipagem' | 'desenvolvimento'. */
  serviceType: ServiceType
  /** Badge secundário: 'web' | 'mobile' | 'sistema' (sistema interno). */
  secondaryCategory: SecondaryCategory
  /** Caminho local da imagem em /public (ex.: /portfolio/meu-case.svg). */
  thumbnail: string
  /** Tags técnicas usadas também como filtro extra (React, Figma, Node...). */
  tags: string[]
  /** 1. Desafio: o problema de negócio do cliente. */
  challenge: string
  /** 2. Solução visual: protótipos, fluxos e telas. */
  visualSolution: string
  /** 3. Engenharia: tecnologias, performance, segurança (ou ponte para dev). */
  engineering: string
  /** 4. Resultado: impacto quantificado sempre que possível. */
  result: string
  /** Campos específicos por segmento (README: "Portfolio Fields by Case Type"). */
  productStage?: string
  mainDeliverable?: string
  toolsStack?: string[]
  successMetrics?: string
  averageTime?: string
}

// ---------------------------------------------------------------------------
// Blog (0.7.2) — artigos, case studies e novidades internas.
// ---------------------------------------------------------------------------

export interface BlogPost {
  id: string
  slug: string
  title: string
  /** Resumo curto exibido nos cards de listagem. */
  excerpt: string
  /** Corpo do artigo em texto simples (parágrafos separados por \n\n). */
  content: string
  author: string
  /** Data de publicação em ISO 8601 (YYYY-MM-DD). */
  publishedAt: string
  tags: string[]
  /** Caminho local da imagem de capa em /public. */
  thumbnail: string
}

// ---------------------------------------------------------------------------
// Serviço (0.7.3) — as duas frentes de negócio da empresa.
// ---------------------------------------------------------------------------

export interface Service {
  id: string
  /** Usado em rotas dinâmicas futuras (/servicos/:slug). */
  slug: string
  title: string
  /** Frase curta exibida junto ao título (cards da home/serviços). */
  tagline: string
  description: string
  /**
   * Nome do ícone do lucide-react (ex.: 'PenTool', 'Code2'). Mantido como
   * string para os dados continuarem serializáveis quando vierem do banco —
   * o componente faz o mapa nome → ícone.
   */
  icon: string
  /** Diferenciais do serviço exibidos em destaque nos cards. */
  features: string[]
  /** O que o cliente recebe ao final do projeto. */
  deliverables: string[]
  /** Etapas do processo de trabalho (exibidas em ordem). */
  process: ProcessStep[]
  averageTime: string
}

// ---------------------------------------------------------------------------
// Contato (0.7.4) — dados do formulário de mensagem/orçamento.
// O schema de validação correspondente vive em `src/lib/validations.ts`.
// ---------------------------------------------------------------------------

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  /** Em qual frente o cliente tem interesse: 'prototipagem' | 'desenvolvimento'. */
  serviceType: ServiceType
}

// ---------------------------------------------------------------------------
// Institucional (0.7.5) — página "Quem Somos".
// ---------------------------------------------------------------------------

export interface CompanyInfo {
  name: string
  history: string
  mission: string
  vision: string
  values: { title: string; description: string }[]
  /** Números institucionais exibidos na página Quem Somos. */
  stats: StatItem[]
}

// ---------------------------------------------------------------------------
// Processo Seletivo (0.7.6) — página para futuros membros (Persona 3).
// ---------------------------------------------------------------------------

export interface SelectionProcess {
  title: string
  description: string
  /** Se false, a página deve mostrar "inscrições encerradas". */
  isOpen: boolean
  requirements: string[]
  schedule: SelectionProcessStep[]
  instructions: string[]
  /** Perguntas frequentes de quem quer se candidatar. */
  faq: FaqItem[]
}

// ---------------------------------------------------------------------------
// Usuário do CMS (0.7.7) — acesso restrito ao painel /admin.
// ---------------------------------------------------------------------------

export interface User {
  id: string
  name: string
  email: string
  /** 'admin' (diretoria) | 'editor' (desenvolvedores e marketing). */
  role: UserRole
}
