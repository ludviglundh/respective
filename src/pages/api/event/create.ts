import { Option } from '@prisma/client'
import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { InputWithOptions } from 'pages/events/components/Form'
import { EventWithInputsAndOptions } from 'pages/response/components/ResponseForm'

import { AuthOptions, ExtendedSession } from '../auth/[...nextauth]'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session: ExtendedSession | null = await getServerSession(
    req,
    res,
    AuthOptions
  )

  const { name, description, inputs, date } = JSON.parse(
    req.body
  ) as EventWithInputsAndOptions

  const event = await prisma?.event.create({
    data: {
      name,
      description,
      date: {
        create: {
          start: new Date(date.start).toISOString(),
          end: new Date(date.end).toISOString(),
        },
      },
      inputs: {
        create: inputs.map((input: InputWithOptions) => {
          return {
            ...input,
            options: {
              create: input.options?.map((option: Option) => {
                return { ...option, label: option.value }
              }),
            },
          }
        }),
      },
      user: {
        connect: {
          id: session?.user?.id as string,
        },
      },
    },
  })

  res.status(200).json(event)
}
