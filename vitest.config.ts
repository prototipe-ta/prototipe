import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

// https://vitest.dev/config/
// Espelha as configurações essenciais do vite.config.ts (plugins de React e
// alias `@/`) para os testes rodarem exatamente como o app. Os testes do
// projeto usam jsdom (DOM em memória) — ver AGENTS.md → Testing Strategy.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  test: {
    // Ambiente de DOM simulado — necessário para @testing-library/react.
    environment: 'jsdom',
    // Permite usar describe/it/expect globais; mantenha os imports explícitos
    // de 'vitest' nos arquivos de teste para tipagem correta.
    globals: true,
    // Carrega os matchers do jest-dom (toBeInTheDocument etc.) antes dos testes.
    setupFiles: './src/test-setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // Mede cobertura apenas do código-fonte, ignorando testes e configs.
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test-setup.ts', 'src/types/**'],
    },
  },
})
