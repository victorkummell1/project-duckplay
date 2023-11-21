import { Home } from '../shared/HomePage'

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-[118px] mb-[100px]">
      <Home.Slide />
      <Home.Search />
      <Home.Category />
      <Home.Explore />
      <Home.FreeGame />
      <Home.Release />
    </main>
  )
}
