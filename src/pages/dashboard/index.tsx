import type { ReactElement } from 'react'
import type { ExplicitAny } from '@types'
import type { GetServerSidePropsContext } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import Page from 'components/Page'
import nextI18nextConfig from '@i18nconfig'
import useTranslation from 'hooks/useTranslation'

export default function Index() {
  const { translate } = useTranslation()

  return (
    <Page
      header={translate('pages', 'dashboard')}
      head={translate('pages', 'dashboard')}
    >
      <div />
    </Page>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { locale }: ExplicitAny = ctx

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}
