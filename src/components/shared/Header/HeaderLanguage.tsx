'use client'

import { Locale } from '@/config/i18n.config'
import { getDicionaryUseClient } from '@/dictionaries/default-dictionary-use-client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { BsChevronDown } from 'react-icons/bs'
import { GiBrazilFlag, GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi'
import React from 'react'
import { usePathname } from 'next/navigation'

interface HeaderLanguage {
  lang: Locale
}

export function HeaderLanguage({ lang }: HeaderLanguage) {
  const dict = getDicionaryUseClient(lang)
  const [position, setPosition] = React.useState('pt')
  const pathname = usePathname()
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0'
  const getHrefLink = (path: string, lng: string) => {
    const name = path.split('/' + lang).join('')
    return '/' + lng + name
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="text-white gap-1">
            {dict.navbar.language}
            <BsChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-dark-20 text-white rounded-none">
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <Link replace locale={lang} href={getHrefLink(pathname, 'pt-BR')}>
              <DropdownMenuRadioItem
                value={'pt-BR'}
                className="cursor-pointer gap-2"
              >
                <GiBrazilFlag className={iconClasses} />
                Português
              </DropdownMenuRadioItem>
            </Link>
            <Link replace locale={lang} href={getHrefLink(pathname, 'es-ES')}>
              <DropdownMenuRadioItem
                value={'es-ES'}
                className="cursor-pointer gap-2"
              >
                <GiEuropeanFlag className={iconClasses} />
                Español
              </DropdownMenuRadioItem>
            </Link>
            <Link replace locale={lang} href={getHrefLink(pathname, 'en-US')}>
              <DropdownMenuRadioItem
                value={'en-US'}
                className="cursor-pointer gap-2"
              >
                <GiUsaFlag className={iconClasses} />
                English
              </DropdownMenuRadioItem>
            </Link>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
