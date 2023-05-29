// import type { NextApiRequest, NextApiResponse } from 'next'
import emaijs from 'emailjs'

export default async function handler() {
  const params = {
    organizer: 'OrganizerTemplate',
    attendee: 'AttendeeTemplate',
    url: 'URLTEMPLATE',
    recipient: 'l.lundh@hotmail.com',
  }

  const email = emaijs
    .send(
      process.env.NEXT_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_EMAILJS_TEMPLATE_ID as string,
      params,
      process.env.NEXT_EMAILJS_PUBLIC_KEY
    )
    .then((res) => res)

  return email
}
