'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { signIn } from 'next-auth/react'

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

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email necessário.',
    })
    .email({
      message: 'Email inválido.',
    }),
  password: z.string().min(1, {
    message: 'Senha necessária.',
  }),
})

export function LoginForm() {
  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    })

    if (signInData?.error) {
      console.error(signInData.error)
    } else {
      router.push('/id/1234')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
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
          Entrar
        </Button>
      </form>
    </Form>
  )
}
