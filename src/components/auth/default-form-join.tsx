'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const formSchema = z
  .object({
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
    confirmPassword: z.string().min(1, 'Necessário confirmar senha.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não conferem.',
  })

export function JoinForm() {
  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    })

    if (response.ok) {
      router.push('/login')
    } else {
      console.error('Registration failed')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome Completo</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Maker Man"
                  {...field}
                  className="bg-dark-20 border border-dark-30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="makerman@gmail.com"
                  {...field}
                  className="bg-dark-20 border border-dark-30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className="bg-dark-20 border border-dark-30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  className="bg-dark-20 border border-dark-30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={'default'}
          type="submit"
          className="text-base h-12 uppercase w-full bg-brand-color hover:bg-brand-darkness py-[18px]"
        >
          Cadastrar-Se
        </Button>
      </form>
    </Form>
  )
}
