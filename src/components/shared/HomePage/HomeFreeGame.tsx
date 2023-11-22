import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import Image from 'next/image'
import Link from 'next/link'

interface HomeFreeGameProps {
  lang: Locale
}

export function HomeFreeGame({ lang }: HomeFreeGameProps) {
  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-10">
      <h1 className="text-white text-2xl font-semibold uppercase">
        {dict.store.freeGame.title}
      </h1>
      <section className="flex items-center justify-start gap-8">
        <Link
          href={'#'}
          className="w-[400px] max-w-[400px] h-[466px] max-h-[466px] flex flex-col items-start justify-between bg-dark-20 rounded"
        >
          <Image
            src={'https://i.imgur.com/fyOohOY.png'}
            width={400}
            height={288}
            alt="Stardew Valley"
          />
          <div className="flex flex-col items-start justify-center px-8 pb-8 gap-6">
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="text-white font-medium text-2xl">Stardew Valley</p>
              <desc className="text-dark-30 font-medium text-base">
                Oferta válida até 19 de abr. às 14h
              </desc>
            </div>
            <div className="flex items-center justify-items-start gap-6">
              <span className="text-lg font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                -100%
              </span>
              <p className="text-lg font-medium text-dark-30 line-through">
                R$ 42,50
              </p>
              <p className="text-lg font-medium text-white">R$ 0,00</p>
            </div>
          </div>
        </Link>
        <Link
          href={'#'}
          className="w-[400px] max-w-[400px] h-[466px] max-h-[466px] flex flex-col items-start justify-between bg-dark-20 rounded"
        >
          <Image
            src={'https://i.imgur.com/fyOohOY.png'}
            width={400}
            height={288}
            alt="Stardew Valley"
          />
          <div className="flex flex-col items-start justify-center px-8 pb-8 gap-6">
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="text-white font-medium text-2xl">Stardew Valley</p>
              <desc className="text-dark-30 font-medium text-base">
                Oferta válida até 19 de abr. às 14h
              </desc>
            </div>
            <div className="flex items-center justify-items-start gap-6">
              <span className="text-lg font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                -100%
              </span>
              <p className="text-lg font-medium text-dark-30 line-through">
                R$ 42,50
              </p>
              <p className="text-lg font-medium text-white">R$ 0,00</p>
            </div>
          </div>
        </Link>
        <section className="flex flex-col items-start justify-start gap-6">
          <Link
            href={'#'}
            className="w-[352px] max-w-[352px] flex flex-col items-start justify-start bg-dark-20 rounded"
          >
            <Image
              src={'https://i.imgur.com/IAW7RXu.png'}
              width={352}
              height={160}
              alt="assassins creed mirage"
            />
            <div className="w-[352px] h-[57px] flex items-center justify-between px-4">
              <p className="text-white font-medium text-2xl">
                {dict.store.freeGame.offerDay}
              </p>
              <div className="flex items-center justify-items-start gap-4">
                <span className="text-sm font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                  -100%
                </span>
                <p className="text-sm font-medium text-white">R$ 0,00</p>
              </div>
            </div>
          </Link>
          <Link
            href={'#'}
            className="w-[352px] max-w-[352px] flex flex-col items-start justify-start bg-dark-20 rounded"
          >
            <Image
              src={'https://i.imgur.com/IAW7RXu.png'}
              width={352}
              height={160}
              alt="assassins creed mirage"
            />
            <div className="w-[352px] h-[57px] flex items-center justify-between px-4">
              <p className="text-white font-medium text-2xl">
                {dict.store.freeGame.offerDay}
              </p>
              <div className="flex items-center justify-items-start gap-4">
                <span className="text-sm font-semibold uppercase bg-brand-color px-2 py-1 rounded">
                  -100%
                </span>
                <p className="text-sm font-medium text-white">R$ 0,00</p>
              </div>
            </div>
          </Link>
        </section>
      </section>
    </section>
  )
}
