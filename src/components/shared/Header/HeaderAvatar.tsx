import { CreditCard, Github, LifeBuoy, Settings, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
import { Header } from '.'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

interface HeaderAvatarProps {
  lang: Locale
}

export async function HeaderAvatar({ lang }: HeaderAvatarProps) {
  const dict = getDicionaryServerOnly(lang)

  const session = await getServerSession(authOptions)

  const user = await db.user.findUnique({
    where: {
      slug: session?.user.slug,
    },
  })

  return (
    <div className="flex items-center gap-4">
      <span className="text-white font-medium">{user?.nickname}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 rounded-full hover:bg-transparent"
          >
            <Avatar>
              <AvatarImage
                src={user?.image || '/Null_Image.png'}
                alt={user?.nickname + ' image'}
              />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-dark-20 text-white rounded-none">
          <DropdownMenuLabel>{dict.navbar.user.title}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                href={`/id/${user?.slug}`}
                className="w-full flex items-center"
              >
                <User className="mr-2 h-4 w-4" />
                <span>{dict.navbar.user.profile}</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>{dict.navbar.user.wallet}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>{dict.navbar.user.settings}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="w-full flex items-center"
              href={'https://github.com/victorkummell1/'}
            >
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="w-full flex items-center" href={'/help'}>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>{dict.navbar.user.support}</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Header.SignOut lang={lang} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
