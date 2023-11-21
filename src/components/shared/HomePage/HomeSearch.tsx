import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function HomeSearch() {
  return (
    <section className="w-[1216px] max-w-[1216px] flex items-center justify-center">
      <Tabs
        defaultValue="news-trends"
        className="w-[1216px] flex flex-col gap-10"
      >
        <TabsList className="w-full h-[80px] flex items-center justify-between bg-dark-20 text-white active:bg-transparent p-6">
          <TabsTrigger value="news-trends" className="text-lg uppercase">
            Novidades e Tendências
          </TabsTrigger>
          <TabsTrigger value="category" className="text-lg uppercase">
            Categorias
          </TabsTrigger>
          <TabsTrigger value="point-shop" className="text-lg uppercase">
            Loja de Pontos
          </TabsTrigger>
          <TabsTrigger value="news" className="text-lg uppercase">
            Notícias
          </TabsTrigger>
          <TabsTrigger value="laboratory" className="text-lg uppercase">
            Laboratório
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="news-trends"
          className="text-lg uppercase flex flex-col items-start justify-start gap-20"
        >
          <Input
            className="w-full h-[60px] bg-dark-20 border-none text-lg font-medium px-10"
            type="search"
            placeholder="BUSCAR JOGO"
          />
          <section className="w-full flex items-start justify-between">
            <Link
              href={'#'}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/j6YaRVr.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
            <Link
              href={'#'}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/j6YaRVr.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
            <Link
              href={'#'}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/j6YaRVr.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
            <Link
              href={'#'}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/j6YaRVr.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
          </section>
        </TabsContent>
        <TabsContent value="category" className="text-lg uppercase">
          Categorias
        </TabsContent>
        <TabsContent value="point-shop" className="text-lg uppercase">
          Loja de Pontos
        </TabsContent>
        <TabsContent value="news" className="text-lg uppercase">
          Notícias
        </TabsContent>
        <TabsContent value="laboratory" className="text-lg uppercase">
          Laboratório
        </TabsContent>
      </Tabs>
    </section>
  )
}
