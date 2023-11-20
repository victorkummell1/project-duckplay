import { ReactNode } from 'react'

interface GameRootProps {
  children: ReactNode
}

export default function GameRoot({ children }: GameRootProps) {
  return <div>{children}</div>
}
