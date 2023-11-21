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
import { HeaderLanguage } from './HeaderLanguage'

export async function HeaderAvatar() {
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
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-dark-20 text-white rounded-none">
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                href={`/id/${user?.slug}`}
                className="w-full flex items-center"
              >
                <User className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Carteira</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Configurações</span>
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
              <span>Suporte</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Header.SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
