'use client'

import { Locale } from '@/config/i18n.config'
import { getDicionaryUseClient } from '@/dictionaries/default-dictionary-use-client'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

interface HeaderSignOutProps {
  lang: Locale
}

export function HeaderSignOut({ lang }: HeaderSignOutProps) {
  const dict = getDicionaryUseClient(lang)

  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>{dict.navbar.user.signOut}</span>
    </DropdownMenuItem>
  )
}
