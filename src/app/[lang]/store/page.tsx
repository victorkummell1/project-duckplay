import HomeContent from '@/components/pages/HomeContent'
import { Locale } from '@/config/i18n.config'

interface StoreProps {
  params: { lang: Locale }
}

export default function Store({ params }: StoreProps) {
  return (
    <main className="bg-dark-10 flex min-h-screen flex-col items-center justify-between text-white">
      <HomeContent lang={params.lang} />
    </main>
  )
}
