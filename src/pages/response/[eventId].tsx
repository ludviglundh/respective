import RootLayout from 'layouts/RootLayout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FC, ReactElement, ReactNode } from 'react'
import { GetServerSidePropsContext } from 'next'
import nextI18nextConfig from '@i18nconfig'
import useTranslation from 'hooks/useTranslation'
import { ExplicitAny } from '@types'
import { FormProvider, useForm } from 'react-hook-form'
import ResponseForm, {
  EventWithInputsAndOptions,
} from './components/ResponseForm'
import { toast } from 'react-hot-toast'
import { formatDate } from 'utils/dateUtils'

export interface InputResponse {
  [id: string]: string
}

export interface ResponseFormFields {
  attending: string
  name: string
  email: string
  inputs: InputResponse[]
}

export interface EventsProps {
  data: EventWithInputsAndOptions
  query: {
    email?: string
    name?: string
    eventId?: string
    contactId: string
  }
}

export interface ResponseFormData {
  attending: boolean
  inputs: InputResponse[]
  email: string
  name: string
}

export interface PrismaResponseData {
  name: string
  email: string
  attending: boolean
  contactId: string
  inputs: {
    id: string
    value: string
  }[]
  eventId: string
}

const Index: FC<EventsProps> & {
  getLayout?: (page: ReactElement) => ReactNode
} = ({ data, query }) => {
  const { translate } = useTranslation()
  const { eventId, name, email, contactId } = query
  const methods = useForm<ResponseFormFields>({
    mode: 'onChange',
    defaultValues: { name, email },
  })

  const formatBoolToString = (value: boolean): string => {
    if (typeof value === 'boolean') {
      if (value === true) return 'true'
      else return 'false'
    }

    return value
  }

  const formatStringToBool = (value: boolean): boolean => {
    if (typeof value === 'boolean') return value
    return value === 'true'
  }

  const onSubmitResponse = async (data: ResponseFormData) => {
    const { attending } = data
    const inputs = data.inputs.map((input) => {
      const id = Object.keys(input)[0]
      const inputValue = Object.values(input)[0]

      const value =
        typeof inputValue === 'boolean'
          ? formatBoolToString(inputValue)
          : inputValue

      return { id, value }
    })

    const req = await fetch('/api/response/create', {
      method: 'POST',
      body: JSON.stringify({
        contactId,
        attending: formatStringToBool(attending),
        inputs,
        eventId,
        name: data.name,
        email: data.email,
      }),
    })

    if (req.status !== 200) {
      return toast.error(translate('toast', 'failure'))
    }

    toast.success(translate('toast', 'success'))
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-1 relative h-full">
        <div className="flex flex-1 flex-col gap-6 items-center h-full pt-20 pb-4 max-md:py-0 max-md:pt-4">
          <div
            id="inner"
            className="container flex items-center flex-col h-full w-9/12 max-md:w-full"
          >
            <div
              id="header-wrapper"
              className="flex flex-col gap-6 items-center text-center w-full px-8 max-md:px-2 py-6"
            >
              <span className="font-bold text-5xl max-md:text-3xl">
                {data.name}
              </span>
              <span className="text-md w-9/12">{data.description}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg flex flex-1">Startar</span>
                  <span className="font-semibold text-lg">
                    {formatDate(data.date.start, true)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg flex flex-1">Slutar</span>
                  <span className="font-semibold text-lg">
                    {formatDate(data.date.end, true)}
                  </span>
                </div>
              </div>
            </div>
            <ResponseForm onSubmit={onSubmitResponse} data={data} />
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default Index

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { locale, query }: ExplicitAny = ctx

  const protocol = ctx.req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = ctx.req ? `${protocol}://${ctx.req.headers.host}` : ''

  const res = await fetch(baseUrl + `/api/response/event/${query.eventId}`)
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
  return <RootLayout>{page}</RootLayout>
}
