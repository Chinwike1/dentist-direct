/**
 * re-export SessionProvider as a client component to render in RSC layout file
 */
'use client'

export { SessionProvider as AuthProvider } from 'next-auth/react'
