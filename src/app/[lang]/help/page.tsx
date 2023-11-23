import SupportContent from '@/components/pages/SupportContent'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

export default function Help({ params }: { params: { lang: Locale } }) {
  const dict = getDicionaryServerOnly(params.lang)

  return (
    <main className="bg-dark-10 flex flex-col items-center justify-between text-white">
      <SupportContent />
    </main>
  )
}
