import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const exists = await prisma.event.findUnique({
    where: {
      id: req.query.slug as string,
    },
    include: {
      response: {
        include: {
          inputs: true,
        },
      },
      inputs: {
        include: {
          options: true,
        },
      },
      invites: {
        where: {
          eventId: req.query.slug as string,
        },
      },
    },
  })

  if (!exists) {
    res.status(404).json({ error: 'No event found' })
  } else {
    res.status(200).json(exists)
  }
}
