import { NextRouter } from 'next/router'

export const refreshData = (router: NextRouter) => {
  if (!router) return
  router.replace(router.asPath)
}

export const formatResponseLink = (
  eventId: string | undefined,
  contactId: string
): string => {
  if (!eventId) return ''
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3000/response/${eventId}?contactId=${contactId}`
  }

  return `${process.env.NEXT_PUBLIC_URL}/response/${eventId}?contactId=${contactId}`
}
