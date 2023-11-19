import { Locale } from '@/config/i18n.config'
import { Header } from './Header'

type Props = { lang: Locale }

export default async function Navbar({ lang }: Props) {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-10/80 flex max-h-20 items-center justify-center p-8">
        <Header.Root>
          <Header.Link lang={lang} />
          <section className="hidden lg:flex items-center space-x-4">
            <Header.Session lang={lang} />
            <Header.Language lang={lang} />
          </section>
        </Header.Root>
      </header>
    </>
  )
}
