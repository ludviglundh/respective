import 'styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ExplicitAny } from '@types'
import { ReactElement, ReactNode } from 'react'
import { appWithTranslation } from 'next-i18next'

import nextI18nextConfig from '../../next-i18next.config'
import { FormProvider, useForm } from 'react-hook-form'

type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode
  }
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ExplicitAny) => page)
  const methods = useForm()

  return (
    <SessionProvider session={session}>
      <FormProvider {...methods}>
        {getLayout(<Component {...pageProps} />)}
      </FormProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig)
