/**
 * Schemas de validação (zod) dos formulários do site.
 *
 * Padrão do projeto (AGENTS.md): formulários usam react-hook-form + zod
 * via `zodResolver`. Os schemas vivem aqui e os tipos de domínio em
 * `@/types` — mantenha os dois sincronizados.
 *
 * Uso futuro (página de contato):
 *   const form = useForm<z.infer<typeof CONTACT_FORM_SCHEMA>>({
 *     resolver: zodResolver(CONTACT_FORM_SCHEMA),
 *   })
 */
import { z } from 'zod'

import { SERVICE_TYPE_OPTIONS } from '@/types'

/** Validação do formulário de contato/orçamento — ver `ContactFormData`. */
export const CONTACT_FORM_SCHEMA = z.object({
  name: z
    .string()
    .min(2, 'Informe seu nome (mínimo de 2 caracteres)')
    .max(100, 'Nome muito longo'),
  email: z.email('Informe um e-mail válido'),
  subject: z
    .string()
    .min(3, 'Informe um assunto (mínimo de 3 caracteres)')
    .max(150, 'Assunto muito longo'),
  message: z
    .string()
    .min(10, 'Conte um pouco mais sobre sua ideia (mínimo de 10 caracteres)')
    .max(2000, 'Mensagem muito longa (máximo de 2000 caracteres)'),
  serviceType: z.enum(SERVICE_TYPE_OPTIONS, 'Escolha o tipo de serviço'),
})

/** Tipo derivado do schema — alternativa type-safe ao `ContactFormData`. */
export type ContactFormValues = z.infer<typeof CONTACT_FORM_SCHEMA>
