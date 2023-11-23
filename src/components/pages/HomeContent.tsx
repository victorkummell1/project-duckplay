import { Locale } from '@/config/i18n.config'
import { Home } from '../shared/HomePage'

interface HomeContentProps {
  lang: Locale
}

export default function HomeContent({ lang }: HomeContentProps) {
  return (
    <Home.Root>
      {/* <Home.Slide /> */}
      <Home.Search lang={lang} />
      <Home.Category lang={lang} />
      <Home.Explore lang={lang} />
      {/* <Home.FreeGame lang={lang} /> */}
      {/* <Home.Release lang={lang} /> */}
    </Home.Root>
  )
}
