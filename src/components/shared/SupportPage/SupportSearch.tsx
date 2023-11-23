import { Input } from '@/components/ui/input'

export default function SupportMain() {
  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-6">
      <Input
        className="w-full h-[60px] bg-dark-20 border-none text-lg text-center font-medium px-10"
        type="search"
        placeholder="Buscar problemas, recursos e jogos"
      />
    </section>
  )
}
