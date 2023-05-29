import prisma from 'lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { slug },
  } = req

  const exists = await prisma.response.findUnique({
    where: {
      id: slug?.toString(),
    },
  })

  // const exists = await prisma.event.findUnique({
  //   where: {
  //     id: slug?.toString(),
  //   },
  //   include: {
  //     date: true,
  //     inputs: {
  //       include: {
  //         options: true,
  //       },
  //     },
  //   },
  // })

  if (!exists) {
    res.status(404).json({ error: 'No Todo found' })
  } else {
    res.status(200).json(exists)
  }
}
