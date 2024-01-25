import { error } from 'console'
import 'dotenv/config'
import { z } from 'zod'


const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333), // coerce.number - converte o valor para number que é o esperado
})


const _env = envSchema.safeParse(process.env)
if (_env.success == false) {
  console.error('Invalid environment variables', _env.error.format())
  throw new Error('Invalid enviroment variables.')
}

export const env = _env.data
