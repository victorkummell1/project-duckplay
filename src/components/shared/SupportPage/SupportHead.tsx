import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function SupportHead() {
  const session = await getServerSession(authOptions)

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-4">
      <h1 className="text-white text-3xl font-bold">Suporte Duck Play</h1>
      <p className="text-xl text-brand-color-darkness">como podemos ajudar?</p>
    </section>
  )
}
