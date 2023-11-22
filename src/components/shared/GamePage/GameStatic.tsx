import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { db } from '@/lib/db'
import { BiUser } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { PiAsteriskBold, PiGameController } from 'react-icons/pi'

interface GameStaticProps {
  params: { slug: string }
  lang: Locale
}

export async function GameStatic({ params, lang }: GameStaticProps) {
  const dict = getDicionaryServerOnly(lang)

  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })

  return (
    <section className="w-[384px] max-w-[384px] h-[505px] max-h-[505px] rounded bg-dark-20 p-6">
      <div className="w-[336px] max-w-[336px] h-[458px] max-h-[458px] rounded bg-dark-10">
        <section className="w-[288px] max-w-[288px] h-[144px] max-h-[144px] flex flex-col p-6 gap-[2px]">
          {products?.singleplayer && (
            <div className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center justify-start">
              <span className="w-[32px] max-w-[32px] h-[33px] max-h-[33px] flex items-center justify-center bg-darkness-10">
                <BiUser className="w-5 h-5" />
              </span>
              <p className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center bg-brand-color/10 px-4 text-brand-color">
                {dict.store.gamePage.singleplayer}
              </p>
            </div>
          )}
          {products?.multiplayer && (
            <div className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center justify-start">
              <span className="w-[32px] max-w-[32px] h-[33px] max-h-[33px] flex items-center justify-center bg-darkness-10">
                <FiUsers className="w-5 h-5" />
              </span>
              <p className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center bg-brand-color/10 px-4 text-brand-color">
                {dict.store.gamePage.multiplayer}
              </p>
            </div>
          )}
          {products?.achievements && (
            <div className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center justify-start">
              <span className="w-[32px] max-w-[32px] h-[33px] max-h-[33px] flex items-center justify-center bg-darkness-10">
                <PiAsteriskBold className="w-5 h-5" />
              </span>
              <p className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center bg-brand-color/10 px-4 text-brand-color">
                Conquistas Duck Play
              </p>
            </div>
          )}
          {products?.gamepad && (
            <div className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center justify-start">
              <span className="w-[32px] max-w-[32px] h-[33px] max-h-[33px] flex items-center justify-center bg-darkness-10">
                <PiGameController className="w-5 h-5" />
              </span>
              <p className="w-[288px] max-w-[288px] h-[33px] max-h-[33px] flex items-center bg-brand-color/10 px-4 text-brand-color">
                Compat. Parcial com Controle
              </p>
            </div>
          )}
        </section>
        <section className="w-[288px] max-w-[288px] h-[144px] max-h-[144px]"></section>
      </div>
    </section>
  )
}
