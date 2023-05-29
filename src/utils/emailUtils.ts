import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

export const sendEmail = (
  params: Record<string, Param>
): Promise<EmailJSResponseStatus> => {
  return emailjs.send(
    process.env.NEXT_EMAILJS_SERVICE_ID as string,
    process.env.NEXT_EMAILJS_TEMPLATE_ID as string,
    params,
    process.env.NEXT_EMAILJS_PUBLIC_KEY
  )
}

interface Param {
  recipient: string
  organizer: string
  attendee: string
  url: string
  from: string
  eventId: string
  contactId: string
}

export const sendMultipleInvitations = async (
  params: Record<string, Param>[]
): Promise<EmailJSResponseStatus[] | void> => {
  if (!params) return

  const requests = params.map(async (param) => {
    return await emailjs
      .send(
        process.env.NEXT_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_EMAILJS_TEMPLATE_ID as string,
        param,
        process.env.NEXT_EMAILJS_PUBLIC_KEY
      )
      .then(async (res) => {
        if (res.status === 200) {
          await fetch('/api/user/contact/assignEvent', {
            method: 'post',
            body: JSON.stringify({
              eventId: param.eventId,
              contactId: param.contactId,
            }),
          })
        }

        return res
      })
  })

  return Promise.all(requests)
}
