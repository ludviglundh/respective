import type { FC, ReactElement, ReactNode } from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Event } from '@prisma/client'
import type { ExplicitAny } from '@types'
import { getServerSession } from 'next-auth'
import { AuthOptions } from 'pages/api/auth/[...nextauth]'
import { Table } from 'components/Table'
import { Checkbox } from 'components/Checkbox'
import { uuid } from 'utils/uuid'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'
import { PAGE_NAMES } from 'utils/constants'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import Page from 'components/Page'
import nextI18nextConfig from '@i18nconfig'
import useTranslation from 'hooks/useTranslation'
import { formatDateRange } from 'utils/dateUtils'
import { Dayjs } from 'dayjs'

type EventWithResponseCount = Event & {
  _count: { response: number }
  date: { start: Dayjs; end: Dayjs }
}

type EventsProps = {
  events: EventWithResponseCount[]
}

const NoData = () => {
  const { translate } = useTranslation()
  return (
    <Page head={translate('pages', 'event.all.header')}>
      <div className="flex flex-1 flex-col gap-6 items-center justify-center h-full">
        <span className="font-semibold text-3xl max-md:text-lg text-center">
          {translate('pages', 'event.all.empty')}
        </span>
        <Button size="xl" href={PAGE_NAMES.createEvent}>
          {translate('pages', 'event.create')}
        </Button>
      </div>
    </Page>
  )
}

const Index: FC<EventsProps> & {
  getLayout?: (page: ReactElement) => ReactNode
} = ({ events = [] }) => {
  const { translate } = useTranslation()
  const router = useRouter()

  const headers = [
    {
      id: uuid(),
      title: translate('table', 'event.headers.name'),
    },
    {
      id: uuid(),
      title: translate('table', 'event.headers.description'),
    },
    {
      id: uuid(),
      title: translate('table', 'event.headers.date'),
    },
    {
      id: uuid(),
      title: 'Antar svar',
    },
  ]

  const handleCheckboxClick = (eventId: Event['id']) => {
    console.log('data', eventId)
  }

  const handleEditClick = (eventId: Event['id']) => {
    router.push(`${router.pathname}/${eventId}`)
  }

  if (!events.length) return <NoData />

  return (
    <Page
      header={translate('pages', 'event.all.header')}
      head={translate('pages', 'event.all.header')}
    >
      <div className="flex flex-col gap-8">
        <Table striped hoverable>
          <Table.Head>
            <Table.HeadCell className="!p-4">
              <Checkbox />
            </Table.HeadCell>
            {headers.map((header) => (
              <Table.HeadCell
                className="max-md:whitespace-wrap"
                key={header.id}
              >
                {header.title}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className="divide-y">
            {events.map((event: EventWithResponseCount) => {
              return (
                <Table.Row
                  key={event.id}
                  checkbox
                  onCheckboxClick={() => handleCheckboxClick(event.id)}
                >
                  <Table.Cell key={event.id} className="max-md:whitespace-wrap">
                    {event.name}
                  </Table.Cell>
                  <Table.Cell>{event.description}</Table.Cell>
                  <Table.Cell>
                    {formatDateRange(event.date.start, event.date.end)}
                  </Table.Cell>
                  <Table.Cell>{event._count.response}</Table.Cell>
                  <Table.Cell className="flex items-center justify-end">
                    <Button size="xs" onClick={() => handleEditClick(event.id)}>
                      {translate('common', 'show')}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </div>
    </Page>
  )
}

export default Index

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}

export async function getServerSideProps({
  req,
  res,
  locale,
}: {
  req: NextApiRequest
  res: NextApiResponse
  locale?: ExplicitAny
}) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const session = await getServerSession(req, res, AuthOptions)

  const response = await fetch(
    // @ts-ignore
    `${baseUrl}/api/event/all?userId=${session?.user?.id}`
  )

  const events = await response.json()

  return {
    props: {
      events,
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}
