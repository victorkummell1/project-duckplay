import { BiSolidRightArrow } from 'react-icons/bi'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function SupportMain() {
  return (
    <section className="w-[1216px] max-w-[1216px] flex flex-col items-start justify-start gap-6">
      <Button variant={'default'} className="w-full rounded-none py-6">
        <div className="flex items-center gap-2 w-full">
          <Image
            src={'https://i.imgur.com/TDn1PWt.png'}
            width={64}
            height={64}
            alt="stray"
          />
          <p>Stray</p>
        </div>
        <BiSolidRightArrow className="text-dark-30" />
      </Button>
      <Button variant={'default'} className="w-full rounded-none py-6">
        <div className="flex items-center gap-2 w-full">
          <Image
            src={'https://i.imgur.com/vUBYYd3.png'}
            width={64}
            height={64}
            alt="Stardew Valley"
          />
          <p>Stardew Valley</p>
        </div>
        <BiSolidRightArrow className="text-dark-30" />
      </Button>
      <Button variant={'default'} className="w-full rounded-none py-6">
        <div className="flex items-center gap-2 w-full">
          <Image
            src={'https://i.imgur.com/4QJzo96.png'}
            width={64}
            height={64}
            alt="marqueige"
          />
          <p>Marqueige</p>
        </div>
        <BiSolidRightArrow className="text-dark-30" />
      </Button>
    </section>
  )
}
