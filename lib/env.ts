import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().min(1),
  MONGODB_URI: z.string().min(1),
  // Next Auth
  AUTH_TRUST_HOST: z.string().min(1),
  AUTH_SECRET: z.string().min(1),
  AUTH_GOOGLE_ID: z.string().min(1),
  AUTH_GOOGLE_SECRET: z.string().min(1),
  // Mailersend
  SMTP_SERVER: z.string().min(1),
  MAILERSEND_API_KEY: z.string().min(1),
  FROM_EMAIL: z.string().min(1),
  EMAIL_TEMPLATE_ID: z.string().min(1),
  // Calendly
  NEXT_PUBLIC_CALENDLY_CLIENT_ID: z.string().min(1),
  NEXT_PUBLIC_CALENDLY_AUTH_BASE_URL: z.string().min(1),
  NEXT_PUBLIC_CALENDLY_REDIRECT_URI: z.string().min(1),
  CALENDLY_CLIENT_SECRET: z.string().min(1),
  CALENDLY_API_BASE_URL: z.string().min(1),
  CALENDLY_BASE_URL: z.string().min(1),
  // Paystack
  PAYSTACK_TEST_SECRET: z.string().min(1),
  PAYSTACK_TEST_PUBLIC: z.string().min(1),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
