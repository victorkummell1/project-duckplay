'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { GoGear } from 'react-icons/go'

interface EditButtonProps {
  link: string
}

export function EditButton({ link }: EditButtonProps) {
  const router = useRouter()

  return (
    <Button
      className="bg-dark-20 w-12 h-12 p-2"
      onClick={() => router.push(link)}
    >
      <GoGear className="w-full h-full text-white" />
    </Button>
  )
}
