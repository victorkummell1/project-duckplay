import { Locale } from "@/config/i18n.config";
import { enUS } from "./default-language-collections/default-en-US";
import { esES } from "./default-language-collections/default-es-ES";
import { ptBR } from "./default-language-collections/default-pt-BR";

export const defaultDictionary = {
  'en-US': enUS,
  'pt-BR': ptBR,
  'es-ES': esES,
}

export type Dictionary = typeof enUS;

export const getDictionary = (locale: Locale): Dictionary => {
  const dictionary = defaultDictionary[locale || 'en-US'];
  return dictionary;
};
