import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from 'lib/prisma'
import { compare } from 'bcrypt'

export interface ExtendedSession extends DefaultSession {
  user?: {
    id?: string | null
    name?: string | null
    email?: string | null
  }
}

export const AuthOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {},
      // @ts-ignore
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        if (!email || !password) {
          throw new Error('Missing username or password')
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        })
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error('Invalid username or password')
        }
        return user
      },
    }),
  ],
}

export default NextAuth(AuthOptions)
