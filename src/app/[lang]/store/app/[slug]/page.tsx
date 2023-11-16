import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { db } from '@/lib/db'
import Image from 'next/image'
import { BiUser } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { HiChevronRight, HiStar } from 'react-icons/hi'
import {
  PiAppleLogo,
  PiAsteriskBold,
  PiGameController,
  PiLinuxLogo,
  PiWindowsLogo,
} from 'react-icons/pi'

export default async function GamePage({
  params,
}: {
  params: { slug: string }
}) {
  const products = await db.product.findUnique({
    where: {
      slug: params.slug,
    },
  })

  const isDiscount =
    (await products?.discount) === null || (await products?.discount) === 0

  const price = products?.price ?? 0
  const discount = products?.discount ?? 0

  const priceDiscount = price - (price * discount) / 100

  const genres = await db.genre.findUnique({
    where: {
      id: products?.genre_id,
    },
  })

  const distributors = await db.distributor.findUnique({
    where: {
      id: products?.distributor_id,
    },
  })

  const images = await db.image.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  const logos = await db.imageLogo.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  const abouts = await db.imageLogo.findFirst({
    where: {
      product_slug: products?.slug,
    },
  })

  return (
    <main className="bg-assasins-creed-mirage bg-no-repeat bg-contain bg-top text-white">
      <div className="w-full bg-gradient-to-t from-25% from-dark-10 flex flex-col items-center justify-start py-24 gap-12">
        <section className="w-full max-w-6xl flex flex-col items-start justify-center gap-4">
          <div className="flex gap-3 items-center text-dark-30">
            <span>Todos os Jogos</span>
            <HiChevronRight />
            <span>{genres?.name}</span>
            <HiChevronRight />
            <span>{distributors?.name}</span>
            <HiChevronRight />
            <span>{products?.name}</span>
          </div>
          <h1 className="text-white text-5xl font-light">{products?.name}</h1>
          <div className="flex gap-3 items-center">
            <HiStar className="w-[18px] h-[18px]" />
            <HiStar className="w-[18px] h-[18px]" />
            <HiStar className="w-[18px] h-[18px]" />
            <HiStar className="w-[18px] h-[18px]" />
            <HiStar className="w-[18px] h-[18px]" />
            <span className="py-1 px-3 bg-dark-10 border-[1px] border-dark-20 rounded-[4px] font-medium text-lg">
              4.9
            </span>
          </div>
        </section>
        <section className="w-full max-w-6xl flex flex-col items-start justify-center gap-28">
          <div className="w-full max-w-6xl flex items-start justify-center gap-8">
            <div className="w-full max-h-[578] flex flex-col items-start justify-center gap-7">
              <Image
                src={'https://i.imgur.com/2VL43uD.png'}
                width={800}
                height={450}
                alt="Assassins Creed Mirage Game Image"
                className="w-[800px] h-[450px]"
              />
              <div className="flex gap-6 max-w-[800px] max-h-[100px] overflow-hidden">
                <Image
                  src={'https://i.imgur.com/2VL43uD.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 3"
                />
                <Image
                  src={'https://i.imgur.com/2VL43uD.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 1"
                />
                <Image
                  src={'https://i.imgur.com/2VL43uD.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 2"
                />
                <Image
                  src={'https://i.imgur.com/2VL43uD.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 4"
                />
              </div>
            </div>
            <div className="max-w-[384px] h-full max-h-[578px] flex flex-wrap items-center justify-between gap-[42px]">
              <div className="w-full flex flex-col gap-6">
                <Image
                  src={logos?.url || 'https://i.imgur.com/2VL43uD.png'}
                  width={384}
                  height={216}
                  alt={logos?.alt || ''}
                />
                <p className="font-white font-normal text-lg">
                  {products?.description}
                </p>
              </div>
              <div className="w-full flex flex-col gap-6">
                <Button
                  variant={'default'}
                  className="text-base h-14 uppercase w-full bg-green-light hover:bg-green-light/70 py-[18px]"
                >
                  Compre Agora
                </Button>
                <Button
                  variant={'default'}
                  className="text-base h-14 uppercase w-full py-[18px]"
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl flex items-start justify-start gap-8">
            <div className="w-[800px] flex flex-col items-center justify-center gap-16">
              <div className="w-full flex items-center justify-between bg-dark-20 py-5 px-6">
                <span className="font-medium text-2xl">
                  Confira Tudo da {distributors?.name} na Duck Play
                </span>
                <Button
                  variant={'default'}
                  className="bg-brand-color hover:bg-brand-color-darkness uppercase rounded-sm"
                >
                  Saiba Mais
                </Button>
              </div>

              <div className="w-full flex flex-col items-end justify-center bg-dark-20 py-5 px-6 pb-0">
                <div className="w-full flex justify-end gap-2">
                  {products?.linux && <PiLinuxLogo className="w-6 h-6" />}
                  {products?.windows && <PiWindowsLogo className="w-6 h-6" />}
                  {products?.macOs && <PiAppleLogo className="w-6 h-6" />}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl">{products?.name}</span>
                  <p className="font-normal text-base">
                    {products?.planDescription}
                  </p>
                </div>
                {!isDiscount ? (
                  <div className="relative -bottom-6 max-w-lg flex items-center gap-6 justify-center rounded bg-dark-10 border-2 border-dark-20/50 py-[6px] px-2">
                    <span className="text-2xl font-semibold uppercase bg-green-light px-3 py-1 rounded">
                      -{products?.discount}%
                    </span>
                    <div className="flex flex-col items-start justify-center">
                      <span className="font-medium text-xs text-dark-30 line-through">
                        R$ {products?.price}
                      </span>
                      <span className="font-semibold text-base">
                        R$ {priceDiscount.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      variant={'default'}
                      className="text-base uppercase bg-green-light hover:bg-green-light/70"
                    >
                      Selecionar Plano
                    </Button>
                  </div>
                ) : (
                  <div className="relative w-fit -bottom-6 max-w-lg flex items-center gap-6 justify-center rounded bg-dark-10 border-2 border-dark-20/50 py-[6px] px-2 pl-6">
                    <span className="font-semibold text-base">
                      R$ {products?.price}
                    </span>
                    <Button
                      variant={'default'}
                      className="text-base uppercase bg-green-light hover:bg-green-light/70"
                    >
                      Selecionar Plano
                    </Button>
                  </div>
                )}
              </div>
              {/* <div className="w-full flex flex-col items-start justify-center bg-dark-20 py-5 px-6">
                <div className="w-full flex justify-end gap-2">
                  {products?.linux && <PiLinuxLogo className="w-6 h-6" />}
                  {products?.windows && <PiWindowsLogo className="w-6 h-6" />}
                  {products?.macOs && <PiAppleLogo className="w-6 h-6" />}
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl">
                    {products?.name} - Deluxe Edition
                  </span>
                  <p className="font-normal text-base">
                    <marker className="text-brand-color-dark">
                      Inclui 4 items:
                    </marker>{' '}
                    A Edição Deluxe inclui um traje inspirado em Prince of
                    Persia, visuais de águia e montaria, armas e mais! Vivencie
                    a história de Basim, um astucioso ladino de rua que está
                    em...
                  </p>
                </div>
              </div> */}
            </div>
            <div className="bg-dark-20 p-6 rounded">
              <div className="w-[336px] max-h-[458px] bg-[#131823] rounded flex flex-col items-center justify-start gap-8 p-6">
                <div className="w-full flex flex-wrap gap-1">
                  {products?.singleplayer && (
                    <div className="w-full flex items-center bg-dark-20">
                      <div className="bg-dark-10 p-[6px]">
                        <BiUser className="w-5 h-5" />
                      </div>
                      <div className="w-full flex items-center justify-start px-4 text-brand-color">
                        Um Jogador
                      </div>
                    </div>
                  )}
                  {products?.multiplayer && (
                    <div className="w-full flex items-center bg-dark-20">
                      <div className="bg-dark-10 p-[6px]">
                        <FiUsers className="w-5 h-5" />
                      </div>
                      <div className="w-full flex items-center justify-start px-4 text-brand-color">
                        Multiplayer
                      </div>
                    </div>
                  )}
                  {products?.achievements && (
                    <div className="w-full flex items-center bg-dark-20">
                      <div className="bg-dark-10 p-[6px]">
                        <PiAsteriskBold className="w-5 h-5" />
                      </div>
                      <div className="w-full flex items-center justify-start px-4 text-brand-color">
                        Conquistas Duck Play
                      </div>
                    </div>
                  )}
                  {products?.gamepad && (
                    <div className="w-full flex items-center bg-dark-20">
                      <div className="bg-dark-10 p-[6px]">
                        <PiGameController className="w-5 h-5" />
                      </div>
                      <div className="w-full flex items-center justify-start px-4 text-brand-color">
                        Compat. parcial com controle
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-8">
            <h2 className="font-normal text-[32px]">Sobre este jogo</h2>
            <Image
              src={abouts?.url || 'https://i.imgur.com/CfpdN8T.png'}
              width={1216}
              height={250}
              alt={abouts?.alt || ''}
            />
            <p>{products?.about}</p>
            {/* <ul className="pl-12 list-disc text-base font-normal">
              <li className="list-item">
                Experimente uma visão moderna da jogabilidade e dos recursos
                icônicos que definiram a franquia por 15 anos.
              </li>
              <li className="list-item">
                Passeie de forma fluida pela cidade e elimine inimigos
                furtivamente com assassinatos ainda mais viscerais.
              </li>
              <li className="list-item">
                Explore uma cidade bastante populosa e agitada, cujos habitantes
                reagem a cada movimento seu, e revele os segredos de quatro
                distritos peculiares, enquanto se aventura pela Era Dourada de
                Bagdá.
              </li>
            </ul> */}
          </div>
          <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-8">
            <h3 className="font-normal text-[32px]">Requisitos de sistema</h3>
            <Tabs
              defaultValue="windows"
              className="w-full max-w-6xl flex flex-col items-start"
            >
              <TabsList className="w-full flex justify-start rounded-none bg-dark-20 text-white active:bg-transparent p-6">
                <TabsTrigger value="windows">Windows</TabsTrigger>
                {products?.linux && (
                  <TabsTrigger value="linux">Linux</TabsTrigger>
                )}
                {products?.macOs && (
                  <TabsTrigger value="macOs">MacOS</TabsTrigger>
                )}
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
                        <span className="font-medium text-xl">
                          Windows 10/11
                        </span>
                      </li>
                      <li className="flex flex-col gap-2">
                        <span className="font-medium text-xl text-dark-30">
                          Processador
                        </span>
                        <span className="font-medium text-xl">
                          Intel Core i7
                        </span>
                      </li>
                      <li className="flex flex-col gap-2">
                        <span className="font-medium text-xl text-dark-30">
                          Placa de Vídeo
                        </span>
                        <span className="font-medium text-xl">
                          Intel Core i7
                        </span>
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
                        <span className="font-medium text-xl">
                          Windows 10/11
                        </span>
                      </li>
                      <li className="flex flex-col gap-2">
                        <span className="font-medium text-xl text-dark-30">
                          Processador
                        </span>
                        <span className="font-medium text-xl">
                          Intel Core i7
                        </span>
                      </li>
                      <li className="flex flex-col gap-2">
                        <span className="font-medium text-xl text-dark-30">
                          Placa de Vídeo
                        </span>
                        <span className="font-medium text-xl">
                          Intel Core i7
                        </span>
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
                        <span className="font-medium text-xl">
                          TDB MB de RAM
                        </span>
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
                        <span className="font-medium text-xl">
                          TDB MB de RAM
                        </span>
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
                        <span className="font-medium text-xl">
                          TDB MB de RAM
                        </span>
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
                        <span className="font-medium text-xl">
                          TDB MB de RAM
                        </span>
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
          </div>
          {products?.recommended && (
            <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-10">
              <h3 className="font-normal text-[32px]">
                Outros jogos da {distributors?.name}
              </h3>
              <div className="w-full flex flex-col items-center justify-between bg-dark-20 gap-7 py-5 px-6">
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-2xl">
                      Watch Dogs: Legion
                    </span>
                    <span className="font-medium text-lg text-dark-30">
                      Já que jogou{' '}
                      <marker className="text-white">Assassin&#39;s</marker>{' '}
                      Creed recentemente
                    </span>
                  </div>
                  <Button
                    variant={'default'}
                    className="bg-brand-color hover:bg-brand-color-darkness rounded-sm px-8 py-[10px]"
                  >
                    Visitar página do produto
                  </Button>
                </div>
                <div className="w-full flex items-start gap-[17px]">
                  <Image
                    src="/games/WatchDogsLegion-1.png"
                    width={260}
                    height={140}
                    alt="Watch Dogs: Legion"
                    className="rounded"
                  />
                  <Image
                    src="/games/WatchDogsLegion-2.png"
                    width={260}
                    height={140}
                    alt="Watch Dogs: Legion"
                    className="rounded"
                  />
                  <Image
                    src="/games/WatchDogsLegion-3.png"
                    width={260}
                    height={140}
                    alt="Watch Dogs: Legion"
                    className="rounded"
                  />
                  <Image
                    src="/games/WatchDogsLegion-4.png"
                    width={260}
                    height={140}
                    alt="Watch Dogs: Legion"
                    className="rounded"
                  />
                </div>
                <div className="w-full flex items-center justify-start gap-6">
                  <span className="font-semibold text-lg px-2 py-1 bg-brand-color rounded">
                    -33%
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-lg text-dark-30 line-through">
                      R$ 300,00
                    </span>
                    <span className="font-medium text-lg">R$ 200,00</span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-between bg-dark-20 gap-7 py-5 px-6">
                <div className="w-full flex items-center justify-between">
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-2xl">
                      Riders Republic
                    </span>
                    <span className="font-medium text-lg text-dark-30">
                      Já que jogou{' '}
                      <marker className="text-white">Assassin&#39;s</marker>{' '}
                      Creed recentemente
                    </span>
                  </div>
                  <Button
                    variant={'default'}
                    className="bg-brand-color hover:bg-brand-color-darkness rounded-sm px-8 py-[10px]"
                  >
                    Visitar página do produto
                  </Button>
                </div>
                <div className="w-full flex items-start gap-[17px]">
                  <Image
                    src="/games/RidersRepublic-1.png"
                    width={260}
                    height={140}
                    alt="Riders Republic"
                    className="rounded"
                  />
                  <Image
                    src="/games/RidersRepublic-2.png"
                    width={260}
                    height={140}
                    alt="Riders Republic"
                    className="rounded"
                  />
                  <Image
                    src="/games/RidersRepublic-3.png"
                    width={260}
                    height={140}
                    alt="Riders Republic"
                    className="rounded"
                  />
                  <Image
                    src="/games/RidersRepublic-4.png"
                    width={260}
                    height={140}
                    alt="Riders Republic"
                    className="rounded"
                  />
                </div>
                <div className="w-full flex items-center justify-start gap-6">
                  <span className="font-semibold text-lg px-2 py-1 bg-brand-color rounded">
                    -33%
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-lg text-dark-30 line-through">
                      R$ 300,00
                    </span>
                    <span className="font-medium text-lg">R$ 200,00</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        <span className="max-w-6xl text-dark-30">
          © 2023 {distributors?.name} Entertainment. All Rights Reserved.{' '}
          {products?.name}, {distributors?.name}, and the {distributors?.name}{' '}
          logo are registered or unregistered trademarks of {distributors?.name}{' '}
          Entertainment in the US and/or other countries.
        </span>
      </div>
    </main>
  )
}
