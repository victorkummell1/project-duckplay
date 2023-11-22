import { ReactNode } from 'react'

interface HomeRootProps {
  children: ReactNode
}

export function HomeRoot({ children }: HomeRootProps) {
  return (
    <main className="w-full flex flex-col items-center justify-center gap-[118px] mb-[100px]">
      {children}
    </main>
  )
}