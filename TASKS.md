# Prototipe — Divisao de Tarefas de Desenvolvimento

> **Ultima atualizacao:** 20/09/2026
> **Versao do documento:** 1.0

## Indice

- Visao Geral do Projeto
- Estrutura de Equipe
- Convencoes
- Fase 0 — Fundacao do Projeto
- Fase 1 — Layout Global & Theme
- Fase 2 — Backend & API
- Fase 3 — Paginas Publicas (Juniores)
- Fase 4 — Componentes Compartilhados
- Fase 5 — CMS Admin
- Fase 6 — Integracao Mock para API
- Fase 7 — Polish & Performance
- Fluxo Git
- Calendario Estimado
- Checklists de Entrega

---

## Visao Geral do Projeto

Criar um site institucional moderno para a **Prototipe** (EJ de Montes Claros), unindo os dois segmentos de negocio:

1. **Prototipagem & UX** — Modelagem fisica com MDF, acrilico e filament printing
2. **Desenvolvimento de Software** — Aplicacoes e sites para clientes reais

### Stack Tecnologica

| Camada | Tecnologia |
|--------|-----------|
| Frontend | Vite + React 19 + TypeScript |
| Estilo | Tailwind CSS v4 + shadcn/ui (base-vega) |
| Forms | react-hook-form + zod |
| State | React Context + Zustand |
| Backend | Node.js + Express/Fastify |
| Banco | PostgreSQL |
| Deploy | Docker + Docker Compose |
| Testes | Vitest + @testing-library/react |

### Paginas do Site

| Pagina | Rota | Descricao |
|--------|------|-----------|
| Home | `/` | Landing page com hero, destaques de servicos, 3D models |
| Servicos | `/servicos` | Detalhamento dos dois segmentos de negocio |
| Quem Somos | `/quem-somos` | Historia, missao, visao, valores |
| Portfolio | `/portfolio` | Catalogo de projetos com filtros |
| Processo Seletivo | `/processo-seletivo` | Cronograma e instrucoes para novos membros |
| Blog | `/blog` | Artigos, cases, novidades |
| Blog (post) | `/blog/:slug` | Pagina individual de post |
| Contato | `/contato` | Formulario de mensagem e orcamento |
| Admin | `/admin` | Painel CMS restrito |

---

## Estrutura de Equipe

| Papel | Responsavel | Perfil | Foco |
|-------|-------------|--------|------|
| **Tech Lead** | Voce | Experiente | Backend, API, Auth, CMS, integracao, code review |
| **Junior A** | Dev junior | Aprendendo React + Tailwind do zero | Paginas estaticas, layout, home, blog |
| **Junior B** | Dev junior | Aprendendo React + Tailwind do zero | Paginas estaticas, forms guiados, portfolio, cards |

### Filosofia de Trabalho

- **Juniores constroem com mock data** ate o backend ficar pronto
- **Tech Lead construi o backend em paralelo** e integra depois
- Cada tarefa junior vem com **template de referencia** e **mock data pronta**
- **PR obrigatorio** para features grandes, commits direto para fixes pequenos

---

## Convencoes

### Nomes de Arquivos

```
src/
  pages/
    [NomeDaPagina]/
      index.tsx          # Componente da pagina
  components/
    custom/
      [Dominio]/
        [Componente].tsx
    layout/
      [Componente].tsx
    ui/                  # shadcn/ui (NAO MODIFICAR)
  hooks/
    use[Nome].ts
  contexts/
    [Nome]Context.tsx
  types/
    index.ts
  lib/
    utils.ts             # cn() ja existe
    mock-data.ts
    api.ts
```

### Padrao de Commit

```
feat: adicionar pagina Quem Somos
fix: corrigir padding do PortfolioCard
refactor: extrair BlogPostCard de Blog page
chore: atualizar dependencias
```

### Componentes shadcn/ui Disponiveis

> NAO MODIFICAR os arquivos em `src/components/ui/`. Eles sao tratados como dependencia.

Para customizar, criar um wrapper em `src/components/custom/` e usar `className`.

Componentes ja instalados: `button`
Componentes a instalar (Fase 0): `sheet`, `navigation-menu`, `dialog`, `separator`, `dropdown-menu`, `toggle`, `input`, `textarea`, `label`, `select`, `card`, `badge`, `skeleton`

---

## Fase 0 — Fundacao do Projeto

> **Responsavel:** Tech Lead
> **Duracao estimada:** 1-2 dias
> **Bloqueia:** Todas as outras fases

### 0.1 — Instalar Dependencias Frontend

**Arquivo:** `package.json`

```bash
npm install react-router-dom zustand react-hook-form zod @hookform/resolvers
```

**Subtarefas:**

- [ ] 0.1.1 — Instalar `react-router-dom` para rotas
- [ ] 0.1.2 — Instalar `zustand` para state management
- [ ] 0.1.3 — Instalar `react-hook-form` + `zod` + `@hookform/resolvers` para forms
- [ ] 0.1.4 — Rodar `npm install` e verificar que nao ha erros

---

### 0.2 — Criar Estrutura de Pastas

**Diretorio base:** `src/`

**Subtarefas:**

- [ ] 0.2.1 — Criar `src/pages/` com subpastas para cada pagina:
  - `src/pages/Home/`
  - `src/pages/Services/`
  - `src/pages/AboutUs/`
  - `src/pages/Portfolio/`
  - `src/pages/SelectionProcess/`
  - `src/pages/Blog/`
  - `src/pages/Contact/`
  - `src/pages/Admin/`
  - `src/pages/NotFound/`
- [ ] 0.2.2 — Criar `src/components/custom/` com subpastas:
  - `src/components/custom/Home/`
  - `src/components/custom/Services/`
  - `src/components/custom/Portfolio/`
  - `src/components/custom/Blog/`
  - `src/components/custom/Contact/`
  - `src/components/custom/Admin/`
- [ ] 0.2.3 — Criar `src/components/layout/`
- [ ] 0.2.4 — Criar `src/hooks/`
- [ ] 0.2.5 — Criar `src/contexts/`
- [ ] 0.2.6 — Criar `src/types/`
- [ ] 0.2.7 — Criar `src/assets/` com subpastas:
  - `src/assets/images/`
  - `src/assets/icons/`
  - `src/assets/3d/`

---

### 0.3 — Configurar React Router

**Arquivos:** `src/App.tsx`, `src/main.tsx`

**Subtarefas:**

- [ ] 0.3.1 — Criar `src/App.tsx` com `BrowserRouter` e `Routes`
- [ ] 0.3.2 — Mapear todas as 8 rotas publicas + rota 404
- [ ] 0.3.3 — Mapear rotas admin (`/admin/*`)
- [ ] 0.3.4 — Adicionar `Layout` como wrapper de todas as rotas publicas
- [ ] 0.3.5 — Testar que todas as rotas carregam sem erros

**Codigo de referencia:**

```tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/processo-seletivo" element={<SelectionProcess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="blog" element={<BlogManager />} />
          <Route path="portfolio" element={<PortfolioManager />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
```

---

### 0.4 — Criar Stubs de Paginas

**Diretorio:** `src/pages/`

Cada stub e um componente minimo que renderiza apenas um titulo. Serve para testar que as rotas funcionam.

**Subtarefas:**

- [ ] 0.4.1 — Criar `src/pages/Home/index.tsx` com `<h1>Home</h1>`
- [ ] 0.4.2 — Criar `src/pages/Services/index.tsx` com `<h1>Servicos</h1>`
- [ ] 0.4.3 — Criar `src/pages/AboutUs/index.tsx` com `<h1>Quem Somos</h1>`
- [ ] 0.4.4 — Criar `src/pages/Portfolio/index.tsx` com `<h1>Portfolio</h1>`
- [ ] 0.4.5 — Criar `src/pages/SelectionProcess/index.tsx` com `<h1>Processo Seletivo</h1>`
- [ ] 0.4.6 — Criar `src/pages/Blog/index.tsx` com `<h1>Blog</h1>`
- [ ] 0.4.7 — Criar `src/pages/Blog/[slug].tsx` com `<h1>Post</h1>`
- [ ] 0.4.8 — Criar `src/pages/Contact/index.tsx` com `<h1>Contato</h1>`
- [ ] 0.4.9 — Criar `src/pages/Admin/index.tsx` com `<h1>Admin Dashboard</h1>`
- [ ] 0.4.10 — Criar `src/pages/Admin/BlogManager.tsx` com `<h1>Blog Manager</h1>`
- [ ] 0.4.11 — Criar `src/pages/Admin/PortfolioManager.tsx` com `<h1>Portfolio Manager</h1>`
- [ ] 0.4.12 — Criar `src/pages/NotFound/index.tsx` com `<h1>404 - Pagina nao encontrada</h1>`

---

### 0.5 — Instalar Componentes shadcn/ui

**Comando:** `npx shadcn@latest add [componente]`

**Subtarefas:**

- [ ] 0.5.1 — Instalar `sheet` (menu mobile)
- [ ] 0.5.2 — Instalar `navigation-menu`
- [ ] 0.5.3 — Instalar `dialog`
- [ ] 0.5.4 — Instalar `separator`
- [ ] 0.5.5 — Instalar `dropdown-menu`
- [ ] 0.5.6 — Instalar `toggle`
- [ ] 0.5.7 — Instalar `input`
- [ ] 0.5.8 — Instalar `textarea`
- [ ] 0.5.9 — Instalar `label`
- [ ] 0.5.10 — Instalar `select`
- [ ] 0.5.11 — Instalar `card`
- [ ] 0.5.12 — Instalar `badge`
- [ ] 0.5.13 — Instalar `skeleton`

---

### 0.6 — Criar Mock Data

**Arquivo:** `src/lib/mock-data.ts`

**Subtarefas:**

- [ ] 0.6.1 — Criar `MOCK_SERVICES` com 2 objetos (Prototipagem & UX, Desenvolvimento de Software)
- [ ] 0.6.2 — Criar `MOCK_PORTFOLIO` com 3-4 items cobrindo ambos os segmentos
- [ ] 0.6.3 — Criar `MOCK_BLOG_POSTS` com 3 posts de exemplo
- [ ] 0.6.4 — Criar `MOCK_COMPANY` com dados institucionais (historia, missao, visao, valores)
- [ ] 0.6.5 — Criar `MOCK_SELECTION_PROCESS` com cronograma e instrucoes
- [ ] 0.6.6 — Criar schema `CONTACT_FORM_SCHEMA` com zod para validacao

**Estrutura do MOCK_PORTFOLIO:**

```ts
interface PortfolioItem {
  id: string
  slug: string
  client: string
  title: string
  serviceType: 'prototipagem' | 'desenvolvimento'
  secondaryCategory: 'web' | 'mobile' | 'sistema'
  thumbnail: string
  tags: string[]
  challenge: string
  visualSolution: string
  engineering: string
  result: string
  productStage?: string
  mainDeliverable?: string
  toolsStack?: string[]
  successMetrics?: string
  averageTime?: string
}
```

---

### 0.7 — Definir Types

**Arquivo:** `src/types/index.ts`

**Subtarefas:**

- [ ] 0.7.1 — Criar interface `PortfolioItem` (conforme 0.6.6)
- [ ] 0.7.2 — Criar interface `BlogPost` (id, slug, title, excerpt, content, author, publishedAt, tags, thumbnail)
- [ ] 0.7.3 — Criar interface `Service` (id, title, description, icon, features, deliverables)
- [ ] 0.7.4 — Criar interface `ContactFormData` (name, email, subject, message, serviceType)
- [ ] 0.7.5 — Criar interface `CompanyInfo` (name, mission, vision, values, history, stats)
- [ ] 0.7.6 — Criar interface `SelectionProcess` (schedule, requirements, faq)
- [ ] 0.7.7 — Criar interface `User` (id, name, email, role)

---

### 0.8 — Configurar Vitest

**Arquivo:** `vitest.config.ts`, `package.json`

**Subtarefas:**

