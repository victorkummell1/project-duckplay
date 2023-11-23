'use client'

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
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z
  .object({
    username: z.string(),
    nickname: z.string(),
    slug: z.string(),
    image: z.string(),
    email: z.string(),

    description: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não conferem.',
  })

interface EditFormProps {
  params: { slug: string }
}

export async function EditForm({ params }: EditFormProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      nickname: '',
      slug: '',
      image: '',
      email: '',
      description: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await fetch('/api/users/update', {
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
      router.push(`/id/${params.slug}/`)
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
          name="nickname"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Apelido</FormLabel>
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
          name="image"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Imagem de Perfil</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="https://www.google.com/"
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
          name="slug"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>ID de perfil</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="3598442132"
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
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Descreva um pouco sobre você..."
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
        <div className="flex items-center justify-between w-full">
          <Button
            variant={'default'}
            type="submit"
            className="text-base h-12 uppercase bg-brand-color hover:bg-brand-darkness py-[18px]"
          >
            Salvar
          </Button>
          <Button
            variant={'link'}
            onClick={() => router.push(`/id/${params.slug}/`)}
            className="text-base h-12 uppercase text-dark-30 py-[18px]"
          >
            Voltar
          </Button>
        </div>
      </form>
    </Form>
  )
}
