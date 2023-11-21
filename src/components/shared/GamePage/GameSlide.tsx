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
  const thumbImage = await db.image.findMany({
    where: {
      product_slug: products?.slug,
    },
  })

  const isImages = thumbImage.length > 0

  return (
    <section className="w-[800px] max-w-[800px] h-[578px] max-h-[578px] flex flex-col gap-7">
      <Image
        src={images?.url || 'https://i.imgur.com/2VL43uD.png'}
        width={800}
        height={450}
        alt={images?.alt || 'Image Not Found.'}
        className="w-[800px] h-[450px]"
      />
      <div className="w-full h-[100px] flex items-center justify-start gap-6 overflow-hidden">
        {isImages ? (
          thumbImage.map((image, index) => (
            <Image
              key={index}
              src={image.url || 'https://i.imgur.com/2VL43uD.png'}
              width={182}
              height={100}
              alt={images?.alt || 'Image Not Found.'}
            />
          ))
        ) : (
          <div className="w-full flex items-center justify-start gap-6">
            <Image
              src="https://i.imgur.com/2VL43uD.png"
              width={182}
              height={100}
              alt="Image Not Found."
            />
            <Image
              src="https://i.imgur.com/2VL43uD.png"
              width={182}
              height={100}
              alt="Image Not Found."
            />
            <Image
              src="https://i.imgur.com/2VL43uD.png"
              width={182}
              height={100}
              alt="Image Not Found."
            />
            <Image
              src="https://i.imgur.com/2VL43uD.png"
              width={182}
              height={100}
              alt="Image Not Found."
            />
          </div>
        )}
      </div>
    </section>
  )
}
