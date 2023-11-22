import Image from 'next/image'
import { db } from '@/lib/db'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

interface GameAboutProps {
  params: { slug: string }
  lang: Locale
}

export async function GameAbout({ params, lang }: GameAboutProps) {
  const dict = getDicionaryServerOnly(lang)

  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })
  const abouts = await db.imageAbout.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-8">
      <h2 className="font-normal text-[32px]">{dict.store.gamePage.about}</h2>
      <section className="flex flex-col items-start gap-6">
        <Image
          src={abouts?.url || 'https://i.imgur.com/CfpdN8T.png'}
          width={1216}
          height={250}
          alt={abouts?.alt || ''}
        />
        <p>{products?.about}</p>
      </section>
    </section>
  )
}
