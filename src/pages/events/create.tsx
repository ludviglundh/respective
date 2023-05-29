import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import { ReactElement, useCallback } from 'react'
import Page from 'components/Page'
import { FormProvider, useForm } from 'react-hook-form'
import Form, { InputWithOptions } from './components/Form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18nextConfig from '@i18nconfig'
import { GetServerSidePropsContext } from 'next'
import { ExplicitAny } from '@types'
import { PAGE_NAMES } from 'utils/constants'
import useTranslation from 'hooks/useTranslation'
import { Dayjs } from 'dayjs'

export interface EventFormFields {
  name: string
  description: string
  inputs: InputWithOptions[]
  date: {
    start: Date
    end: Date
  }
  time: {
    start: string
    end: string
  }
}

export interface CreateEventRequestData extends Event {
  inputs: InputWithOptions[]
  date: {
    start: Dayjs
    end: Dayjs
  }
}

export default function Index() {
  const methods = useForm<EventFormFields>({ mode: 'onChange' })
  const router = useRouter()
  const { translate } = useTranslation()

  const handleCreateEvent = useCallback(
    async (data: CreateEventRequestData) => {
      const req = await fetch('/api/event/create', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
        }),
      })
      if (req.status !== 200) {
        return toast.error(translate('toast', 'createEvent.failure'))
      }

      toast.success(translate('toast', 'createEvent.success'))
      setTimeout(() => {
        router.push(PAGE_NAMES.events)
      }, 1000)
    },
    [router, translate]
  )

  return (
    <FormProvider {...methods}>
      <Page header={translate('pages', 'event.create')}>
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <Form onSubmit={handleCreateEvent} />
          </div>
        </div>
      </Page>
    </FormProvider>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { locale } = ctx as ExplicitAny

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}
