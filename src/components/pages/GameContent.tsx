import { Game } from '../shared/GamePage'

export default function GameContent({ params }: { params: { slug: string } }) {
  return (
    <main className="bg-assasins-creed-mirage bg-no-repeat bg-contain bg-top text-white">
      <div className="w-full flex flex-col items-center justify-start py-24 gap-12">
        <Game.Root>
          <div className="flex flex-col justify-center gap-[100px]">
            <section className="flex flex-col justify-center gap-[30px]">
              <Game.Head params={params} />
              <section className="flex items-center gap-8">
                <Game.Slide params={params} />
                <Game.Details params={params} />
              </section>
            </section>
            <section className="h-[505px] flex items-start justify-between gap-[33px]">
              <section className="flex flex-col items-start justify-center gap-[34px]">
                <Game.Banner params={params} />
                <Game.Plan params={params} />
              </section>
              <section className="flex flex-col justify-center">
                <Game.Static params={params} />
              </section>
            </section>
            <Game.About params={params} />
            <Game.Requirements params={params} />
            <Game.Copyright params={params} />
          </div>
        </Game.Root>
      </div>
    </main>
  )
}
