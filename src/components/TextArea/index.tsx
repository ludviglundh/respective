import classNames from 'classnames'
import { HelperText } from 'components/HelperText'
import { ComponentProps, forwardRef, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeBoolean, ThemeColors } from 'theme/types'

export interface TextAreaTheme {
  base: string
  colors: TextAreaColors
  withShadow: ThemeBoolean
}

export interface TextAreaColors
  extends Pick<
    ThemeColors,
    'gray' | 'info' | 'failure' | 'warning' | 'success'
  > {
  [key: string]: string
}

export interface TextAreaProps
  extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  shadow?: boolean
  helperText?: ReactNode
  color?: keyof TextAreaColors
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ shadow, helperText, color = 'gray', className, ...restProps }, ref) => {
    const theme = useTheme().theme.textarea

    return (
      <>
        <textarea
          ref={ref}
          className={classNames(
            theme.base,
            theme.colors[color],
            theme.withShadow[shadow ? 'on' : 'off'],
            className
          )}
          {...restProps}
        />
        <HelperText color={color}>{helperText ?? ''}</HelperText>
      </>
    )
  }
)

TextArea.displayName = 'TextArea'
