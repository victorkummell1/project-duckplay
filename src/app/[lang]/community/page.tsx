import { Locale } from "@/config/i18n.config";
import { getDicionaryServerOnly } from "@/dictionaries/default-dictionary-server-only";

export default function Community({ params }: { params: { lang: Locale } }) {
  const dict = getDicionaryServerOnly(params.lang);

  return (
    <main className="bg-dark-10 flex h-[1000px] flex-col items-center justify-between text-white">
      {dict.hello.community}
    </main>
  );
}
