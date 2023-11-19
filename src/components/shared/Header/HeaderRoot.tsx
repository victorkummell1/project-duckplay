import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <div className="z-10 max-w-9xl w-full items-center justify-between text-sm flex">
      {children}
    </div>
  )
}
