import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { GiBrazilFlag } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import {
  PiGameController,
  PiMedalMilitary,
  PiPerson,
  PiRocket,
} from "react-icons/pi";

export default function Profile() {
  return (
    <main className="bg-assasins-creed bg-fixed bg-no-repeat bg-cover h-[1000px] text-white">
      <div className="w-full bg-black/20 backdrop-blur-sm flex h-[1000px] flex-col items-center justify-center">
        <div className="bg-dark-10 w-[1216px] h-[840px] rounded-lg flex flex-col items-center justify-between p-10">
          <section className="flex w-full">
            <div className="w-full max-h-60 flex gap-14">
              <div className="flex gap-10">
                <Image
                  src={"/Null_Image.png"}
                  width={240}
                  height={240}
                  alt="Image de Perfil"
                  className="rounded-lg"
                />
                <div className="flex flex-col gap-3">
                  <h1 className="font-light text-5xl">Victor Kummel</h1>
                  <div className="flex gap-3 items-center">
                    <span className="font-light text-base">
                      Imbituba, Brasil
                    </span>
                    <GiBrazilFlag className="text-green-500 w-6 h-6" />
                  </div>
                  <div className="flex mt-14">
                    <ul className="flex items-center list-none gap-14">
                      <li className="flex flex-col items-start justify-center">
                        <span className="font-light uppercase">Conquistas</span>
                        <div className="flex gap-3 items-center justify-start">
                          <PiMedalMilitary className="w-8 h-8 text-brand-color" />
                          <span className="font-light uppercase">40</span>
                        </div>
                      </li>
                      <li className="flex flex-col items-start justify-center">
                        <span className="font-light uppercase">
                          Total de XP
                        </span>
                        <div className="flex gap-3 items-start justify-center">
                          <PiRocket className="w-8 h-8 text-brand-color" />
                          <span className="font-light uppercase">241</span>
                        </div>
                      </li>
                      <li className="flex flex-col items-start justify-center">
                        <span className="font-light uppercase">Jogos</span>
                        <div className="flex gap-3 items-center justify-start">
                          <PiGameController className="w-8 h-8 text-brand-color" />
                          <span className="font-light uppercase">32</span>
                        </div>
                      </li>
                      <li className="flex flex-col items-start justify-center">
                        <span className="font-light uppercase">Amigos</span>
                        <div className="flex gap-3 items-center justify-start">
                          <PiPerson className="w-8 h-8 text-brand-color" />
                          <span className="font-light uppercase">4</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-dark-20 w-12 h-12 p-2">
              <GoGear className="w-full h-full text-white" />
            </Button>
          </section>
          <section className="flex flex-col w-full gap-12">
            <div className="w-full flex items-center justify-between">
              <span className="font-light text-3xl">Atividades Recentes</span>
              <span className="font-light text-base">
                16 horas nas 2 últimas semanas
              </span>
            </div>
            <section className="flex flex-col items-start justify-between w-full gap-10">
              <div className="w-full flex items-center gap-8">
                <Image
                  src={"/GhostWire-Tokyo 2.png"}
                  width={280}
                  height={150}
                  alt="GhostWire-Tokyo 2"
                />
                <div className="w-full flex flex-col items-start justify-center gap-8">
                  <span className="font-light text-2xl">Ghostwire: Tokyo</span>
                  <div className="flex flex-col gap-3">
                    <span className="font-light">Progresso de Conquista</span>
                    <Progress value={35} className="w-52 bg-dark-20" />
                    <div className="w-full flex justify-between">
                      <span className="font-light">35%</span>
                      <span className="font-light">Conquistas 12/34</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-8">
                  <Button
                    variant={"default"}
                    className="py-3 px-10 bg-brand-color uppercase hover:bg-brand-color-darkness">
                    Jogar Agora
                  </Button>
                  <div className="flex flex-col items-end justify-center">
                    <span className="font-light">23 horas registradas</span>
                    <span className="font-light text-dark-30">
                      Jogado pela última vez em 8 de out.
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center gap-8">
                <Image
                  src={"/assassins-creed-valhalla 2.png"}
                  width={280}
                  height={150}
                  alt="Assassin's Creed Valhalla"
                />
                <div className="w-full flex flex-col items-start justify-center gap-8">
                  <span className="font-light text-2xl">
                    Assassins Creed Valhalla
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="font-light">Progresso de Conquista</span>
                    <Progress value={50} className="w-52 bg-dark-20" />
                    <div className="w-full flex justify-between">
                      <span className="font-light">50%</span>
                      <span className="font-light">Conquistas 25/50</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-8">
                  <Button
                    variant={"default"}
                    className="py-3 px-10 bg-brand-color uppercase hover:bg-brand-color-darkness">
                    Jogar Agora
                  </Button>
                  <div className="flex flex-col items-end justify-center">
                    <span className="font-light">211 horas registradas</span>
                    <span className="font-light text-dark-30">
                      Jogado pela última vez em 2 de out.
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
