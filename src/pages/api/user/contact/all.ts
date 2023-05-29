import prisma from 'lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contacts = await prisma.contact.findMany({
    where: {
      userId: {
        equals: req.query.userId as string,
      },
    },
    include: {
      events: true,
    },
  })

  if (contacts.length > 0) {
    res.status(200).json(contacts)
  } else {
    res.status(404).json([])
  }
}
