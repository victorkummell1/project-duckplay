import { Support } from '../shared/SupportPage'

export default function SupportContent() {
  return (
    <main className="w-[1216px] max-w-[1216px] flex flex-col items-center justify-center gap-12 p-24">
      <Support.Head />
      <Support.Main />
      <Support.Search />
    </main>
  )
}
