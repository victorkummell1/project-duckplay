import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'

export async function GameDetails({ params }: { params: { slug: string } }) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })
  const logos = await db.imageLogo.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  return (
    <section className="w-[384px] max-w-[384px] h-[578px] max-h-[578px] flex flex-col justify-between gap-[42px]">
      <div className="w-full flex flex-col items-start gap-[26px]">
        <Image
          src={logos?.url || 'https://i.imgur.com/2VL43uD.png'}
          width={384}
          height={216}
          alt={logos?.alt || ''}
        />
        <p className="font-white font-normal text-lg">
          {products?.description}
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-6">
        <Button
          variant={'default'}
          className="text-base h-14 uppercase w-full bg-green-light hover:bg-green-light/70 py-[18px]"
        >
          Compre Agora
        </Button>
        <Button
          variant={'default'}
          className="text-base h-14 uppercase w-full py-[18px]"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </section>
  )
}
