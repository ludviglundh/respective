import classNames from 'classnames'
import { ComponentProps, forwardRef, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { Sizes, ThemeBoolean, ThemeColors } from 'theme/types'
import ButtonGroup, { PositionInButtonGroup } from './ButtonGroup'

export interface ButtonTheme {
  base: string
  fullSized: string
  color: ButtonColors
  disabled: string

  inner: {
    base: string
    position: PositionInButtonGroup
    outline: string
  }
  label: string
  outline: ThemeBoolean & {
    color: ButtonOutlineColors
    pill: ThemeBoolean
  }
  pill: ThemeBoolean
  size: ButtonSizes
}

export interface ButtonColors
  extends Pick<
    ThemeColors,
    | 'dark'
    | 'failure'
    | 'gray'
    | 'info'
    | 'light'
    | 'purple'
    | 'success'
    | 'warning'
  > {
  [key: string]: string
}

export interface ButtonOutlineColors extends Pick<ThemeColors, 'gray'> {
  [key: string]: string
}

export interface ButtonSizes extends Pick<Sizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string
}

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  href?: string
  color?: keyof ButtonColors
  label?: ReactNode
  outline?: boolean
  fullSized?: boolean
  pill?: boolean
  positionInGroup?: keyof PositionInButtonGroup
  size?: keyof ButtonSizes
}

const ButtonComponent = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      color = 'info',
      disabled = false,
      href,
      label,
      outline = false,
      pill = false,
      fullSized,
      positionInGroup = 'none',
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const restProps = props as object

    const { buttonGroup: groupTheme, button: theme } = useTheme().theme

    return (
      <Component
        className={classNames(
          disabled && theme.disabled,
          theme.color[color],
          groupTheme.position[positionInGroup],
          outline &&
            (theme.outline.color[color] ?? theme.outline.color.default),
          theme.base,
          theme.pill[pill ? 'on' : 'off'],
          fullSized && theme.fullSized,
          className
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : 'button'}
        ref={ref as never}
        {...restProps}
      >
        <span
          className={classNames(
            theme.inner.base,
            theme.inner.position[positionInGroup],
            theme.outline[outline ? 'on' : 'off'],
            theme.outline.pill[outline && pill ? 'on' : 'off'],
            theme.size[size],
            outline && !theme.outline.color[color] && theme.inner.outline
          )}
        >
          <>
            {typeof children !== 'undefined' && children}
            {typeof label !== 'undefined' && (
              <span className={theme.label} data-testid="theme-button-label">
                {label}
              </span>
            )}
          </>
        </span>
      </Component>
    )
  }
)

ButtonComponent.displayName = 'Button'
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
})
