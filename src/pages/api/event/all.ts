import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const events = await prisma.event.findMany({
    where: {
      userId: {
        equals: req.query.userId as string,
      },
    },
    include: {
      date: true,
      _count: {
        select: {
          response: true,
        },
      },
    },
  })

  if (events.length > 0) {
    res.status(200).json(events)
  } else {
    res.status(404).json([])
  }
}
