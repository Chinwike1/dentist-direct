import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import connectToDatabase from './lib/connectdb'
import Google from 'next-auth/providers/google'
import User from '@/app/models/userModel'
import Credentials from 'next-auth/providers/credentials'
import Github from 'next-auth/providers/github'
import type { NextAuthConfig } from 'next-auth'
import clientPromise from './lib/mongodb'
import { randomUUID } from 'crypto'

export const config = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [Github, Google],
  callbacks: {
    // async signIn({ profile }) {
    //   if (profile?.provider === 'google') {
    //     const { email, given_name, family_name } = profile
    //     try {
    //       console.log(email, given_name, family_name)
    //       await connectToDatabase('dentist-direct')
    //       const userExists = await User.findOne({ email })
    //       if (!userExists) {
    //         const res = await fetch('http://localhost:3000/api/user', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             firstname: given_name,
    //             lastname: family_name,
    //             email: email,
    //           }),
    //         })
    //         if (res.ok) return User
    //       }
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }
    //   return true // Do different verification for other providers that don't have `email_verified`
    // },
  },
  pages: {
    signIn: '/register',
  },
  session: {
    generateSessionToken: () => randomUUID(),
    maxAge: 2592000,
    strategy: 'database',
    updateAge: 86400,
  },
} satisfies NextAuthConfig

export const { handlers, auth } = NextAuth(config)
