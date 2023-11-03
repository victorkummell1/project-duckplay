import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import { HiChevronRight, HiStar } from "react-icons/hi";
import { PiAsteriskBold, PiDeviceTabletCamera, PiGameController, PiLinuxLogo, PiWindowsLogo } from "react-icons/pi";

export default function GamePage() {
  return (
    <main className="bg-assasins-creed-mirage bg-no-repeat bg-contain bg-top h-[1000px] text-white">
      <div className="w-full bg-gradient-to-t from-25% from-dark-10 flex min-h-[1000px] flex-col gap-6 items-center justify-start py-24">
        <section className="w-full max-w-6xl flex flex-col items-start justify-center gap-4">
          <div className="flex gap-3 items-center text-dark-30">
            <span>Todos os Jogos</span>
            <HiChevronRight />
            <span>Ação e aventura</span>
            <HiChevronRight />
            <span>Ubisoft</span>
            <HiChevronRight />
            <span>Assasin&#39;s Creed</span>
          </div>
          <h1 className="text-white text-5xl font-light">
            Assasin&#39;s Creed Mirage
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
          <div className="w-full max-w-6xl max-h-[578] flex items-start justify-center gap-8">
            <div className="w-full max-h-[578] flex flex-col items-start justify-center gap-7">
              <Image
                src={"/games/Assassins_Creed_Mirage_Game 1.png"}
                width={800}
                height={450}
                alt="Assassins Creed Mirage Game Image"
                className="w-[800px] h-[450px]"
              />
              <div className="flex gap-6 max-w-[800px] max-h-[100px] overflow-hidden">
                <Image
                  src={"/games/Assassins_Creed_Mirage_Game 3.png"}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 3"
                />
                <Image
                  src={"/games/Assassins_Creed_Mirage_Game 1.png"}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 1"
                />
                <Image
                  src={"/games/Assassins_Creed_Mirage_Game 2.png"}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 2"
                />
                <Image
                  src={"/games/Assassins_Creed_Mirage_Game 4.png"}
                  width={182}
                  height={100}
                  alt="Assassins Creed Mirage Game Image 4"
                />
              </div>
            </div>
            <div className="max-w-[384px] h-[578px] flex flex-wrap items-center justify-between gap-[42px]">
              <div className="w-full flex flex-col gap-6">
                <Image
                  src={"/Assassins_Creed_Mirage_GameLogo.png"}
                  width={384}
                  height={216}
                  alt="Assassins Creed Mirage Game Logo"
                />
                <p className="font-white font-normal text-lg">
                  Assassin's Creed Mirage é um jogo de ação e aventura
                  desenvolvido pela Ubisoft Bordeaux e publicado pela Ubisoft. É
                  a décima terceira parcela principal da série Assassin's Creed
                  e a sucessora de Assassin's Creed Valhalla de 2020.
                </p>
              </div>
              <div className="w-full flex flex-col gap-6">
                <Button
                  variant={"default"}
                  className="text-base h-14 uppercase w-full bg-green-light hover:bg-green-light/70 py-[18px]">
                  Compre Agora
                </Button>
                <Button
                  variant={"default"}
                  className="text-base h-14 uppercase w-full py-[18px]">
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl max-h-[505px] flex items-start justify-center gap-8">
            <div className="w-[800px] flex flex-col items-center justify-center gap-8">
              <div className="w-full flex items-center justify-between bg-dark-20 py-5 px-6">
                <span className="font-medium text-2xl">
                  Confira Tudo da Ubisoft na Duck Play
                </span>
                <Button
                  variant={"default"}
                  className="bg-brand-color uppercase rounded-sm">
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
                    </marker>{" "}
                    A Edição Deluxe inclui um traje inspirado em Prince of
                    Persia, visuais de águia e montaria, armas e mais! Vivencie
                    a história de Basim, um astucioso ladino de rua que está
                    em...
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-dark-20 p-6 rounded">
              <div className="w-[336px] h-[458px] bg-[#131823] rounded flex flex-col items-center justify-start p-6">
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
        </section>
      </div>
    </main>
  );
}
