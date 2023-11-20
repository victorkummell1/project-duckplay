import { db } from '@/lib/db'
import Image from 'next/image'

export async function GameSlide({ params }: { params: { slug: string } }) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })
  const images = await db.image.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  return (
    <section className="w-[800px] max-w-[800px] h-[578px] max-h-[578px] flex flex-col gap-7">
      <Image
        src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
        width={800}
        height={450}
        alt="Assassins Creed Mirage Game Image"
        className="w-[800px] h-[450px]"
      />
      <div className="w-full h-[100px] flex items-center justify-between overflow-hidden">
        <Image
          src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
          width={182}
          height={100}
          alt="Assassins Creed Mirage Game Image 3"
        />
        <Image
          src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
          width={182}
          height={100}
          alt="Assassins Creed Mirage Game Image 1"
        />
        <Image
          src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
          width={182}
          height={100}
          alt="Assassins Creed Mirage Game Image 2"
        />
        <Image
          src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
          width={182}
          height={100}
          alt="Assassins Creed Mirage Game Image 4"
        />
      </div>
    </section>
  )
}
