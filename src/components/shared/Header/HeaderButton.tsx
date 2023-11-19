'use client'

import { Button } from '@/components/ui/button'
import { Locale } from '@/config/i18n.config'
import { useRouter } from 'next/navigation'

interface HeaderButtonProps {
  lang: Locale
  text: string
}

export function HeaderButton({ text }: HeaderButtonProps) {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push('/login')}
      variant="link"
      className="text-white"
    >
      {text}
    </Button>
  )
}