- [ ] 0.8.1 — Instalar dependencias: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`
- [ ] 0.8.2 — Criar `vitest.config.ts` com configuracao do jsdom
- [ ] 0.8.3 — Adicionar scripts no `package.json`: `"test": "vitest"`, `"test:coverage": "vitest --coverage"`
- [ ] 0.8.4 — Criar `src/test-setup.ts` com imports do `@testing-library/jest-dom`
- [ ] 0.8.5 — Rodar `npm run test` para verificar que funciona

---

### 0.9 — Configurar .env.example

**Arquivo:** `.env.example`

**Subtarefas:**

- [ ] 0.9.1 — Criar `.env.example` com variaveis documentadas
- [ ] 0.9.2 — Verificar que `.env` esta no `.gitignore`

---

## Fase 1 — Layout Global & Theme

> **Responsavel:** Tech Lead (com ajuda dos juniores na integracao)
> **Duracao estimada:** 2-3 dias
> **Dependencia:** Fase 0 concluida
> **Bloqueia:** Todas as paginas

### 1.1 — ThemeContext

**Arquivo:** `src/contexts/ThemeContext.tsx`

**Subtarefas:**

- [ ] 1.1.1 — Criar `ThemeContext` com provider
- [ ] 1.1.2 — Implementar estado `theme` ('light' | 'dark')
- [ ] 1.1.3 — Implementar `toggleTheme()` que alterna e salva em `localStorage`
- [ ] 1.1.4 — Aplicar classe `.dark` no `<html>` quando tema escuro estiver ativo
- [ ] 1.1.5 — Ler tema salvo no `localStorage` ao carregar a aplicacao
- [ ] 1.1.6 — Detectar preferencia do sistema (`prefers-color-scheme`) como fallback

---

### 1.2 — Hook useTheme

**Arquivo:** `src/hooks/useTheme.ts`

**Subtarefas:**

- [ ] 1.2.1 — Criar hook `useTheme()` que retorna `{ theme, toggleTheme, isDark }`
- [ ] 1.2.2 — Adicionar tratamento de erro caso seja usado fora do Provider

---

### 1.3 — Header

**Arquivo:** `src/components/layout/Header.tsx`

**Subtarefas:**

- [ ] 1.3.1 — Criar componente Header com:
  - Logo/nome "Prototipe" a esquerda
  - Links de navegacao: Home, Servicos, Quem Somos, Portfolio, Blog, Contato
  - Botao de theme toggle a direita
- [ ] 1.3.2 — Implementar menu mobile com componente `Sheet` do shadcn/ui (hamburger)
- [ ] 1.3.3 — Adicionar active state nos links com base na rota atual (`useLocation`)
- [ ] 1.3.4 — Garantir responsividade: desktop = horizontal, mobile = hamburger
- [ ] 1.3.5 — Estilizar com Tailwind: `sticky top-0 z-50`, backdrop blur, sombra sutil

---

### 1.4 — Footer

**Arquivo:** `src/components/layout/Footer.tsx`

**Subtarefas:**

- [ ] 1.4.1 — Criar Footer com 3 colunas:
  - Coluna 1: Logo + descricao curta
  - Coluna 2: Links uteis (Quem Somos, Portfolio, Contato)
  - Coluna 3: Redes sociais + "Quero fazer parte"
- [ ] 1.4.2 — Adicionar copyright: "2026 Prototipe — EJ Montes Claros"
- [ ] 1.4.3 — Estilizar com Tailwind: fundo diferenciado, padding, responsivo (empilhar no mobile)

---

### 1.5 — Layout Principal

**Arquivo:** `src/components/layout/Layout.tsx`

**Subtarefas:**

- [ ] 1.5.1 — Criar componente Layout que renderiza `<Header />` + `<Outlet />` + `<Footer />`
- [ ] 1.5.2 — Garantir que o `<main>` tem `min-h-screen` para o footer ficar sempre no bottom
- [ ] 1.5.3 — Conectar ao ThemeContext para aplicar classe dark no body

---

### 1.6 — ThemeToggle Component

**Arquivo:** `src/components/custom/ThemeToggle.tsx`

**Subtarefas:**

- [ ] 1.6.1 — Criar botao que usa `useTheme()` para alternar tema
- [ ] 1.6.2 — Mostrar icone `Sun` (lucide-react) quando esta dark, `Moon` quando light
- [ ] 1.6.3 — Adicionar animacao de rotacao ao trocar
- [ ] 1.6.4 — Integrar no Header

---

### 1.7 — Testes do ThemeContext

**Arquivo:** `src/contexts/ThemeContext.test.tsx`

**Subtarefas:**

- [ ] 1.7.1 — Testar que o tema inicial e 'light'
- [ ] 1.7.2 — Testar que `toggleTheme()` alterna o tema
- [ ] 1.7.3 — Testar que o tema e persistido no localStorage
- [ ] 1.7.4 — Testar que a classe `.dark` e aplicada no HTML

---

## Fase 2 — Backend & API

> **Responsavel:** Tech Lead (sozinho)
> **Duracao estimada:** 5-8 dias
> **Dependencia:** Nenhuma (pode iniciar em paralelo com Fase 0-1)
> **Nota:** Os juniores NAO trabalham nesta fase. Eles usam mock data.

### 2.1 — Setup do Projeto Backend

**Diretorio:** `/backend` (na raiz do repositorio)

**Subtarefas:**

- [ ] 2.1.1 — Criar pasta `backend/` na raiz do projeto
- [ ] 2.1.2 — Inicializar `package.json` com TypeScript
- [ ] 2.1.3 — Instalar dependencias: `express`, `cors`, `dotenv`, `jsonwebtoken`, `bcryptjs`, `pg`, `zod`
- [ ] 2.1.4 — Instalar devDependencies: `typescript`, `@types/express`, `@types/cors`, `@types/jsonwebtoken`, `@types/bcryptjs`, `@types/pg`, `tsx`, `vitest`
- [ ] 2.1.5 — Configurar `tsconfig.json` para o backend
- [ ] 2.1.6 — Criar estrutura de pastas:
  ```
  backend/
    src/
      routes/
      middleware/
      database/
      services/
      types/
      index.ts
    Dockerfile
    package.json
  ```
- [ ] 2.1.7 — Configurar `compose.yml` para rodar o backend na porta 8000
- [ ] 2.1.8 — Criar script de dev com `tsx watch src/index.ts`

---

### 2.2 — Modelagem do Banco de Dados

**Arquivo:** `backend/src/database/schema.sql`

**Subtarefas:**

- [ ] 2.2.1 — Criar tabela `users` (id, name, email, password_hash, role, created_at)
- [ ] 2.2.2 — Criar tabela `categories` (id, name, slug, type)
- [ ] 2.2.3 — Criar tabela `portfolio_items` (id, slug, client, title, service_type, secondary_category, thumbnail, tags, challenge, visual_solution, engineering, result, product_stage, main_deliverable, tools_stack, success_metrics, average_time, created_at, updated_at)
- [ ] 2.2.4 — Criar tabela `blog_posts` (id, slug, title, excerpt, content, author_id, published_at, tags, thumbnail, created_at, updated_at)
- [ ] 2.2.5 — Criar tabela `contacts` (id, name, email, subject, message, service_type, status, created_at)
- [ ] 2.2.6 — Criar tabela `company_info` (id, field_name, field_value, updated_at)
- [ ] 2.2.7 — Adicionar foreign keys e indices
- [ ] 2.2.8 — Criar migrations setup (pode ser com npm scripts simples)

---

### 2.3 — Autenticacao

**Arquivo:** `backend/src/routes/auth.ts`, `backend/src/middleware/auth.ts`

**Subtarefas:**

- [ ] 2.3.1 — Criar rota `POST /api/auth/login` com validacao de email/senha
- [ ] 2.3.2 — Implementar geracao de JWT com expiracao
- [ ] 2.3.3 — Criar middleware `authenticate` que valida o token
- [ ] 2.3.4 — Criar middleware `authorize` que verifica role (admin)
- [ ] 2.3.5 — Criar rota `POST /api/auth/register` (apenas para setup inicial)
- [ ] 2.3.6 — Criar seed de usuario admin padrao

---

### 2.4 — API de Portfolio

**Arquivo:** `backend/src/routes/portfolio.ts`

**Subtarefas:**

- [ ] 2.4.1 — Criar `GET /api/portfolio` — listar todos (publico, com filtros opcionais: serviceType, category)
- [ ] 2.4.2 — Criar `GET /api/portfolio/:slug` — buscar por slug (publico)
- [ ] 2.4.3 — Criar `POST /api/portfolio` — criar item (auth required)
- [ ] 2.4.4 — Criar `PUT /api/portfolio/:id` — atualizar item (auth required)
- [ ] 2.4.5 — Criar `DELETE /api/portfolio/:id` — deletar item (auth required)
- [ ] 2.4.6 — Adicionar validacao com zod em todos os endpoints
- [ ] 2.4.7 — Implementar paginacao no `GET /api/portfolio`

---

### 2.5 — API de Blog

**Arquivo:** `backend/src/routes/blog.ts`

**Subtarefas:**

- [ ] 2.5.1 — Criar `GET /api/blog` — listar posts (publico, com paginacao)
- [ ] 2.5.2 — Criar `GET /api/blog/:slug` — buscar post por slug (publico)
- [ ] 2.5.3 — Criar `POST /api/blog` — criar post (auth required)
- [ ] 2.5.4 — Criar `PUT /api/blog/:id` — atualizar post (auth required)
- [ ] 2.5.5 — Criar `DELETE /api/blog/:id` — deletar post (auth required)
- [ ] 2.5.6 — Adicionar validacao com zod

---

### 2.6 — API de Contato

**Arquivo:** `backend/src/routes/contact.ts`

**Subtarefas:**

- [ ] 2.6.1 — Criar `POST /api/contact` — enviar mensagem (publico)
- [ ] 2.6.2 — Validar dados com zod (name, email, subject, message, serviceType)
- [ ] 2.6.3 — Salvar no banco de dados
- [ ] 2.6.4 — Configurar envio de email via SMTP (usar nodemailer ou similar)
- [ ] 2.6.5 — Criar `GET /api/contact` — listar contatos (auth required)
- [ ] 2.6.6 — Criar `PUT /api/contact/:id/status` — atualizar status (auth required)

---

### 2.7 — API de Empresa

**Arquivo:** `backend/src/routes/company.ts`

**Subtarefas:**

- [ ] 2.7.1 — Criar `GET /api/company` — retornar dados institucionais (publico)
- [ ] 2.7.2 — Criar `PUT /api/company` — atualizar dados (auth required)
- [ ] 2.7.3 — Criar `GET /api/selection-process` — retornar dados do processo seletivo (publico)
- [ ] 2.7.4 — Criar `PUT /api/selection-process` — atualizar dados (auth required)

---

### 2.8 — Seed Script

**Arquivo:** `backend/src/seed.ts`

**Subtarefas:**

- [ ] 2.8.1 — Criar script que popula o banco com os mesmos dados do `mock-data.ts` do frontend
- [ ] 2.8.2 — Inserir usuario admin padrao (email: admin@prototipe.com, senha: gerada com bcrypt)
- [ ] 2.8.3 — Inserir categorias padrao (Prototipagem, Desenvolvimento, Web, Mobile, Sistema)
- [ ] 2.8.4 — Inserir 3-4 portfolio items de exemplo
- [ ] 2.8.5 — Inserir 3 blog posts de exemplo
- [ ] 2.8.6 — Inserir dados da empresa (missao, visao, valores)
- [ ] 2.8.7 — Criar npm script `"seed": "tsx src/seed.ts"`

---

### 2.9 — Testes do Backend

**Diretorio:** `backend/src/**/*.test.ts`

**Subtarefas:**

- [ ] 2.9.1 — Testar rotas de auth (login, registro, token validation)
- [ ] 2.9.2 — Testar rotas de portfolio (CRUD completo)
- [ ] 2.9.3 — Testar rotas de blog (CRUD completo)
- [ ] 2.9.4 — Testar rota de contato (validacao, persistencia)
- [ ] 2.9.5 — Testar middlewares de autenticacao e autorizacao

---

## Fase 3 — Paginas Publicas (Juniores)

> **Responsavel:** Junior A e Junior B
> **Duracao estimada:** 5-7 dias
> **Dependencia:** Fases 0 e 1 concluidas
> **Nota:** Todas as paginas usam mock data. Integracao com API vem na Fase 6.

### Junior A — Paginas Institucionais + Blog

**Filosofia:** Estas sao as paginas mais estaticas, ideais para aprender JSX, Tailwind e componentes.

---

#### 3A.1 — Pagina Quem Somos

**Arquivo:** `src/pages/AboutUs/index.tsx`
**Mock data:** `MOCK_COMPANY`

**Subtarefas:**

- [ ] 3A.1.1 — Criar layout da pagina com secao hero (titulo + subtitulo)
- [ ] 3A.1.2 — Criar secao "Nossa Historia" com paragrafos de texto
- [ ] 3A.1.3 — Criar secao "Missao, Visao e Valores" com cards ou grid
- [ ] 3A.1.4 — Criar secao "Numeros" com estatisticas (anos de vida, projetos, membros)
- [ ] 3A.1.5 — Importar dados de `MOCK_COMPANY` e renderizar dinamicamente
- [ ] 3A.1.6 — Garantir responsividade (empilhar secoes no mobile)
- [ ] 3A.1.7 — Commit com mensagem `feat: add About Us page`

**Template de referencia:** Copiar a estrutura basica do `button.tsx` para entender como componentes funcionam.

**O que vai aprender:** JSX, Tailwind spacing/typography, renderizacao de dados estaticos.

---

#### 3A.2 — Pagina Processo Seletivo

**Arquivo:** `src/pages/SelectionProcess/index.tsx`
**Mock data:** `MOCK_SELECTION_PROCESS`

**Subtarefas:**

- [ ] 3A.2.1 — Criar secao hero com titulo "Processo Seletivo"
- [ ] 3A.2.2 — Criar secao "Cronograma" com timeline ou lista de etapas
- [ ] 3A.2.3 — Criar secao "Requisitos" com lista de documentos/requisitos
- [ ] 3A.2.4 — Criar secao "Perguntas Frequentes" com componente acordeao
- [ ] 3A.2.5 — Importar dados de `MOCK_SELECTION_PROCESS`
- [ ] 3A.2.6 — Garantir responsividade
- [ ] 3A.2.7 — Commit com mensagem `feat: add Selection Process page`

**O que vai aprender:** Listas com `.map()`, Tailwind grid, secoes com cores diferentes.

---

#### 3A.3 — Blog Listing

**Arquivo:** `src/pages/Blog/index.tsx`
**Mock data:** `MOCK_BLOG_POSTS`

**Subtarefas:**

- [ ] 3A.3.1 — Criar secao hero com titulo "Blog"
- [ ] 3A.3.2 — Criar grid responsivo de blog post cards
- [ ] 3A.3.3 — Mapear `MOCK_BLOG_POSTS` para renderizar um `BlogPostCard` para cada post
- [ ] 3A.3.4 — Formatar data de publicacao (usar `Date.toLocaleDateString('pt-BR')`)
- [ ] 3A.3.5 — Garantir responsividade (1 coluna mobile, 2 tablet, 3 desktop)
- [ ] 3A.3.6 — Commit com mensagem `feat: add Blog listing page`

**O que vai aprender:** Mapear arrays (`.map()`), cards com imagem, data formatada.

---

#### 3A.4 — Blog Post Detail

**Arquivo:** `src/pages/Blog/[slug].tsx`
**Mock data:** `MOCK_BLOG_POSTS`

**Subtarefas:**

- [ ] 3A.4.1 — usar `useParams()` para obter o slug da URL
- [ ] 3A.4.2 — Buscar post correspondente no `MOCK_BLOG_POSTS` pelo slug
- [ ] 3A.4.3 — Criar layout de post com titulo, autor, data, tags e conteudo
- [ ] 3A.4.4 — Tratar caso o post nao seja encontrado (mostrar 404 ou mensagem)
- [ ] 3A.4.5 — Criar link de volta para o blog
- [ ] 3A.4.6 — Garantir responsividade
- [ ] 3A.4.7 — Commit com mensagem `feat: add Blog post detail page`

**O que vai aprender:** `useParams()`, ler mock data por slug, conteudo rich-text.

---

#### 3A.5 — BlogPostCard Component

**Arquivo:** `src/components/custom/Blog/BlogPostCard.tsx`

**Subtarefas:**

- [ ] 3A.5.1 — Criar componente que recebe props: `thumbnail`, `title`, `excerpt`, `publishedAt`, `slug`
- [ ] 3A.5.2 — Estilizar card com Tailwind (hover effect, borda, sombra)
- [ ] 3A.5.3 — Usar componente `Badge` do shadcn/ui para tags
- [ ] 3A.5.4 — Adicionar link para a pagina do post (`<Link to={/blog/${slug}}>`)
- [ ] 3A.5.5 — Extrair este componente da pagina Blog (refatoracao)
- [ ] 3A.5.6 — Commit com mensagem `feat: extract BlogPostCard component`

**O que vai aprender:** Criar componente reutilizavel, props tipadas, Tailwind card.

---

### Junior B — Paginas de Servico + Contact + Portfolio

**Filosofia:** Paginas com mais interacao (filtros, formulario), mas ainda com suporte guiado.

---

#### 3B.1 — Pagina Servicos

**Arquivo:** `src/pages/Services/index.tsx`
**Mock data:** `MOCK_SERVICES`

**Subtarefas:**

- [ ] 3B.1.1 — Criar secao hero com titulo "Nossos Servicos"
- [ ] 3B.1.2 — Criar grid de 2 colunas (desktop) para os dois segmentos
- [ ] 3B.1.3 — Renderizar um `ServiceCard` para cada servico
- [ ] 3B.1.4 — Importar dados de `MOCK_SERVICES`
- [ ] 3B.1.5 — Garantir responsividade (1 coluna mobile, 2 desktop)
- [ ] 3B.1.6 — Commit com mensagem `feat: add Services page`

**O que vai aprender:** Grid de cards, layout com Tailwind, mapear servicos.

---

#### 3B.2 — ServiceCard Component

**Arquivo:** `src/components/custom/Services/ServiceCard.tsx`

**Subtarefas:**

- [ ] 3B.2.1 — Criar componente que recebe props: `title`, `description`, `icon`, `features`, `deliverables`
- [ ] 3B.2.2 — Usar icone do lucide-react (ex: `Layers` para prototipagem, `Code` para dev)
- [ ] 3B.2.3 — Estilizar card com Tailwind (fundo diferenciado, hover)
- [ ] 3B.2.4 — Renderizar lista de features com checkmarks
- [ ] 3B.2.5 — Adicionar link "Saiba mais" ou CTA
- [ ] 3B.2.6 — Commit com mensagem `feat: add ServiceCard component`

**O que vai aprender:** Props tipadas, icones lucide-react, composicao de componentes.

---

#### 3B.3 — Pagina Contato

**Arquivo:** `src/pages/Contact/index.tsx`

**Subtarefas:**

- [ ] 3B.3.1 — Criar layout com 2 colunas: formulario + informacoes de contato
- [ ] 3B.3.2 — Na coluna de informacoes: endereco, email, telefone, redes sociais
- [ ] 3B.3.3 — Na coluna do formulario: renderizar `ContactForm`
- [ ] 3B.3.4 — Garantir responsividade (empilhar no mobile)
- [ ] 3B.3.5 — Commit com mensagem `feat: add Contact page`

---

#### 3B.4 — ContactForm Component

**Arquivo:** `src/components/custom/Contact/ContactForm.tsx`
**Mock data:** `CONTACT_FORM_SCHEMA` (zod)

**Subtarefas:**

- [ ] 3B.4.1 — Configurar `react-hook-form` com resolver zod
- [ ] 3B.4.2 — Criar campos: nome (input), email (input), assunto (input), tipo de servico (select), mensagem (textarea)
- [ ] 3B.4.3 — Adicionar validacao em tempo real (onBlur)
- [ ] 3B.4.4 — Criar estados: `isSubmitting`, `isSuccess`, `error`
- [ ] 3B.4.5 — Simular submit com `setTimeout` (mock — nao ha backend ainda)
- [ ] 3B.4.6 — Mostrar mensagem de sucesso apos submit
- [ ] 3B.4.7 — Mostrar erros de validacao abaixo de cada campo
- [ ] 3B.4.8 — Usar componentes `Input`, `Textarea`, `Label`, `Select` do shadcn/ui
- [ ] 3B.4.9 — Commit com mensagem `feat: add ContactForm with validation`

**Template de referencia:**

```tsx
// Exemplo simplificado - copiar e adaptar
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email invalido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* campos aqui */}
    </form>
  )
}
```

**O que vai aprender:** Formulario com react-hook-form, validacao zod, estados de loading/sucesso/erro.

---

#### 3B.5 — Pagina Portfolio

**Arquivo:** `src/pages/Portfolio/index.tsx`
**Mock data:** `MOCK_PORTFOLIO`

**Subtarefas:**

- [ ] 3B.5.1 — Criar secao hero com titulo "Portfolio"
- [ ] 3B.5.2 — Criar secao de filtros com botoes toggle (Prototipagem, Desenvolvimento, Todos)
- [ ] 3B.5.3 — Implementar estado local para filtro ativo (`useState`)
- [ ] 3B.5.4 — Filtrar `MOCK_PORTFOLIO` com base no filtro selecionado
- [ ] 3B.5.5 — Criar grid responsivo de `PortfolioCard`
- [ ] 3B.5.6 — Garantir responsividade
- [ ] 3B.5.7 — Commit com mensagem `feat: add Portfolio page with filters`

**O que vai aprender:** `.map()`, estado local para filtros, cards dinamicos.

---

## Fase 4 — Componentes Compartilhados

> **Responsavel:** Junior A e Junior B (em paralelo)
> **Duracao estimada:** 3-5 dias
> **Dependencia:** Fase 3 parcialmente concluida (pelo menos 2 paginas cada)
> **Objetivo:** Agora que eles ja criaram paginas isoladas, vamos refatorar em componentes reutilizaveis.

### 4.1 — PortfolioCard

**Arquivo:** `src/components/custom/Portfolio/PortfolioCard.tsx`
**Responsavel:** Junior B

**Subtarefas:**

- [ ] 4.1.1 — Criar componente com props: `thumbnail`, `title`, `client`, `serviceType`, `tags`, `slug`
- [ ] 4.1.2 — Adicionar badge de categoria (Prototipagem ou Desenvolvimento)
- [ ] 4.1.3 — Adicionar tags tecnicas (React, Figma, etc)
- [ ] 4.1.4 — Estilizar com Tailwind (hover, sombra, borda)
- [ ] 4.1.5 — Link para pagina de detalhe do portfolio
- [ ] 4.1.6 — Commit `feat: add PortfolioCard component`

---

### 4.2 — PortfolioFilter

**Arquivo:** `src/components/custom/Portfolio/PortfolioFilter.tsx`
**Responsavel:** Junior B

**Subtarefas:**

- [ ] 4.2.1 — Criar componente que recebe `activeFilter` e `onFilterChange` como props
- [ ] 4.2.2 — Renderizar botoes para: Todos, Prototipagem, Desenvolvimento
- [ ] 4.2.3 — Estilizar botao ativo com cor diferenciada
- [ ] 4.2.4 — Commit `feat: add PortfolioFilter component`

---

### 4.3 — Hero Section (Home)

**Arquivo:** `src/components/custom/Home/HeroSection.tsx`
**Responsavel:** Junior A

**Subtarefas:**

- [ ] 4.3.1 — Criar secao hero com titulo grande "Prototipe"
- [ ] 4.3.2 — Adicionar subtitulo institucional
- [ ] 4.3.3 — Criar 2 CTAs: "Contratar Servico" (primario) + "Quero fazer parte" (secundario)
- [ ] 4.3.4 — Estilizar com gradientes Tailwind, padding generoso
- [ ] 4.3.5 — Garantir responsividade (titulo menor no mobile)
- [ ] 4.3.6 — Commit `feat: add HeroSection component`

---

### 4.4 — Services Highlights (Home)

**Arquivo:** `src/components/custom/Home/ServicesHighlights.tsx`
**Responsavel:** Junior B

**Subtarefas:**

- [ ] 4.4.1 — Criar secao com titulo "Nossos Servicos"
- [ ] 4.4.2 — Reutilizar `ServiceCard` para mostrar os 2 servicos
- [ ] 4.4.3 — Link "Ver todos os servicos" para a pagina de servicos
- [ ] 4.4.4 — Commit `feat: add ServicesHighlights to Home`

---

### 4.5 — Featured Portfolio (Home)

**Arquivo:** `src/components/custom/Home/FeaturedPortfolio.tsx`
**Responsavel:** Junior A

**Subtarefas:**

- [ ] 4.5.1 — Criar secao com titulo "Destaques do Portfolio"
- [ ] 4.5.2 — Mostrar 3-4 portfolio items em destaque
- [ ] 4.5.3 — Reutilizar `PortfolioCard`
- [ ] 4.5.4 — Link "Ver portfolio completo"
- [ ] 4.5.5 — Commit `feat: add FeaturedPortfolio to Home`

---

### 4.6 — Join CTA (Home)

**Arquivo:** `src/components/custom/Home/JoinCTA.tsx`
**Responsavel:** Junior A

**Subtarefas:**

- [ ] 4.6.1 — Criar secao chamativa para recrutamento
- [ ] 4.6.2 — Titulo "Quero fazer parte da Prototipe"
- [ ] 4.6.3 — CTA link para pagina de Processo Seletivo
- [ ] 4.6.4 — Estilizar com cor de destaque
- [ ] 4.6.5 — Commit `feat: add JoinCTA to Home`

---

### 4.7 — Home Page Assembly

**Arquivo:** `src/pages/Home/index.tsx`
**Responsavel:** Junior A + Junior B (juntos)

**Subtarefas:**

- [ ] 4.7.1 — Importar todos os componentes da Home
- [ ] 4.7.2 — Compor: `HeroSection` + `ServicesHighlights` + `FeaturedPortfolio` + `JoinCTA`
- [ ] 4.7.3 — Testar que a pagina monta corretamente
- [ ] 4.7.4 — Ajustar espacamento entre secoes
- [ ] 4.7.5 — Commit `feat: assemble Home page with all sections`

---

## Fase 5 — CMS Admin

> **Responsavel:** Tech Lead (sozinho)
> **Duracao estimada:** 4-6 dias
> **Dependencia:** Fase 1 concluida (layout, theme)
> **Nota:** Pode iniciar em paralelo com Fase 3 dos juniores

### 5.1 — Admin Layout

**Arquivo:** `src/components/layout/AdminLayout.tsx`

**Subtarefas:**

- [ ] 5.1.1 — Criar layout com sidebar de navegacao
- [ ] 5.1.2 — Adicionar links: Dashboard, Blog, Portfolio, Contatos
- [ ] 5.1.3 — Proteger rotas (verificar autenticacao)
- [ ] 5.1.4 — Redirecionar para login se nao autenticado
- [ ] 5.1.5 — Estilizar sidebar responsiva (colapsavel no mobile)

---

### 5.2 — Auth Context

**Arquivo:** `src/contexts/AuthContext.tsx`, `src/hooks/useAuth.ts`

**Subtarefas:**

- [ ] 5.2.1 — Criar `AuthContext` com provider
- [ ] 5.2.2 — Implementar `login(email, password)` que chama a API
- [ ] 5.2.3 — Implementar `logout()`
- [ ] 5.2.4 — Persistir token no localStorage
- [ ] 5.2.5 — Criar hook `useAuth()` com `user`, `login`, `logout`, `isAuthenticated`
- [ ] 5.2.6 — Criar protecao de rotas admin

---

### 5.3 — Login Page

**Arquivo:** `src/pages/Admin/Login.tsx`

**Subtarefas:**

- [ ] 5.3.1 — Criar formulario de login (email + senha)
- [ ] 5.3.2 — Integrar com `useAuth().login()`
- [ ] 5.3.3 — Tratar erros de credenciais
- [ ] 5.3.4 — Redirecionar para dashboard apos sucesso

---

### 5.4 — Admin Dashboard

**Arquivo:** `src/pages/Admin/index.tsx`

**Subtarefas:**

- [ ] 5.4.1 — Criar cards de metricas: total posts, portfolio items, contatos
- [ ] 5.4.2 — Buscar dados da API (ou mock)
- [ ] 5.4.3 — Criar links rapidos para gerenciamento
- [ ] 5.4.4 — Estilizar com grid de metricas

---

### 5.5 — Blog Manager

**Arquivo:** `src/pages/Admin/BlogManager.tsx`

**Subtarefas:**

- [ ] 5.5.1 — Criar tabela com lista de posts (titulo, autor, data, status)
- [ ] 5.5.2 — Adicionar botoes: Criar novo, Editar, Deletar
- [ ] 5.5.3 — Implementar delete com confirmacao (dialog)
- [ ] 5.5.4 — Link para pagina de criacao/edicao

---

### 5.6 — Blog Post Form

**Arquivo:** `src/components/custom/Admin/BlogPostForm.tsx`

**Subtarefas:**

- [ ] 5.6.1 — Criar formulario com react-hook-form + zod
- [ ] 5.6.2 — Campos: titulo, slug (auto-gerado), excerpt, conteudo (textarea rich-text), tags, thumbnail URL
- [ ] 5.6.3 — Modo criar e modo editar (preencher com dados existentes)
- [ ] 5.6.4 — Submeter para API (POST ou PUT)
- [ ] 5.6.5 — Tratar sucesso e erro

---

### 5.7 — Portfolio Manager

**Arquivo:** `src/pages/Admin/PortfolioManager.tsx`

**Subtarefas:**

- [ ] 5.7.1 — Criar tabela com lista de portfolio items
- [ ] 5.7.2 — Adicionar botoes: Criar novo, Editar, Deletar
- [ ] 5.7.3 — Implementar delete com confirmacao

---

### 5.8 — Portfolio Form

**Arquivo:** `src/components/custom/Admin/PortfolioForm.tsx`

**Subtarefas:**

- [ ] 5.8.1 — Criar formulario com react-hook-form + zod
- [ ] 5.8.2 — Campos: client, title, serviceType, secondaryCategory, thumbnail, tags, challenge, visualSolution, engineering, result
- [ ] 5.8.3 — Campos adicionais: productStage, mainDeliverable, toolsStack, successMetrics, averageTime
- [ ] 5.8.4 — Modo criar e modo editar
- [ ] 5.8.5 — Submeter para API

---

### 5.9 — Contatos Manager

**Arquivo:** `src/pages/Admin/ContactManager.tsx`

**Subtarefas:**

- [ ] 5.9.1 — Criar tabela com lista de contatos (nome, email, assunto, data, status)
- [ ] 5.9.2 — Adicionar filtro por status (novo, lido, respondido)
- [ ] 5.9.3 — Marcar como lido ao clicar

---

## Fase 6 — Integracao Mock para API

> **Responsavel:** Tech Lead
> **Duracao estimada:** 2-3 dias
> **Dependencia:** Fase 2 (backend) e Fase 3 (paginas) concluidas
> **Objetivo:** Substituir todos os mocks por chamadas reais a API

### 6.1 — API Client

**Arquivo:** `src/lib/api.ts`

**Subtarefas:**

- [ ] 6.1.1 — Criar instancia axios com `VITE_API_BASE_URL`
- [ ] 6.1.2 — Adicionar interceptor para adicionar token de auth
- [ ] 6.1.3 — Criar funcoes: `api.get()`, `api.post()`, `api.put()`, `api.delete()`

---

### 6.2 — Hooks de Dados

**Arquivo:** `src/hooks/`

**Subtarefas:**

- [ ] 6.2.1 — Criar `usePortfolio()` que busca `GET /api/portfolio`
- [ ] 6.2.2 — Criar `useBlogPosts()` que busca `GET /api/blog`
- [ ] 6.2.3 — Criar `useBlogPost(slug)` que busca `GET /api/blog/:slug`
- [ ] 6.2.4 — Criar `useCompany()` que busca `GET /api/company`
- [ ] 6.2.5 — Criar `useContactSubmit()` que faz `POST /api/contact`
- [ ] 6.2.6 — Cada hook deve ter: `data`, `loading`, `error` states

---

### 6.3 — Substituir Mocks

**Arquivos:** Todas as paginas publicas

**Subtarefas:**

- [ ] 6.3.1 — Atualizar `src/pages/AboutUs/index.tsx` para usar `useCompany()`
- [ ] 6.3.2 — Atualizar `src/pages/Services/index.tsx` para usar `usePortfolio()` filtrado
- [ ] 6.3.3 — Atualizar `src/pages/Portfolio/index.tsx` para usar `usePortfolio()`
- [ ] 6.3.4 — Atualizar `src/pages/Blog/index.tsx` para usar `useBlogPosts()`
- [ ] 6.3.5 — Atualizar `src/pages/Blog/[slug].tsx` para usar `useBlogPost(slug)`
- [ ] 6.3.6 — Atualizar `src/pages/SelectionProcess/index.tsx` para usar `useCompany()`
- [ ] 6.3.7 — Atualizar `src/components/custom/Contact/ContactForm.tsx` para usar `useContactSubmit()`
- [ ] 6.3.8 — Atualizar `src/pages/Home/index.tsx` para usar hooks de dados

---

### 6.4 — Error Boundaries

**Arquivo:** `src/components/custom/ErrorBoundary.tsx`

**Subtarefas:**

- [ ] 6.4.1 — Criar componente ErrorBoundary que captura erros de renderizacao
- [ ] 6.4.2 — Mostrar mensagem amigavel com botao de retry
- [ ] 6.4.3 — Envolver rotas principais com ErrorBoundary

---

### 6.5 — Loading States

**Arquivo:** `src/components/custom/`

**Subtarefas:**

- [ ] 6.5.1 — Criar skeleton para BlogPostCard
- [ ] 6.5.2 — Criar skeleton para PortfolioCard
- [ ] 6.5.3 — Criar skeleton para pagina de detalhe
- [ ] 6.5.4 — Mostrar skeletons durante carregamento dos hooks

---

## Fase 7 — Polish & Performance

> **Responsavel:** Todos (cada um suas tarefas)
> **Duracao estimada:** 3-4 dias
> **Dependencia:** Fases 3-6 parcialmente concluidas

### 7.1 — Theme Toggle Integration (Junior A)

**Subtarefas:**

- [ ] 7.1.1 — Conectar Header ao ThemeContext
- [ ] 7.1.2 — Testar que o toggle funciona em todas as paginas
- [ ] 7.1.3 — Verificar que o tema e persistido

---

### 7.2 — Responsive Audit (Junior B)

**Subtarefas:**

- [ ] 7.2.1 — Testar todas as paginas em 320px (mobile)
- [ ] 7.2.2 — Testar todas as paginas em 768px (tablet)
- [ ] 7.2.3 — Testar todas as paginas em 1024px (desktop pequeno)
- [ ] 7.2.4 — Testar todas as paginas em 1440px (desktop)
- [ ] 7.2.5 — Documentar e corrigir problemas encontrados

---

### 7.3 — Animacoes Basicas (Junior A)

**Arquivo:** `src/hooks/useInView.ts`

**Subtarefas:**

- [ ] 7.3.1 — Criar hook `useInView()` com Intersection Observer
- [ ] 7.3.2 — Adicionar animacao de fade-in nas secoes da Home
- [ ] 7.3.3 — Usar classes Tailwind: `opacity-0`, `opacity-100`, `transition-opacity`
- [ ] 7.3.4 — Garantir que animacoes nao consomem muita performance

---

### 7.4 — SEO Basico (Tech Lead)

**Subtarefas:**

- [ ] 7.4.1 — Atualizar `index.html` com titulo generico
- [ ] 7.4.2 — Adicionar meta tags por pagina (title, description)
- [ ] 7.4.3 — Usar semantic HTML (nav, main, article, section, footer)
- [ ] 7.4.4 — Adicionar alt texts em todas as imagens

---

### 7.5 — Testes Unitarios (Tech Lead)

**Subtarefas:**

- [ ] 7.5.1 — Testar hook `useTheme()`
- [ ] 7.5.2 — Testar schemas zod (contact form, portfolio, blog)
- [ ] 7.5.3 — Testar componente `ContactForm` (validacao)
- [ ] 7.5.4 — Testar componente `PortfolioFilter` (filtragem)
- [ ] 7.5.5 — Rodar `npm run test:coverage` e verificar cobertura minima

---

### 7.6 — 404 Page (Junior A)

**Arquivo:** `src/pages/NotFound/index.tsx`

**Subtarefas:**

- [ ] 7.6.1 — Criar pagina de erro 404 com mensagem amigavel
- [ ] 7.6.2 — Adicionar link de volta para Home
- [ ] 7.6.3 — Estilizar com centralizacao e icone

---

### 7.7 — Bundle Optimization (Tech Lead)

**Subtarefas:**

- [ ] 7.7.1 — Adicionar `React.lazy()` nas rotas de paginas
- [ ] 7.7.2 — Adicionar `<Suspense>` com fallback de loading
- [ ] 7.7.3 — Rodar `npm run build` e verificar tamanho do bundle
- [ ] 7.7.4 — Verificar que nao ha imports circulares

---

### 7.8 — Accessibility Audit (Junior B)

**Subtarefas:**

- [ ] 7.8.1 — Verificar contraste de cores (ferramenta: Chrome DevTools)
- [ ] 7.8.2 — Verificar ARIA labels em componentes interativos
- [ ] 7.8.3 — Testar navegacao por teclado (Tab, Enter, Escape)
- [ ] 7.8.4 — Verificar focus rings visiveis
- [ ] 7.8.5 — Corrigir problemas encontrados

---

## Fluxo Git

### Nomenclatura de Branches

```
feature/<curta-descricao>    # Features novas
fix/<curta-descricao>        # Correcoes de bugs
chore/<curta-descricao>      # Manutencao
```

**Exemplos:**

```
feature/add-about-us-page
feature/implement-contact-form
fix/portfolio-card-padding
chore/update-dependencies
```

### Regras de Commit

| Tipo | Quando usar | Exemplo |
|------|------------|---------|
| `feat:` | Feature nova | `feat: add About Us page` |
| `fix:` | Correcao de bug | `fix: correct portfolio card padding` |
| `refactor:` | Reestruturar sem mudar comportamento | `refactor: extract BlogPostCard component` |
| `chore:` | Manutencao | `chore: update dependencies` |
| `docs:` | Documentacao | `docs: update README with setup instructions` |
| `style:` | Formatacao | `style: apply prettier formatting` |
| `test:` | Testes | `test: add ThemeContext tests` |

### Fluxo por Tipo de Mudanca

| Tipo de mudanca | Fluxo |
|----------------|-------|
| **Feature grande** (pagina inteira, componente complexo) | Branch `feature/<nome>` > Commit + PR > Tech Lead revisa > Merge |
| **Fix pequeno** (padding, cor, texto) | Commit direto na main com mensagem clara |
| **Backend** | Branch `backend/<feature>` > PR > Self-merge ou revisa depois |
| **Junior aprendendo** | Branch `feature/<nome>` > Commit + PR > Tech Lead revisa e da feedback |

### Template de PR

```markdown
## Descricao
Breve descricao do que foi feito

