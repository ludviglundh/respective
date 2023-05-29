// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ExplicitAny = any

export interface IconConfigProps {
  color?: string
  height?: number
  width?: number
  size?: string
  className?: string
}

export interface IconComponentProps {
  iconName: string
  config?: IconConfigProps
}
