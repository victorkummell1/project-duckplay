// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    slug: string
  }
  interface Session {
    user: User & {
      slug: string
    }
    token: {
      username: string
    }
  }
}