## Tipo de mudanca
- [ ] Feature
- [ ] Fix
- [ ] Refactor
- [ ] Chore

## Checklist
- [ ] Build passa (`npm run build`)
- [ ] Testes passam (`npm run test`)
- [ ] Lint passa (`npm run lint`)
- [ ] Responsivo testado
- [ ] Funciona no Chrome, Firefox, Edge
```

---

## Calendario Estimado

```
SEMANA 1 (Dias 1-5):
  Tech Lead:  Fase 0 (setup) + Fase 1 (layout/theme) + Inicio Fase 2 (backend)
  Junior A:   Aguarda Fase 0+1 > Inicia Fase 3A (Quem Somos, Processo Seletivo)
  Junior B:   Aguarda Fase 0+1 > Inicia Fase 3B (Servicos, Contato)

SEMANA 2 (Dias 6-10):
  Tech Lead:  Fase 2 (backend APIs) + Fase 5 (CMS admin)
  Junior A:   Fase 3A (Blog listing, Blog detail) + Inicio Fase 4 (Home components)
  Junior B:   Fase 3B (Portfolio listing) + Inicio Fase 4 (PortfolioCard, filters)

SEMANA 3 (Dias 11-14):
  Tech Lead:  Fase 5 (CMS finish) + Fase 6 (integracao mock->API)
  Junior A:   Fase 4 (Home assembly) + Fase 7 (theme, animacoes, 404)
  Junior B:   Fase 4 (Portfolio components) + Fase 7 (responsive, accessibility)

