import HomeContent from '@/components/pages/HomeContent'
import { Locale } from '@/config/i18n.config'

export default function Store({ params }: { params: { lang: Locale } }) {
  return (
    <main className="bg-dark-10 flex min-h-screen flex-col items-center justify-between text-white">
      <HomeContent lang={params.lang} />
    </main>
  )
}
