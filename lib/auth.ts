import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import connectToDatabase from './connectdb'
import Google from 'next-auth/providers/google'
import User from '@/app/models/userModel'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import type { NextAuthConfig } from 'next-auth'
import clientPromise from './mongodb'
import { POST } from '@/app/api/user/route'

export const config = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_APP_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account.provider === 'google') {
        const { email, given_name, family_name } = profile
        try {
          await connectToDatabase('dentist-direct')
          const userExists = await User.findOne({ email })
          if (!userExists) {
            const res = await fetch('http://localhost:3000/api/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                firstname: given_name,
                lastname: family_name,
                email: email,
              }),
            })
            if (res.ok) return User
          }
        } catch (error) {
          console.error(error)
        }
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  basePath: '/auth',
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
