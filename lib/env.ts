import { z } from 'zod'

const envSchema = z.object({
  AUTH_TRUST_HOST: z.string().min(1),
  AUTH_SECRET: z.string().min(1),
  AUTH_GOOGLE_ID: z.string().min(1),
  AUTH_GOOGLE_SECRET: z.string().min(1),
  MONGODB_URI: z.string().min(1),
  // Mailersend
  SMTP_SERVER: z.string().min(1),
  MAILERSEND_API_KEY: z.string().min(1),
  FROM_EMAIL: z.string().min(1),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
