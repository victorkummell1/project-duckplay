import { Locale } from "@/config/i18n.config";
import Navbar from "../sub-components/Navbar";

type Props = { lang: Locale };

export default function Header({ lang }: Props) {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-10/80 flex max-h-20 items-center justify-center p-8">
        <Navbar lang={lang} />
      </header>
    </>
  );
}
