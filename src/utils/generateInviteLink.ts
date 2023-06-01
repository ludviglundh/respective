import { uuid } from './uuid'

const generateInviteLink = (id = uuid()): string => {
  if (process.env.NODE_ENV !== 'production') {
    return `${window.location.origin}/boards/${id}`
  }

  return `${process.env.NEXT_URL}/boards/${id}`
}

export default generateInviteLink
