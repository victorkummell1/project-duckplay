import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { db } from '@/lib/db'
import { HiChevronRight, HiStar } from 'react-icons/hi'

interface GameHeadProps {
  params: { slug: string }
  lang: Locale
}

export async function GameHead({ params, lang }: GameHeadProps) {
  const dict = getDicionaryServerOnly(lang)

  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })
  const genres = await db.genre.findUnique({
    where: {
      id: products?.genre_id,
    },
  })

  const distributors = await db.distributor.findUnique({
    where: {
      id: products?.distributor_id,
    },
  })

  return (
    <section className="w-full max-w-6xl flex flex-col items-start justify-center gap-4">
      <div className="flex gap-3 items-center text-dark-30">
        <span>{dict.store.gamePage.allGame}</span>
        <HiChevronRight />
        <span>{genres?.name}</span>
        <HiChevronRight />
        <span>{distributors?.name}</span>
        <HiChevronRight />
        <span>{products?.name}</span>
      </div>
      <h1 className="text-white text-5xl font-light">{products?.name}</h1>
      <div className="flex gap-3 items-center">
        <HiStar className="w-[18px] h-[18px]" />
        <HiStar className="w-[18px] h-[18px]" />
        <HiStar className="w-[18px] h-[18px]" />
        <HiStar className="w-[18px] h-[18px]" />
        <HiStar className="w-[18px] h-[18px]" />
        <span className="py-1 px-3 bg-dark-10 border-[1px] border-dark-20 rounded-[4px] font-medium text-lg">
          4.9
        </span>
      </div>
    </section>
  )
}
