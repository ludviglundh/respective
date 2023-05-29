import { createElement, FC } from 'react'
import { ExplicitAny, IconComponentProps, IconConfigProps } from '@types'

export const ArrowUp: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      ></path>
    </svg>
  )
}
export const Mail: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      ></path>
    </svg>
  )
}

export const ArrowLeft: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      ></path>
    </svg>
  )
}
export const VerticalDots: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      ></path>
    </svg>
  )
}

export const HorizontalDots: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      ></path>
    </svg>
  )
}

export const Home: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      ></path>
    </svg>
  )
}

export const PieChart: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      ></path>
    </svg>
  )
}

export const Chart: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      ></path>
    </svg>
  )
}

export const CreditCard: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      ></path>
    </svg>
  )
}

export const CheckMark: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  )
}

export const Users: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  )
}

export const Search: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  )
}

export const Help: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
      ></path>
    </svg>
  )
}

export const Settings: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  )
}

export const LogOut: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      ></path>
    </svg>
  )
}

export const Expand: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill={color}
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.707 17.707 13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z"></path>
    </svg>
  )
}

export const Collapse: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill={color}
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m16.293 17.707 1.414-1.414L13.414 12l4.293-4.293-1.414-1.414L10.586 12zM7 6h2v12H7z"></path>
    </svg>
  )
}

export const Bars: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  )
}

export const Close: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  )
}

export const ChevronDown: FC<IconConfigProps> = ({
  color = '#FFF',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      ></path>
    </svg>
  )
}

export const ChevronUp: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      ></path>
    </svg>
  )
}
export const ChevronRight: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      ></path>
    </svg>
  )
}
export const ChevronLeft: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      ></path>
    </svg>
  )
}
export const Plus: FC<IconConfigProps> = ({
  color = '#505050',
  height = 6,
  width = 6,
  className = '',
}) => {
  return (
    <svg
      className={`w-${width} h-${height} ${className}`}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      ></path>
    </svg>
  )
}

export const Information: FC<IconConfigProps> = ({
  color = '#505050',
  className = '',
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.25 15.5V8.5H10.75V15.5H9.25Z" fill={color} />
      <path
        d="M10 6.875C10.6904 6.875 11.25 6.31536 11.25 5.625C11.25 4.93464 10.6904 4.375 10 4.375C9.30964 4.375 8.75 4.93464 8.75 5.625C8.75 6.31536 9.30964 6.875 10 6.875Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5Z"
        fill={color}
      />
    </svg>
  )
}

export const Clock: FC<IconConfigProps> = ({
  color = '#505050',
  className = '',
}) => {
  console.log('className', className)
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        fill={color}
      ></path>
    </svg>
  )
}

export const SVGComponentsList: Record<ExplicitAny, ExplicitAny> = {
  LogOut,
  Settings,
  Help,
  Search,
  Users,
  CheckMark,
  CreditCard,
  Chart,
  PieChart,
  Home,
  VerticalDots,
  HorizontalDots,
  ArrowUp,
  ArrowLeft,
  Mail,
}

export const CreateIcon = (iconName: string, props: IconConfigProps = {}) => {
  return createElement(SVGComponentsList[iconName], props)
}

export const IconComponent: FC<IconComponentProps> = ({ iconName, config }) => {
  return <>{CreateIcon(iconName, config)}</>
}
