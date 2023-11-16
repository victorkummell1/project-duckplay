import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './db'
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    newUser: '/join',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const existingUser = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        })

        if (!existingUser) {
          return null
        }

        const passwordMatch = await compare(
          credentials.password,
          existingUser.password,
        )

        if (!passwordMatch) {
          return null
        }

        return {
          id: `${existingUser.id}`,
          slug: existingUser.slug,
          email: existingUser.email,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          slug: user.slug,
        }
      }

      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          slug: token.slug,
        },
      }
    },
  },
}
