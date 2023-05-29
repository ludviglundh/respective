import { FC, useCallback } from 'react'
import type { Response } from '@prisma/client'
import type { Invited } from '../[eventId]'
import { Table, TableProps } from 'components/Table'
import { uuid } from 'utils/uuid'
import { Checkbox } from 'components/Checkbox'
import { Badge } from 'components/Badge'
import { Button } from 'components/Button'
import { useRouter } from 'next/router'

export interface InvitedContactsTableProps extends TableProps {
  invites: Invited[]
  response: Response[]
}

export const InvitedContactsTable: FC<InvitedContactsTableProps> = ({
  invites,
  response,
}) => {
  const router = useRouter()

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
      title: 'Svar',
    },
  ]

  const handleShowResponseClick = useCallback((inviteId: string) => {
    // router.push(`${router.pathname}/event/${}`)
  }, [])

  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell className="!p-4">
          <Checkbox />
        </Table.HeadCell>
        {headers.map((header) => (
          <Table.HeadCell key={header.id}>{header.title}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body className="divide-y">
        {invites.map((invite) => {
          const isAttending = response.some(
            (response) => response.contactId === invite.id
          )

          return (
            <Table.Row key={invite.id}>
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell>{invite.name}</Table.Cell>
              <Table.Cell>{invite.email}</Table.Cell>
              <Table.Cell>
                {isAttending ? (
                  <Badge className="w-fit" color="success">
                    Svarat Ja
                  </Badge>
                ) : (
                  <Badge className="w-fit" color="failure">
                    Svarat Nej
                  </Badge>
                )}
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleShowResponseClick(invite.id)}>
                  Visa
                </Button>
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
