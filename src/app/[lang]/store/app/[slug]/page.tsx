import GameContent from '@/components/pages/GameContent'

export default async function GamePage({
  params,
}: {
  params: { slug: string }
}) {
  return <GameContent params={params} />
}
