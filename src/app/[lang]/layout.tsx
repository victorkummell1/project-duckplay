import '@/app/globals.css'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import { Locale, i18n } from '@/config/i18n.config'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }))
  return languages
}

export const metadata: Metadata = {
  title: 'Seja Bem-Vindo(a) ao Duck Play',
  description:
    'Gratuitos para jogar. Terror. Aventura. RPG. Inicie a sessão para ver mais recomendações personalizadas. Iniciar sessão. Ou cadastre-se no DuckPlay gratuitamente.',
  // openGraph: {
  //   images: "/opengraph-thumbnail.png",
  // },
}

type Props = {
  params: { lang: Locale }
  children: React.ReactNode
}

export default function RootLayout({ params, children }: Props) {
  return (
    <html lang={params.lang}>
      <body className={(inter.className, 'bg-dark-10')}>
        <Navbar lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
