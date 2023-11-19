'use client'

import { Locale } from '@/config/i18n.config'
import { getDicionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderLinkProps {
  lang: Locale
}

export function HeaderLink({ lang }: HeaderLinkProps) {
  const dict = getDicionaryUseClient(lang)

  const pathname = usePathname()

  return (
    <section className="flex items-center space-x-12">
      <Link href={'/store'} className="text-lg font-bold text-white">
        Duck Play
      </Link>
      <ul className="hidden lg:flex items-center gap-4">
        {[
          [dict.navbar.shop, '/store'],
          [dict.navbar.community, '/community'],
          [dict.navbar.about, '/about'],
          [dict.navbar.support, '/help'],
        ].map(([text, url], index) => {
          const isActive = pathname === url || pathname === '/' + lang + url

          return (
            <li key={index} className="text-white font-medium uppercase">
              <Link
                href={url}
                className={
                  isActive
                    ? 'text-brand-color py-4 rounded-none border-b-2 border-brand-color'
                    : 'text-white py-4 rounded-none border-b-2 border-transparent'
                }
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
