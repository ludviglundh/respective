'use client'

import { FC } from 'react'
import Form, { FormFields } from './Form'
import { toast } from 'react-hot-toast'
import generateInviteLink from 'utils/generateInviteLink'
import { uuid } from 'utils/uuid'

const CreateBoard: FC = () => {
  const createBoard = async (data: FormFields) => {
    const id = uuid()
    const inviteLink = generateInviteLink(id)

    const req = await fetch('/api/boards/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        id,
        inviteLink,
      }),
    })

    if (req.status !== 200) {
      return toast.error('Could not create board')
    }

    return toast.success('Board created!')
  }

  return (
    <div className="w-9/12 flex items-center justify-center">
      <Form onSubmit={createBoard} />
    </div>
  )
}

export default CreateBoard
