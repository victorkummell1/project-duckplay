import { LoginForm } from '@/components/auth/default-form-login'
import Logo from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Login() {
  return (
    <main className="bg-assasins-creed bg-fixed bg-no-repeat bg-cover h-[1040px] text-white">
      <div className="w-full bg-black/20 backdrop-blur-sm flex h-[800px] flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-white text-3xl font-bold ml-12">
            Iniciar Sessão
          </h1>
          <section className="bg-dark-10 w-[1216px] h-[540px] rounded-lg flex items-center justify-center gap-32 p-24">
            <LoginForm />
            <Logo width={'280px'} height={'280px'} color="#FFFFFF" />
          </section>
        </div>
      </div>
      <section className="bg-dark-20 h-[240px] w-full flex items-center justify-center">
        <div className="max-w-4xl flex items-center justify-center gap-32 p-16 border-b border-dark-30">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-white font-bold text-lg">
              Primeira vez no Duck Play?
            </h2>
            <Link
              href={'/join'}
              className="text-gray-50 dark:text-gray-900 text-base h-10 uppercase w-full bg-brand-color hover:bg-brand-color-darkness"
            >
              Cadastrar-se
            </Link>
          </div>
          <div className="w-96 text-center flex flex-col">
            <span className="text-dark-30 font-medium">
              É gratuito e fácil. Descubra milhares de jogos para jogar com
              milhões de novos amigos.
            </span>
            <Link
              href={'/about'}
              className="text-dark-30 font-medium underline hover:text-white/80"
            >
              Saiba mais sobre o Duck Play
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
