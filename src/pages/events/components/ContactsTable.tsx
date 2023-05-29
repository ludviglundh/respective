import { Contact, Event } from '@prisma/client'
import { Badge } from 'components/Badge'
import { Checkbox } from 'components/Checkbox'
import { Table, TableProps } from 'components/Table'
import { FC } from 'react'
import { uuid } from 'utils/uuid'

type ContactWithEvents = Contact & { events: Event[] }

export interface ContactsTableProps extends TableProps {
  contacts: ContactWithEvents[]
  eventId: string
  selectedContactIds: Contact['id'][]
  onRowCheckboxClick: (contactId: string) => void
  onAllCheckboxClick: () => void
  allChecked: boolean
}

export const ContactsTable: FC<ContactsTableProps> = ({
  contacts,
  eventId,
  selectedContactIds,
  onRowCheckboxClick,
  onAllCheckboxClick,
}) => {
  const headers = [
    {
      id: uuid(),
      title: 'Namn',
    },
    {
      id: uuid(),
      title: 'Email',
    },
    {
      id: uuid(),
      title: 'Inbjuden',
    },
  ]

  const allChecked = selectedContactIds.length === contacts.length

  return (
    <Table striped hoverable className="">
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox checked={allChecked} onChange={onAllCheckboxClick} />
        </Table.HeadCell>
        {headers.map((header) => (
          <Table.HeadCell key={header.id}>{header.title}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {contacts.map((contact) => {
          const isInvitedToCurrentEvent = contact.events.some(
            (event) => event.id === eventId
          )

          const checked = selectedContactIds.some((id) => contact.id === id)
          return (
            <Table.Row key={contact.id}>
              <Table.Cell className="!p-4">
                <Checkbox
                  checked={checked}
                  onChange={() => onRowCheckboxClick(contact.id)}
                />
              </Table.Cell>
              <Table.Cell>{contact.name}</Table.Cell>
              <Table.Cell>{contact.email}</Table.Cell>
              <Table.Cell>
                {isInvitedToCurrentEvent ? (
                  <Badge className="w-fit" color="success">
                    Inbjuden
                  </Badge>
                ) : (
                  <Badge className="w-fit" color="warning">
                    Ej inbjuden
                  </Badge>
                )}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
