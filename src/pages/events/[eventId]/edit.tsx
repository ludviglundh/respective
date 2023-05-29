import { Event, Input } from '@prisma/client'
import Page from 'components/Page'
import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import { NextApiRequest } from 'next'
import { useRouter } from 'next/router'
import { FC, ReactElement, ReactNode, useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CreateEventRequestData, EventFormFields } from '../create'
import Form from '../components/Form'
import { toast } from 'react-hot-toast'
import { ExplicitAny } from '@types'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@i18nconfig'
import useTranslation from 'hooks/useTranslation'
import { PAGE_NAMES } from 'utils/constants'

interface EventIdProps {
  data: Event & { inputs: Input[] }
}

const Index: FC<EventIdProps> & {
  getLayout?: (page: ReactElement) => ReactNode
} = ({ data }) => {
  const { translate } = useTranslation()

  const methods = useForm<EventFormFields>({
    mode: 'all',
    defaultValues: { ...data },
  })

  const { trigger } = methods

  const router = useRouter()

  const handleSubmitForm = useCallback(
    async (data: CreateEventRequestData) => {
      const req = await fetch('/api/event/update', {
        method: 'POSt',
        body: JSON.stringify({
          ...data,
        }),
      })

      if (req.status !== 201) {
        return toast.error(translate('toast', 'updateEvent.failure'))
      }

      toast.success(translate('toast', 'updateEvent.success'))

      setTimeout(() => {
        router.push(PAGE_NAMES.events)
      }, 1000)
    },
    [router, translate]
  )

  useEffect(() => {
    // trigger the validation on defaultValues
    trigger()
  }, [trigger])

  return (
    <FormProvider {...methods}>
      <Page header={translate('pages', 'event.update')}>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Form onSubmit={handleSubmitForm} data={data} />
          </div>
        </div>
      </Page>
    </FormProvider>
  )
}

export default Index

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}

export async function getServerSideProps({
  req,
  params,
  locale,
}: {
  req: NextApiRequest
  params: { eventId: number }
  locale: ExplicitAny
}) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const res = await fetch(baseUrl + `/api/event/${params.eventId}`)
  const data = await res.json()

  return {
    props: {
      ...params,
      data,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}
