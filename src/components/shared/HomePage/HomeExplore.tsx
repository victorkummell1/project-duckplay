import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import Image from 'next/image'
import Link from 'next/link'

interface HomeExploreProps {
  lang: Locale
}

export async function HomeExplore({ lang }: HomeExploreProps) {
  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-center gap-10">
      <h1 className="text-white text-2xl font-semibold uppercase">
        {dict.store.exploreCategory.title}
      </h1>
      <section className="w-[1216px] max-w-[1216px] flex flex-wrap items-center justify-start gap-y-10 gap-x-8">
        <Link
          href={`/store/app/lethal-company`}
          className="flex flex-col items-start justify-center gap-3"
        >
          <Image
            src={'https://i.imgur.com/NXKEEUq.png'}
            width={280}
            height={150}
            alt="lethal company"
          />
          <section className="flex flex-col items-start justify-center gap-4">
            <p className="text-white font-medium text-base">Lethal Company</p>
            <div className="flex items-center justify-items-start gap-[18px]">
              <span className="text-sm font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                -45%
              </span>
              <p className="text-sm font-medium text-dark-30 line-through">
                R$ 79.87
              </p>
              <p className="text-sm font-medium text-white">R$ 43.93</p>
            </div>
          </section>
        </Link>
        <Link
          href={`/store/app/assassins-creed-mirage`}
          className="flex flex-col items-start justify-center gap-3"
        >
          <Image
            src={'https://i.imgur.com/YMhFeJJ.png'}
            width={280}
            height={150}
            alt="assassins creed mirage"
          />
          <section className="flex flex-col items-start justify-center gap-4">
            <p className="text-white font-medium text-base">
              Assassins Creed Mirage
            </p>
            <div className="flex items-center justify-items-start gap-[18px]">
              <span className="text-sm font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                -25%
              </span>
              <p className="text-sm font-medium text-dark-30 line-through">
                R$ 144.68
              </p>
              <p className="text-sm font-medium text-white">R$ 108.51</p>
            </div>
          </section>
        </Link>
        <Link
          href={`/store/app/stray`}
          className="flex flex-col items-start justify-center gap-3"
        >
          <Image
            src={'https://i.imgur.com/0ntVLYk.png'}
            width={280}
            height={150}
            alt="stray"
          />
          <section className="flex flex-col items-start justify-center gap-4">
            <p className="text-white font-medium text-base">Stray</p>
            <div className="flex items-center justify-items-start gap-[18px]">
              <p className="text-sm font-medium text-white">R$ 124.26</p>
            </div>
          </section>
        </Link>
        <Link
          href={`/store/app/satisfactory`}
          className="flex flex-col items-start justify-center gap-3"
        >
          <Image
            src={'https://i.imgur.com/tdfpEH2.png'}
            width={280}
            height={150}
            alt="satisfactory"
          />
          <section className="flex flex-col items-start justify-center gap-4">
            <p className="text-white font-medium text-base">Satisfactory</p>
            <div className="flex items-center justify-items-start gap-[18px]">
              <span className="text-sm font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                -45%
              </span>
              <p className="text-sm font-medium text-dark-30 line-through">
                R$ 88.89
              </p>
              <p className="text-sm font-medium text-white">R$ 48.89</p>
            </div>
          </section>
        </Link>
      </section>
    </section>
  )
}
