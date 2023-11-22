import { Locale } from '@/config/i18n.config'
import { authOptions } from '@/lib/auth'
import { HeaderButton } from './HeaderButton'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { HeaderAvatar } from './HeaderAvatar'
import { getServerSession } from 'next-auth'

interface HeadersSessionProps {
  lang: Locale
}

export async function HeaderSession({ lang }: HeadersSessionProps) {
  const session = await getServerSession(authOptions)

  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="hidden lg:flex items-center space-x-4">
      {!session ? (
        <HeaderButton lang={lang} text={dict.navbar.session} />
      ) : (
        <HeaderAvatar lang={lang} />
      )}
    </section>
  )
}
