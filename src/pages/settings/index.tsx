import type { ReactElement } from 'react'
import type { GetServerSidePropsContext } from 'next'
import type { ExplicitAny } from '@types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutWithNavbar from '../../layouts/LayoutWithNavbar'
import Page from 'components/Page'
import nextI18nextConfig from '../../../next-i18next.config'
import useTranslation from 'hooks/useTranslation'

export default function Index() {
  const { translate } = useTranslation()

  return (
    <Page
      header={translate('pages', 'settings')}
      head={translate('pages', 'settings')}
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
