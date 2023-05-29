import classNames from 'classnames'
import { HelperText } from 'components/HelperText'
import { ComponentProps, FC, forwardRef, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { Sizes, ThemeBoolean, ThemeColors } from 'theme/types'

export interface TextInputColors
  extends Pick<
    ThemeColors,
    'gray' | 'info' | 'failure' | 'warning' | 'success'
  > {
  [key: string]: string
}

export interface TextInputSizes extends Pick<Sizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface TextInputProps
  extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  sizing?: keyof TextInputSizes
  shadow?: boolean
  helperText?: ReactNode
  addon?: ReactNode
  icon?: FC<ComponentProps<'svg'>>
  rightIcon?: FC<ComponentProps<'svg'>>
  color?: keyof TextInputColors
}

export interface TextInputTheme {
  base: string
  addon: string
  field: {
    base: string
    icon: {
      base: string
      svg: string
    }
    rightIcon: {
      base: string
      svg: string
    }
    input: {
      base: string
      sizes: TextInputSizes
      colors: TextInputColors
      withIcon: ThemeBoolean
      withRightIcon: ThemeBoolean
      withAddon: ThemeBoolean
      withShadow: ThemeBoolean
    }
  }
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sizing = 'md',
      shadow,
      helperText,
      addon,
      icon: Icon,
      rightIcon: RightIcon,
      color = 'gray',
      className,
      ...restProps
    },
    ref
  ) => {
    const theme = useTheme().theme.textInput

    return (
      <>
        <div className={classNames(theme.base, className)}>
          {addon && <span className={theme.addon}>{addon}</span>}
          <div className={theme.field.base}>
            {Icon && (
              <div className={theme.field.icon.base}>
                <Icon className={theme.field.icon.svg} />
              </div>
            )}
            {RightIcon && (
              <div className={theme.field.rightIcon.base}>
                <RightIcon className={theme.field.rightIcon.svg} />
              </div>
            )}
            <input
              ref={ref}
              className={classNames(
                theme.field.input.base,
                theme.field.input.colors[color],
                theme.field.input.withIcon[Icon ? 'on' : 'off'],
                theme.field.input.withAddon[addon ? 'on' : 'off'],
                theme.field.input.withShadow[shadow ? 'on' : 'off'],
                theme.field.input.sizes[sizing]
              )}
              {...restProps}
            />
          </div>
        </div>
        {helperText && (
          <HelperText color={color}>{helperText ?? ''}</HelperText>
        )}
      </>
    )
  }
)

TextInput.displayName = 'TextInput'
