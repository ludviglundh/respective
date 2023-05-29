import type { GetServerSidePropsContext } from 'next'
import type { ExplicitAny } from '@types'
import type { FC, ReactElement, ReactNode } from 'react'
import type { Contact as PrismaContact, Event, Response } from '@prisma/client'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Button } from 'components/Button'
import { toast } from 'react-hot-toast'
import { ContactsTable } from '../components/ContactsTable'
import { getServerSession } from 'next-auth'
import { AuthOptions } from 'pages/api/auth/[...nextauth]'
import { getSession } from 'next-auth/react'
import { formatResponseLink, refreshData } from 'utils/miscUtils'
import { useRouter } from 'next/router'
import { sendMultipleInvitations } from 'utils/emailUtils'
import { InvitedContactsTable } from '../components/InvitedContactsTable'

import Page from 'components/Page'
import useTranslation from 'hooks/useTranslation'
import AddAttendeesModal from '../components/AddAttendeesModal'
import LayoutWithNavbar from 'layouts/LayoutWithNavbar'
import nextI18nextConfig from '@i18nconfig'
import { EventWithInputsAndOptions } from 'pages/response/components/ResponseForm'

export interface Invited {
  id: string
  eventId: string | null
  name: string
  email: string
}

export interface Contact extends PrismaContact {
  events: Event[]
}
export interface EventsProps {
  event: EventWithInputsAndOptions & {
    name: string
    contacts: Contact[]
    invites: Invited[]
    response: Response[]
  }
  query: {
    email?: string
    name?: string
    eventId: string
  }
}

export interface ContactFormFields {
  name: string
  email: string
}

interface ContactsProps {
  contacts: Contact[]
  onAddAttendeesClick: () => void
  eventId: string
}

const Contacts: FC<ContactsProps> = ({
  onAddAttendeesClick,
  contacts,
  eventId,
}) => {
  const [allChecked, setAllChecked] = useState<boolean>(false)
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([])

  const router = useRouter()

  const handleRowCheckboxClick = (contactId: string) => {
    const contact = contacts.find(
      (contact) => contactId === contact.id
    ) as Contact

    if (selectedContacts.some((contact) => contactId === contact.id)) {
      const prev = [...selectedContacts]
      const next = prev.filter((prev) => prev.id !== contactId)
      return setSelectedContacts(next)
    }

    setSelectedContacts((prev) => [...prev, contact])
  }

  const handleAllCheckboxClick = () => {
    if (allChecked) {
      return setSelectedContacts([])
    }

    setSelectedContacts(contacts.map((contact) => contact))
  }

  const handleSendInvitation = async () => {
    // @ts-ignore
    const { user } = await getSession()

    const params = selectedContacts.map((selectedContact) => ({
      organizer: user.name ?? user.email,
      attendee: selectedContact.name,
      recipient: selectedContact.email,
      url: formatResponseLink(eventId, selectedContact.id),
      from: user.email,
      eventId: eventId,
      contactId: selectedContact.id,
    })) as ExplicitAny

    const statuses = await sendMultipleInvitations(params)
    const results = statuses?.map(({ status }) => status)

    if (results?.some((result) => result !== 200)) {
      toast.error('Alla inbjudningar kunde inte skickas')
    } else if (results?.every((result) => result !== 200)) {
      toast.error('Inga inbjudningar kunde skickas')
    } else {
      toast.success('Inbjudningarna har skickats!')
    }

    refreshData(router)
  }

  useEffect(() => {
    setAllChecked(contacts.length === selectedContacts.length)
  }, [contacts.length, selectedContacts.length])

  return (
    <div>
      <div className="pt-6 pb-2 font-semibold text-lg">
        <span>Lägg till och bjud in kontakter</span>
      </div>
      <div className="flex items-center gap-4 pb-4">
        <Button
          disabled={!selectedContacts.length}
          onClick={handleSendInvitation}
        >
          Skicka inbjudan till alla ikryssade kontakter
        </Button>
        <Button color="light" onClick={onAddAttendeesClick}>
          Lägg till deltagare
        </Button>
      </div>
      <div className="w-full h-full">
        <ContactsTable
          allChecked={allChecked}
          eventId={eventId}
          contacts={contacts}
          selectedContactIds={selectedContacts?.map((contact) => contact.id)}
          onRowCheckboxClick={handleRowCheckboxClick}
          onAllCheckboxClick={handleAllCheckboxClick}
        />
      </div>
    </div>
  )
}

interface InvitedProps {
  invites: Invited[]
  response: Response[]
}
const Invited: FC<InvitedProps> = ({ invites, response }) => {
  return (
    <div>
      <div className="pt-6 pb-2 font-semibold text-lg">
        <span>Hantera inbjuda kontakter</span>
      </div>
      <div className="flex items-center gap-4 pb-4">
        <Button>Skicka påminnelse till alla ikryssade deltagare</Button>
      </div>
      <div className="h-full w-full">
        <InvitedContactsTable invites={invites} response={response} />
      </div>
    </div>
  )
}

const Index: FC<EventsProps> & {
  getLayout?: (page: ReactElement) => ReactNode
} = ({ query, event }) => {
  const { translate } = useTranslation()
  const router = useRouter()
  const methods = useForm<ContactFormFields>({ mode: 'onChange' })
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const addAttendeesClick = () => {
    setModalOpen(true)
  }

  const handleAddAttendees = async ({ name, email }: ContactFormFields) => {
    const { user } = (await getSession()) as ExplicitAny

    const req = await fetch('/api/user/contact/create', {
      method: 'POST',
      body: JSON.stringify({ name, email, userId: user.id }),
    })

    if (req.status === 200) {
      toast.success('Skapade kontakt')
    } else if (req.status === 400) {
      toast.error('Email already exists in a contact')
    } else {
      toast.error('Could not create contact')
    }

    setModalOpen(false)
    return refreshData(router)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    refreshData(router)
  }

  return (
    <FormProvider {...methods}>
      <Page header={translate('pages', 'event.byId', { name: event.name })}>
        <div className="flex flex-col gap-10">
          <Button href={`${event.id}/edit`}>Uppdatera Event</Button>
          <Contacts
            eventId={query?.eventId}
            contacts={event.contacts}
            onAddAttendeesClick={addAttendeesClick}
          />
          <Invited invites={event.invites} response={event.response} />
        </div>
        <AddAttendeesModal
          open={modalOpen}
          onFooterButtonClick={handleAddAttendees}
          onClose={handleCloseModal}
        />
      </Page>
    </FormProvider>
  )
}

export default Index

Index.getLayout = function getLayout(page: ReactElement) {
  return <LayoutWithNavbar>{page}</LayoutWithNavbar>
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, query, locale } = ctx as ExplicitAny
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const res = await fetch(baseUrl + `/api/event/${query.eventId}`)
  const data = await res.json()

  const session = await getServerSession(ctx.req, ctx.res, AuthOptions)
  const contactRes = await fetch(
    // @ts-ignore
    baseUrl + `/api/user/contact/all?userId=${session?.user?.id}`
  )
  const contacts = await contactRes.json()

  const invitesRes = await fetch(
    baseUrl + `/api/event/invites/all?eventId=${query.eventId}`
  )
  const invites = await invitesRes.json()

  return {
    props: {
      query,
      event: { ...data, invites, contacts },
      ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
    },
  }
}
