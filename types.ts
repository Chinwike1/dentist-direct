/* Types & Interfaces for the application */
export type User = {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
  id?: string | null | undefined
  emailVerified?: any
}

export type CalendlyToken = {
  access_token: string
  refresh_token: string
  expires_in: string
}
