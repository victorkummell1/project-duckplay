import { ReactNode } from 'react'

interface HomeRootProps {
  children: ReactNode
}

export function HomeRoot({ children }: HomeRootProps) {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-[118px] py-32">
      {children}
    </main>
  )
}
