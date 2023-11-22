import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import Image from 'next/image'
import Link from 'next/link'

interface HomeReleaseProps {
  lang: Locale
}

export function HomeRelease({ lang }: HomeReleaseProps) {
  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-10">
      <h1 className="text-white text-2xl font-semibold uppercase">
        {dict.store.releases}
      </h1>
      <section className="w-[1216px] overflow-hidden flex items-center justify-start gap-8">
        <Link
          href={'#'}
          className="min-w-[348px] flex flex-col items-start justify-start gap-5"
        >
          <Image
            src={'https://i.imgur.com/1lxjZ8T.png'}
            width={348}
            height={200}
            alt="World War Z"
          />
          <section className="flex flex-col items-start justify-start gap-3">
            <p className="text-white font-medium text-lg">World War Z</p>
            <span className="text-dark-30 font-normal text-sm">
              World War Z é um videogame de tiro em terceira pessoa desenvolvido
              pela Sabre Interactive.
            </span>
          </section>
        </Link>
        <Link
          href={'#'}
          className="min-w-[348px] flex flex-col items-start justify-start gap-5"
        >
          <Image
            src={'https://i.imgur.com/1lxjZ8T.png'}
            width={348}
            height={200}
            alt="World War Z"
          />
          <section className="flex flex-col items-start justify-start gap-3">
            <p className="text-white font-medium text-lg">World War Z</p>
            <span className="text-dark-30 font-normal text-sm">
              World War Z é um videogame de tiro em terceira pessoa desenvolvido
              pela Sabre Interactive.
            </span>
          </section>
        </Link>
        <Link
          href={'#'}
          className="min-w-[348px] flex flex-col items-start justify-start gap-5"
        >
          <Image
            src={'https://i.imgur.com/1lxjZ8T.png'}
            width={348}
            height={200}
            alt="World War Z"
          />
          <section className="flex flex-col items-start justify-start gap-3">
            <p className="text-white font-medium text-lg">World War Z</p>
            <span className="text-dark-30 font-normal text-sm">
              World War Z é um videogame de tiro em terceira pessoa desenvolvido
              pela Sabre Interactive.
            </span>
          </section>
        </Link>
        <Link
          href={'#'}
          className="min-w-[348px] flex flex-col items-start justify-start gap-5"
        >
          <Image
            src={'https://i.imgur.com/1lxjZ8T.png'}
            width={348}
            height={200}
            alt="World War Z"
          />
          <section className="flex flex-col items-start justify-start gap-3">
            <p className="text-white font-medium text-lg">World War Z</p>
            <span className="text-dark-30 font-normal text-sm">
              World War Z é um videogame de tiro em terceira pessoa desenvolvido
              pela Sabre Interactive.
            </span>
          </section>
        </Link>
      </section>
    </section>
  )
}
