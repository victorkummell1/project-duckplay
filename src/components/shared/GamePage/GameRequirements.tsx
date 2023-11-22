import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'
import { db } from '@/lib/db'

interface GameRequirementsProps {
  params: { slug: string }
  lang: Locale
}

export async function GameRequirements({
  params,
  lang,
}: GameRequirementsProps) {
  const dict = getDicionaryServerOnly(lang)

  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })

  return (
    <section className="w-[1216px] max-w-[1216px] h-[726px] max-h[726px] flex flex-col items-start justify-start gap-6">
      <h3 className="font-normal text-[32px]">
        {dict.store.gamePage.requiriments}
      </h3>
      <Tabs defaultValue="windows" className="w-full flex flex-col items-start">
        <TabsList className="w-full flex justify-start rounded-none bg-dark-20 text-white active:bg-transparent p-6">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          {products?.linux && <TabsTrigger value="linux">Linux</TabsTrigger>}
          {products?.macOs && <TabsTrigger value="macOs">MacOS</TabsTrigger>}
        </TabsList>
        <TabsContent value="windows" className="w-full">
          <div className="w-full flex gap-[100px] bg-dark-20 p-6">
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Mínimo</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">Windows 10/11</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">Intel Core i7</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">Intel Core i7</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">8 GB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">40 GB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">1080p</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Recomendado</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">Windows 10/11</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">Intel Core i7</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">Intel Core i7</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">16 GB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">40 GB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">1080p</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="linux" className="w-full">
          <div className="w-full flex gap-[100px] bg-dark-20 p-6">
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Mínimo</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">Linux</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">TDB MB de RAM</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Recomendado</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">Linux</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">TDB MB de RAM</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="macOs" className="w-full">
          <div className="w-full flex gap-[100px] bg-dark-20 p-6">
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Mínimo</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">MacOs</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">TDB MB de RAM</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <span className="font-medium text-2xl">Recomendado</span>
              <ul className="flex flex-col items-start justify-center gap-8">
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Sistema Operacional
                  </span>
                  <span className="font-medium text-xl">MacOs</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Processador
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Placa de Vídeo
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Mémoria
                  </span>
                  <span className="font-medium text-xl">TDB MB de RAM</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Armazenamento
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-medium text-xl text-dark-30">
                    Resolução
                  </span>
                  <span className="font-medium text-xl">TDB</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
