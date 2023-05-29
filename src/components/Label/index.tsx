import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { Sizes, StateColors } from 'theme/types'

export interface LabelColors extends StateColors {
  [key: string]: string
  default: string
}

export interface LabelSizes extends Pick<Sizes, 'sm' | 'md' | 'lg' | 'xl'> {
  [key: string]: string
}

export interface LabelTheme {
  base: string
  colors: LabelColors
  disabled: string
  sizes: LabelSizes
}

export interface LabelProps
  extends PropsWithChildren<Omit<ComponentProps<'label'>, 'color'>> {
  color?: keyof LabelColors
  sizing?: keyof LabelSizes
  value?: string
  disabled?: boolean
}

export const Label: FC<LabelProps> = ({
  children,
  color = 'default',
  disabled = false,
  sizing = 'md',
  value,
  className,
  ...restProps
}): JSX.Element => {
  const theme = useTheme().theme.label

  return (
    <label
      className={classNames(
        theme.base,
        theme.sizes[sizing],
        theme.colors[color],
        disabled ?? theme.disabled,
        className
      )}
      {...restProps}
    >
      {value ?? children ?? ''}
    </label>
  )
}
