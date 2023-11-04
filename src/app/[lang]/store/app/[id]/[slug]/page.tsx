import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { BiUser } from 'react-icons/bi'
import { HiChevronRight, HiStar } from 'react-icons/hi'
import {
  PiAsteriskBold,
  PiDeviceTabletCamera,
  PiGameController,
  PiLinuxLogo,
  PiWindowsLogo,
} from 'react-icons/pi'

export default function GamePage() {
  return (
    <main className="bg-assasins-creed-mirage bg-no-repeat bg-contain bg-top text-white">
      <div className="w-full bg-gradient-to-t from-25% from-dark-10 flex flex-col gap-6 items-center justify-start py-24 gap-12">
        <section className="w-full max-w-6xl flex flex-col items-start justify-center gap-4">
          <div className="flex gap-3 items-center text-dark-30">
            <span>Todos os Jogos</span>
            <HiChevronRight />
            <span>Ação e aventura</span>
            <HiChevronRight />
            <span>Ubisoft</span>
            <HiChevronRight />
            <span>Assassin&#39;s Creed</span>
          </div>
          <h1 className="text-white text-5xl font-light">
            Assassin&#39;s Creed Mirage
          </h1>
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
                src={'/games/Assassins_Creed_Mirage_Game 1.png'}
                width={800}
                height={450}
                alt="Assassins Creed Mirage Game Image"
                className="w-[800px] h-[450px]"
              />
              <div className="flex gap-6 max-w-[800px] max-h-[100px] overflow-hidden">
                <Image
                  src={'/games/Assassins_Creed_Mirage_Game 3.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 3"
                />
                <Image
                  src={'/games/Assassins_Creed_Mirage_Game 1.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 1"
                />
                <Image
                  src={'/games/Assassins_Creed_Mirage_Game 2.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 2"
                />
                <Image
                  src={'/games/Assassins_Creed_Mirage_Game 4.png'}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 4"
                />
              </div>
            </div>
            <div className="max-w-[384px] h-[578px] flex flex-wrap items-center justify-between gap-[42px]">
              <div className="w-full flex flex-col gap-6">
                <Image
                  src={'/Assassins_Creed_Mirage_GameLogo.png'}
                  width={384}
                  height={216}
                  alt="Assassins Creed Mirage Game Logo"
                />
                <p className="font-white font-normal text-lg">
                  Assassin&#39;s Creed Mirage é um jogo de ação e aventura
                  desenvolvido pela Ubisoft Bordeaux e publicado pela Ubisoft. É
                  a décima terceira parcela principal da série Assassin&#39;s
                  Creed e a sucessora de Assassin&#39;s Creed Valhalla de 2020.
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
            <div className="w-[800px] flex flex-col items-center justify-center gap-8">
              <div className="w-full flex items-center justify-between bg-dark-20 py-5 px-6">
                <span className="font-medium text-2xl">
                  Confira Tudo da Ubisoft na Duck Play
                </span>
                <Button
                  variant={'default'}
                  className="bg-brand-color hover:bg-brand-color-darkness uppercase rounded-sm"
                >
                  Saiba Mais
                </Button>
              </div>
              <div className="w-full flex flex-col items-start justify-center bg-dark-20 py-5 px-6">
                <div className="w-full flex justify-end gap-2">
                  <PiLinuxLogo className="w-6 h-6" />
                  <PiWindowsLogo className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl">
                    Assasin&#39;s Creed Mirage
                  </span>
                  <p className="font-normal text-base">
                    Vivencie a história de Basim, um astucioso ladino de rua com
                    visões aterradoras que está em busca de respostas e de
                    justiça enquanto percorre as ruas agitadas da Bagdá do
                    século IX...
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-center bg-dark-20 py-5 px-6">
                <div className="w-full flex justify-end gap-2">
                  <PiLinuxLogo className="w-6 h-6" />
                  <PiWindowsLogo className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-medium text-2xl">
                    Assasin&#39;s Creed Mirage - Deluxe Edition
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
              </div>
            </div>
            <div className="bg-dark-20 p-6 rounded">
              <div className="w-[336px] h-[458px] bg-[#131823] rounded flex flex-col items-center justify-start gap-8 p-6">
                <div className="w-full flex flex-wrap gap-1">
                  <div className="w-full flex items-center bg-dark-20">
                    <div className="bg-dark-10 p-[6px]">
                      <BiUser className="w-5 h-5" />
                    </div>
                    <div className="w-full flex items-center justify-start px-4 text-brand-color">
                      Um Jogador
                    </div>
                  </div>
                  <div className="w-full flex items-center bg-dark-20">
                    <div className="bg-dark-10 p-[6px]">
                      <PiAsteriskBold className="w-5 h-5" />
                    </div>
                    <div className="w-full flex items-center justify-start px-4 text-brand-color">
                      Conquistas Duck Play
                    </div>
                  </div>
                  <div className="w-full flex items-center bg-dark-20">
                    <div className="bg-dark-10 p-[6px]">
                      <PiGameController className="w-5 h-5" />
                    </div>
                    <div className="w-full flex items-center justify-start px-4 text-brand-color">
                      Compat. parcial com controle
                    </div>
                  </div>
                  <div className="w-full flex items-center bg-dark-20">
                    <div className="bg-dark-10 p-[6px]">
                      <PiDeviceTabletCamera className="w-5 h-5" />
                    </div>
                    <div className="w-full flex items-center justify-start px-4 text-brand-color">
                      Remote play no tablet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-8">
            <h2 className="font-normal text-[32px]">Sobre este jogo</h2>
            <Image
              src={'/Assassins_Creed_Mirage_banner.png'}
              width={1216}
              height={250}
              alt="Assassins Creed Mirage banner"
            />
            <p>
              Vivencie a história de Basim, um ladrão de rua astuto em busca de
              respostas e justiça, enquanto percorre as agitadas ruas de Bagdá
              do século IX. Por meio de uma antiga e misteriosa organização,
              conhecida como Ocultos, ele se tornará um Mestre Assassino mortal
              e transformará seu destino de maneiras que ele nunca poderia
              imaginar.
            </p>
            <ul className="pl-12 list-disc text-base font-normal">
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
            </ul>
          </div>
          <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-8">
            <h3 className="font-normal text-[32px]">Requisitos de sistema</h3>
            <Tabs
              defaultValue="windows"
              className="w-full max-w-6xl flex flex-col items-start"
            >
              <TabsList className="w-full flex justify-start rounded-none bg-dark-20 text-white active:bg-transparent p-6">
                <TabsTrigger value="windows">Windows</TabsTrigger>
                <TabsTrigger value="linux">Linux</TabsTrigger>
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
            </Tabs>
          </div>
          <div className="w-full max-w-6xl flex flex-col items-start justify-start gap-10">
            <h3 className="font-normal text-[32px]">Outros jogos da Ubisoft</h3>
            <div className="w-full flex flex-col items-center justify-between bg-dark-20 gap-7 py-5 px-6">
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <span className="font-medium text-2xl">
                    Watch Dogs: Legion
                  </span>
                  <span className="font-medium text-lg text-dark-30">
                    Já que jogou{' '}
                    <marker className="text-white">Assassin&#39;s</marker> Creed
                    recentemente
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
                  <span className="font-medium text-2xl">Riders Republic</span>
                  <span className="font-medium text-lg text-dark-30">
                    Já que jogou{' '}
                    <marker className="text-white">Assassin&#39;s</marker> Creed
                    recentemente
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
        </section>
        <span className="max-w-6xl text-dark-30">
          © 2023 Ubisoft Entertainment. All Rights Reserved. Assassin&#39;s
          Creed, Ubisoft, and the Ubisoft logo are registered or unregistered
          trademarks of Ubisoft Entertainment in the US and/or other countries.
        </span>
      </div>
    </main>
  )
}
