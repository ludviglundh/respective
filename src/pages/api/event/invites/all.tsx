import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const invites = await prisma.contact.findMany({
    where: {
      eventId: req.query.slug as string,
    },
    include: {
      events: false,
      user: false,
    },
  })

  if (invites.length > 0) {
    res.status(200).json(invites)
  } else {
    res.status(404).json([])
  }
}
