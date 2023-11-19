import { i18n } from '@/config/i18n.config'

export const flag: Record<string, string> = {
  'en-US': '🇺🇸',
  'pt-BR': '🇧🇷',
}

export const locales = i18n.locales.map((code) => {
  const ico = flag[code] || 'Unknown Flag'
  return { code, ico }
})
