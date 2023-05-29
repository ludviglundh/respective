import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name, userId } = JSON.parse(req.body)
  const exists = await prisma.contact.findUnique({
    where: {
      email,
    },
  })
  if (exists) {
    res.status(400).send('Contact already exists')
  } else {
    const contact = await prisma.contact.create({
      data: {
        email,
        name,
        userId,
      },
    })
    res.status(200).json(contact)
  }
}
