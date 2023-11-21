import { Button } from '@/components/ui/button'

export function HomeCategory() {
  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-center gap-10">
      <h1 className="text-white text-2xl font-semibold uppercase">
        Navegar pelo Duck Play
      </h1>
      <div className="w-full flex items-center justify-between gap-8">
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          Lançamentos
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          Ofertas
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          Jogos Gratuitos
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          Mais Vendidos
        </Button>
      </div>
    </section>
  )
}
