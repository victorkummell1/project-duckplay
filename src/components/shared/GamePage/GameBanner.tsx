import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'

export async function GameBanner({ params }: { params: { slug: string } }) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })

  const distributors = await db.distributor.findUnique({
    where: {
      id: products?.distributor_id,
    },
  })

  return (
    <section className="w-[800px] max-w-[800px] h-[80px] max-h-[80px] rounded bg-dark-20 px-6 py-5 flex items-center justify-between">
      <span className="font-medium text-2xl">
        Confira tudo de {distributors?.name} na Duck Play
      </span>
      <Button
        variant={'default'}
        className="bg-brand-color hover:bg-brand-color-darkness uppercase rounded-sm"
      >
        Saiba Mais
      </Button>
    </section>
  )
}
