import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import * as z from 'zod'

// export async function GET() {
//   return NextResponse.json({ success: true })
// }

// Define a schema for input validation
const userSchema = z.object({
  username: z
    .string()
    .min(1, {
      message: 'Nome necessário.',
    })
    .max(100),
  email: z
    .string()
    .min(1, {
      message: 'Email necessário.',
    })
    .email({
      message: 'Email inválido.',
    }),
  password: z
    .string()
    .min(1, {
      message: 'Senha necessária.',
    })
    .min(8, {
      message: 'Sua senha precisa ter mais de 8 caracteres.',
    })
    .max(16, {
      message: 'Sua senha precisa ter menos de 16 caracteres.',
    }),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { email, username, password } = userSchema.parse(body)

    // check if email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          success: false,
          message: 'Email already exists',
        },
        { status: 409 },
      )
    }

    // // check if username already exists
    // const existingUserByUsername = await db.user.findUnique({
    //   where: {
    //     username,
    //   },
    // })

    // if (existingUserByUsername) {
    //   return NextResponse.json(
    //     {
    //       user: null,
    //       success: false,
    //       message: 'Username already exists',
    //     },
    //     { status: 409 },
    //   )
    // }

    const hashedPassword = await hash(password, 10)

    const newSlug =
      Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000

    const newUser = await db.user.create({
      data: {
        username,
        nickname: username,
        slug: newSlug.toString(),
        email,
        password: hashedPassword,
        description:
          'Dê vida ao seu novo perfil e compartilhe quem você é! Explore conquistas, atividades recentes e conecte-se com a comunidade em um único lugar.',
        createdAt: new Date(),
        image: 'https://i.imgur.com/QpILXvO.png',
        city: 'Havana',
        states: 'Havana',
        country: 'Cuba',
      },
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: newUserPassword, ...rest } = newUser

    return NextResponse.json(
      { user: rest, message: 'User created success' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 },
    )
  }
}
