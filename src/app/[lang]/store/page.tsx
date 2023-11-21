import HomeContent from '@/components/pages/HomeContent'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

export default function Store({ params }: { params: { lang: Locale } }) {
  const dict = getDicionaryServerOnly(params.lang)

  return (
    <main className="bg-dark-10 flex min-h-screen flex-col items-center justify-between text-white">
      <HomeContent />
    </main>
  )
}