SEMANA 4 (Dias 15-16):
  Tech Lead:  Fase 7 (SEO, testes, performance)
  Junior A:   Fase 7 (polish, fixes finais)
  Junior B:   Fase 7 (polish, fixes finais)
  Todos:      Code review final + deploy
```

---

## Checklists de Entrega

### Tech Lead

- [ ] Backend rodando em `localhost:8000` via Docker
- [ ] 4 APIs funcionando (portfolio, blog, contact, auth)
- [ ] Admin panel completo e funcional
- [ ] Integracao frontend->backend
- [ ] Testes unitarios com cobertura minima
- [ ] Code review de todos os PRs dos juniores
- [ ] SEO basico implementado
- [ ] Bundle otimizado com lazy loading

### Junior A

- [ ] Pagina Quem Somos responsiva
- [ ] Pagina Processo Seletivo responsiva
- [ ] Blog listing + detail funcionando com mock
- [ ] Hero Section + Home components (ServicesHighlights, FeaturedPortfolio, JoinCTA)
- [ ] Home page completa com todas as secoes
- [ ] Theme toggle integrado
- [ ] 404 page criada
- [ ] Animacoes basicas de scroll

### Junior B

- [ ] Pagina Servicos responsiva
- [ ] Formulario Contact funcional (react-hook-form + zod)
- [ ] Portfolio listing com filtros funcionando
- [ ] PortfolioCard + ServiceCard extraidos como componentes
- [ ] Responsive audit documentado
- [ ] Loading skeletons implementados
- [ ] Accessibility audit realizado
