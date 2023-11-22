import { Button } from '@/components/ui/button'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

interface HomeCategoryProps {
  lang: Locale
}

export function HomeCategory({ lang }: HomeCategoryProps) {
  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-center gap-10">
      <h1 className="text-white text-2xl font-semibold uppercase">
        {dict.store.navigation.title}
      </h1>
      <div className="w-full flex items-center justify-between gap-8">
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          {dict.store.navigation.releases}
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          {dict.store.navigation.offers}
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          {dict.store.navigation.freeGame}
        </Button>
        <Button
          variant={'default'}
          className="text-lg text-white uppercase px-[70px] py-5 bg-brand-color hover:bg-brand-color-dark"
        >
          {dict.store.navigation.bestSeller}
        </Button>
      </div>
    </section>
  )
}
