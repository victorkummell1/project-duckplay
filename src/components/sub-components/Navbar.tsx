'use client'

import { Locale } from '@/config/i18n.config'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getDicionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { GiBrazilFlag, GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi'

type Props = { lang: Locale }

export default function Navbar({ lang }: Props) {
  const dict = getDicionaryUseClient(lang)

  const router = useRouter()
  const pathname = usePathname()
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0'
  const [position, setPosition] = React.useState('pt')

  const getHrefLink = (path: string, lng: string) => {
    const name = path.split('/' + lang).join('')
    return '/' + lng + name
  }

  return (
    <div className="z-10 max-w-9xl w-full items-center justify-between text-sm flex">
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
      <section className="hidden lg:flex items-center space-x-4">
        <Button
          onClick={() => router.push('/login')}
          variant="link"
          className="text-white"
        >
          {dict.navbar.session}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link" className="text-white gap-1">
              {dict.navbar.language}
              <BsChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-dark-20 text-white rounded-none">
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <Link replace locale={lang} href={getHrefLink(pathname, 'pt-BR')}>
                <DropdownMenuRadioItem value={'pt-BR'} className="gap-2">
                  <GiBrazilFlag className={iconClasses} />
                  Português
                </DropdownMenuRadioItem>
              </Link>
              <Link replace locale={lang} href={getHrefLink(pathname, 'es-ES')}>
                <DropdownMenuRadioItem value={'es-ES'} className="gap-2">
                  <GiEuropeanFlag className={iconClasses} />
                  Español
                </DropdownMenuRadioItem>
              </Link>
              <Link replace locale={lang} href={getHrefLink(pathname, 'en-US')}>
                <DropdownMenuRadioItem value={'en-US'} className="gap-2">
                  <GiUsaFlag className={iconClasses} />
                  English
                </DropdownMenuRadioItem>
              </Link>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  )
}
