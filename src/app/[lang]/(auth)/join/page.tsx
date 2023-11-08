import { JoinForm } from '@/components/auth/default-form-join'
import Logo from '@/components/shared/Logo'

export default function Join() {
  return (
    <main className="bg-assasins-creed bg-fixed bg-no-repeat bg-cover h-[800px] text-white flex items-center justify-center">
      <div className="w-full bg-black/20 backdrop-blur-sm flex h-[800px] flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-8">
          <h1 className="text-white text-3xl font-bold ml-12">Cadastrar-Se</h1>
          <section className="bg-dark-10 w-[1216px] h-[540px] rounded-lg flex items-center justify-center gap-32 p-24">
            <JoinForm />
            <Logo width={'280px'} height={'280px'} color="#FFFFFF" />
          </section>
        </div>
      </div>
    </main>
  )
}
