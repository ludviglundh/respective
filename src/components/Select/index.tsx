import classNames from 'classnames'
import { HelperText } from 'components/HelperText'
import { ComponentProps, FC, forwardRef, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { Sizes, ThemeBoolean, ThemeColors } from 'theme/types'

export interface SelectTheme {
  base: string
  addon: string
  field: {
    base: string
    icon: {
      base: string
      svg: string
    }
    select: {
      base: string
      withIcon: ThemeBoolean
      withAddon: ThemeBoolean
      withShadow: ThemeBoolean
      sizes: SelectSizes
      colors: SelectColors
    }
  }
}

export interface SelectColors
  extends Pick<
    ThemeColors,
    'gray' | 'info' | 'failure' | 'warning' | 'success'
  > {
  [key: string]: string
}

export interface SelectSizes extends Pick<Sizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface SelectProps
  extends Omit<ComponentProps<'select'>, 'color' | 'ref'> {
  sizing?: keyof SelectSizes
  shadow?: boolean
  helperText?: ReactNode
  addon?: ReactNode
  icon?: FC<ComponentProps<'svg'>>
  color?: keyof SelectColors
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      sizing = 'md',
      shadow,
      helperText,
      addon,
      icon: Icon,
      color = 'gray',
      className,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme().theme.select

    return (
      <div className={classNames(theme.base, className)}>
        {addon && <span className={theme.addon}>{addon}</span>}
        <div className={theme.field.base}>
          {Icon && (
            <div className={theme.field.icon.base}>
              <Icon className={theme.field.icon.svg} />
            </div>
          )}
          <select
            ref={ref}
            className={classNames(
              theme.field.select.base,
              theme.field.select.colors[color],
              theme.field.select.withIcon[Icon ? 'on' : 'off'],
              theme.field.select.withAddon[addon ? 'on' : 'off'],
              theme.field.select.withShadow[shadow ? 'on' : 'off'],
              theme.field.select.sizes[sizing]
            )}
            {...restProps}
          >
            {children}
          </select>
          {helperText && <HelperText color={color}>{helperText}</HelperText>}
        </div>
      </div>
    )
  }
)

Select.displayName = 'Select'
