import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Locale } from '@/config/i18n.config'
import { getDicionaryServerOnly } from '@/dictionaries/default-dictionary-server-only'

interface HomeSearchProps {
  lang: Locale
}

export function HomeSearch({ lang }: HomeSearchProps) {
  const dict = getDicionaryServerOnly(lang)

  return (
    <section className="w-[1216px] max-w-[1216px] flex items-center justify-center">
      <Tabs
        defaultValue="news-trends"
        className="w-[1216px] flex flex-col gap-10"
      >
        <TabsList className="w-full h-[80px] flex items-center justify-between bg-dark-20 text-white active:bg-transparent p-6">
          <TabsTrigger value="news-trends" className="text-lg uppercase">
            {dict.store.searchTab.newsTrends}
          </TabsTrigger>
          <TabsTrigger value="category" className="text-lg uppercase">
            {dict.store.searchTab.category}
          </TabsTrigger>
          <TabsTrigger value="point-shop" className="text-lg uppercase">
            {dict.store.searchTab.pointShop}
          </TabsTrigger>
          <TabsTrigger value="news" className="text-lg uppercase">
            {dict.store.searchTab.news}
          </TabsTrigger>
          <TabsTrigger value="laboratory" className="text-lg uppercase">
            {dict.store.searchTab.laboratory}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="news-trends"
          className="text-lg uppercase flex flex-col items-start justify-start gap-20"
        >
          <Input
            className="w-full h-[60px] bg-dark-20 border-none text-lg font-medium px-10 uppercase"
            type="search"
            placeholder={dict.store.search}
          />
          <section className="w-full flex items-start justify-between">
            <Link
              href={`/store/app/marqueige/`}
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
              href={`/store/app/assassins-creed-mirage/`}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/ps55yRM.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
            <Link
              href={`/store/app/stray/`}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/aVfVMUg.png'}
                width={280}
                height={450}
                alt="a"
              />
            </Link>
            <Link
              href={`/store/app/satisfactory/`}
              className="w-[280px] max-[280px] h-[450px] max-h-[450px]"
            >
              <Image
                src={'https://i.imgur.com/8iZQd2B.png'}
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
