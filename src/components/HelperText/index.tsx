import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeColors } from 'theme/types'

export interface HelperColors
  extends Pick<
    ThemeColors,
    'gray' | 'info' | 'failure' | 'warning' | 'success'
  > {
  [key: string]: string
}

export interface HelperTextTheme {
  base: string
  colors: HelperColors
}

export interface HelperTextProps
  extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color'>> {
  color?: keyof HelperColors
  value?: string
}

export const HelperText: FC<HelperTextProps> = ({
  value,
  children,
  color = 'default',
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.helperText

  return (
    <p
      className={classNames(theme.base, theme.colors[color], className)}
      {...restProps}
    >
      {value ?? children ?? ''}
    </p>
  )
}
