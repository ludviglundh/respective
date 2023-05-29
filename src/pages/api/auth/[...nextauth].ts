import NextAuth, {
  DefaultSession,
  DefaultUser,
  NextAuthOptions,
} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from 'lib/prisma'
import { compare } from 'bcrypt'
import { JWT } from 'next-auth/jwt'
import { Event, UserRole } from '@prisma/client'

export interface ExtendedUser extends DefaultUser {
  events?: Event[]
  role?: UserRole
}

export interface ExtendedSession extends DefaultSession {
  user?: {
    id?: string | null
    name?: string | null
    email?: string | null
    role?: UserRole
    events?: Event[]
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
          include: {
            events: true,
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

  callbacks: {
    // Add properties from user(fetch db user) to session callback (token param)
    async jwt({ token, user }: { token: JWT; user?: ExtendedUser }) {
      if (user) {
        user?.id && (token.userId = user.id)
        user?.events && (token.events = user.events)
      }

      return token
    },
    // Add properties from jwt token to session
    async session({
      session,
      token,
    }: {
      session: ExtendedSession
      token: JWT
    }) {
      // @ts-ignore
      token?.userId && (session.user.id = token.userId)
      // @ts-ignore
      token?.events && (session.user.events = token.events)

      return session
    },
  },
}

export default NextAuth(AuthOptions)
