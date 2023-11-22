import GameContent from '@/components/pages/GameContent'
import { Locale } from '@/config/i18n.config'

interface GamePageProps {
  params: { slug: string; lang: Locale }
}

export default function GamePage({ params }: GamePageProps) {
  return <GameContent params={params} lang={params.lang} />
}
