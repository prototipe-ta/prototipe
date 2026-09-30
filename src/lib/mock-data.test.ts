import { describe, expect, it } from 'vitest'

import {
  MOCK_BLOG_POSTS,
  MOCK_PORTFOLIO,
  MOCK_SELECTION_PROCESS,
  MOCK_SERVICES,
  filterPortfolioByServiceType,
  getBlogPostBySlug,
  getPortfolioBySlug,
  getServiceBySlug,
} from './mock-data'
import {
  SECONDARY_CATEGORY_OPTIONS,
  SERVICE_TYPE_OPTIONS,
} from '@/types'

// Testes de integridade do mock data: garantem que os dados provisórios
// seguem os contratos que as páginas vão consumir (slugs únicos, enums
// válidos e seções de case completas — AGENTS.md → Portfolio Data Structure).
describe('mock data', () => {
  describe('MOCK_SERVICES', () => {
    it('contém exatamente os 2 segmentos de negócio', () => {
      expect(MOCK_SERVICES).toHaveLength(2)
      const slugs = MOCK_SERVICES.map((s) => s.slug)
      expect(slugs).toContain('prototipagem-ux')
      expect(slugs).toContain('desenvolvimento-software')
    })
  })

  describe('MOCK_PORTFOLIO', () => {
    it('tem slugs únicos', () => {
      const slugs = MOCK_PORTFOLIO.map((item) => item.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
    })

    it('cobre os dois segmentos de serviço', () => {
      const types = new Set(MOCK_PORTFOLIO.map((item) => item.serviceType))
      expect(types).toEqual(new Set(SERVICE_TYPE_OPTIONS))
    })

    it('usa apenas categorias secundárias válidas', () => {
      for (const item of MOCK_PORTFOLIO) {
        expect(SECONDARY_CATEGORY_OPTIONS).toContain(item.secondaryCategory)
      }
    })

    it('todos os cases têm as 4 seções de conteúdo preenchidas', () => {
      for (const item of MOCK_PORTFOLIO) {
        expect(item.challenge.length).toBeGreaterThan(0)
        expect(item.visualSolution.length).toBeGreaterThan(0)
        expect(item.engineering.length).toBeGreaterThan(0)
        expect(item.result.length).toBeGreaterThan(0)
      }
    })
  })

  describe('MOCK_BLOG_POSTS', () => {
    it('tem slugs únicos', () => {
      const slugs = MOCK_BLOG_POSTS.map((post) => post.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
    })
  })

  describe('processo seletivo', () => {
    it('tem cronograma, requisitos, instruções e FAQ preenchidos', () => {
      expect(MOCK_SELECTION_PROCESS.schedule.length).toBeGreaterThan(0)
      expect(MOCK_SELECTION_PROCESS.requirements.length).toBeGreaterThan(0)
      expect(MOCK_SELECTION_PROCESS.instructions.length).toBeGreaterThan(0)
      expect(MOCK_SELECTION_PROCESS.faq.length).toBeGreaterThan(0)
    })
  })

  describe('helpers de acesso', () => {
    it('getPortfolioBySlug retorna o item correto', () => {
      expect(getPortfolioBySlug('site-prototipe')?.client).toContain('Prototipe')
      expect(getPortfolioBySlug('slug-inexistente')).toBeUndefined()
    })

    it('getBlogPostBySlug retorna o post correto', () => {
      expect(getBlogPostBySlug('prototipagem-reduz-custos')).toBeDefined()
      expect(getBlogPostBySlug('slug-inexistente')).toBeUndefined()
    })

    it('getServiceBySlug retorna o serviço correto', () => {
      expect(getServiceBySlug('prototipagem-ux')?.title).toBe('Prototipagem & UX')
      expect(getServiceBySlug('slug-inexistente')).toBeUndefined()
    })

    it('filterPortfolioByServiceType filtra por segmento', () => {
      const dev = filterPortfolioByServiceType('desenvolvimento')
      expect(dev.length).toBeGreaterThan(0)
      expect(
        dev.every((item) => item.serviceType === 'desenvolvimento')
      ).toBe(true)
    })
  })
})
