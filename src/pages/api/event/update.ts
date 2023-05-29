import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'utils/uuid'
import { InputWithOptions } from 'pages/events/components/Form'
import { Option } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name, description, inputs } = JSON.parse(req.body)

  const event = await prisma?.event.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      inputs: {
        deleteMany: {
          id: {
            in: inputs.map((input: InputWithOptions) => {
              if (!input?.id) return uuid()
              return input.id
            }),
          },
        },
        create: inputs.map((input: InputWithOptions) => {
          // @ts-ignore
          delete input.eventId
          // @ts-ignore
          delete input.id

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
    },
  })

  res.status(201).json(event)
}
