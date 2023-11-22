import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

interface GameDetailsProps {
  params: { slug: string }
  lang: Locale
}

export async function GameDetails({ params, lang }: GameDetailsProps) {
  const dict = getDicionaryServerOnly(lang)

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
          {dict.store.gamePage.buy}
        </Button>
        <Button
          variant={'default'}
          className="text-base h-14 uppercase w-full py-[18px]"
        >
          {dict.store.gamePage.add}
        </Button>
      </div>
    </section>
  )
}
