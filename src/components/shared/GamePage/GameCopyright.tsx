import { db } from '@/lib/db'

export async function GameCopyright({ params }: { params: { slug: string } }) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })

  const distributors = await db.distributor.findUnique({
    where: {
      id: products?.distributor_id,
    },
  })

  const developers = await db.developer.findUnique({
    where: {
      id: products?.developer_id,
    },
  })

  return (
    <section className="w-[1216px] max-w-[1216px]">
      <span className="text-dark-30">
        © 2023 {distributors?.name} Entertainment. All Rights Reserved.{' '}
        {products?.name}, {developers?.name},{distributors?.name}, and the{' '}
        {products?.name} logo are registered or unregistered trademarks of{' '}
        {distributors?.name} Entertainment in the US and/or other countries.
      </span>
    </section>
  )
}
