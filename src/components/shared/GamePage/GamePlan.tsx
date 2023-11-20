import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { PiAppleLogo, PiLinuxLogo, PiWindowsLogo } from 'react-icons/pi'

export async function GamePlan({ params }: { params: { slug: string } }) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })
  const isDiscount =
    (await products?.discount) === null || (await products?.discount) === 0
  const price = products?.price ?? 0
  const discount = products?.discount ?? 0

  const priceDiscount = price - (price * discount) / 100

  return (
    <div className="relative w-[800px] max-w-[800px] h-[170px] max-h-[170px] flex flex-col">
      <section className="w-full flex flex-col justify-center rounded bg-dark-20 pb-11 pt-6 px-6">
        <section className="flex items-center justify-end">
          {products?.linux && <PiLinuxLogo className="w-6 h-6" />}
          {products?.windows && <PiWindowsLogo className="w-6 h-6" />}
          {products?.macOs && <PiAppleLogo className="w-6 h-6" />}
        </section>
        <section className="w-full flex flex-col justify-center gap-4">
          <span className="font-medium text-2xl">{products?.name}</span>
          <p className="font-normal text-base">{products?.planDescription}</p>
        </section>
      </section>
      {!isDiscount ? (
        <section className="relative -top-7 -right-[376px] w-[397px] flex items-center gap-6 justify-center rounded bg-dark-10 border-2 border-dark-20/50 py-[6px] px-2">
          <span className="text-2xl font-semibold uppercase bg-green-light px-3 py-1 rounded">
            -{products?.discount}%
          </span>
          <div className="flex flex-col items-start justify-center">
            <span className="font-medium text-xs text-dark-30 line-through">
              R$ {products?.price?.toFixed(2)}
            </span>
            <span className="font-semibold text-base">
              R$ {priceDiscount.toFixed(2)}
            </span>
          </div>
          <Button
            variant={'default'}
            className="text-base uppercase bg-green-light hover:bg-green-light/70"
          >
            Selecionar Plano
          </Button>
        </section>
      ) : (
        <section className="relative -top-7 -right-[472px] w-[305px] flex items-center gap-6 justify-center rounded bg-dark-10 border-2 border-dark-20/50 py-[6px] px-2">
          <span className="font-semibold text-base">
            R$ {priceDiscount.toFixed(2)}
          </span>
          <Button
            variant={'default'}
            className="text-base uppercase bg-green-light hover:bg-green-light/70"
          >
            Selecionar Plano
          </Button>
        </section>
      )}
    </div>
  )
}
