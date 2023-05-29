import { useTranslation as useTranslationNext } from 'next-i18next'

export type TranslationType =
  | 'common'
  | 'pages'
  | 'navbar'
  | 'toast'
  | 'event'
  | 'table'
  | 'validation'
  | 'inputFields'
  | 'response'

export type Translate = (
  translationType: TranslationType,
  translationKey: string,
  translationConfig?: Record<string, string | number>
) => string

const useTranslation = () => {
  const { t, i18n } = useTranslationNext()

  const translate: Translate = (
    translationType: TranslationType,
    translationKey: string,
    translationConfig?: Record<string, string | number>
  ): string => {
    if (
      i18n?.exists?.(`${translationType}.${translationKey}`, translationConfig)
    ) {
      // @ts-ignore
      return i18n.t(`${translationType}.${translationKey}`, translationConfig)
    }

    return t(translationKey)
  }

  const getCurrentLocale = () => {
    return i18n.resolvedLanguage
  }

  return { translate, getCurrentLocale }
}

export default useTranslation
