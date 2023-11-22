import { Button } from '@/components/ui/button'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { db } from '@/lib/db'

interface GameBannerProps {
  params: { slug: string }
  lang: Locale
}

export async function GameBanner({ params, lang }: GameBannerProps) {
  const dict = getDicionaryServerOnly(lang)

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
        {dict.store.gamePage.more}
      </Button>
    </section>
  )
}
