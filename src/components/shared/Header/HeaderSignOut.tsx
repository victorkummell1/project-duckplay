'use client'

import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function HeaderSignOut() {
  return (
    <DropdownMenuItem
      onClick={() => signOut()}
      className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Sair</span>
    </DropdownMenuItem>
  )
}
