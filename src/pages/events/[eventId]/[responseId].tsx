import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import { GetServerSidePropsContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ReactElement } from 'react'
import nextI18nextConfig from '../../../../next-i18next.config'
import { ExplicitAny } from '../../../../types'

const Index = () => {
  return <div>eventId/responseId</div>
}

export default Index

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { locale, query }: ExplicitAny = ctx

  const protocol = ctx.req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = ctx.req ? `${protocol}://${ctx.req.headers.host}` : ''

  const res = await fetch(baseUrl + `/api/response/${query.responseId}`)
  const data = await res.json()

  return {
    props: {
      data,
      query,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}
