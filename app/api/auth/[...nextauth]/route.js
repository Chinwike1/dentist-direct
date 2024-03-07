import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Google from '@auth/core/providers/google'

const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
