import classNames from 'classnames'
import { FC } from 'react'

export interface IconConfigProps {
  className?: string
}

export interface IconComponentProps {
  iconName: string
  config?: IconConfigProps
}

export const ThumbUp: FC<IconConfigProps> = ({ className = '' }) => {
  return (
    <svg
      className={classNames('h-5 w-5 stroke-zinc-300', className)}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      />
    </svg>
  )
}

export const Trash: FC<IconConfigProps> = ({ className = '' }) => {
  return (
    <svg
      className={classNames('h-5 w-5 stroke-zinc-300', className)}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  )
}
