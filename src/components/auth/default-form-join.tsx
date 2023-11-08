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

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Seu nome precisa ter mais de 4 caracteres.',
  }),
  email: z.string().min(8, {
    message: 'Email não pode ser vazio.',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Sua senha precisa ter mais de 8 caracteres.',
    })
    .max(16, {
      message: 'Sua senha precisa ter menos de 16 caracteres.',
    }),
})

export function JoinForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
