import classNames from 'classnames'
import {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react'
import { Sizes, ThemeColors } from 'theme/types'

export interface ButtonSizes extends Pick<Sizes, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string
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

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  href?: string
  color?: keyof ButtonColors
  label?: ReactNode
  fullSized?: boolean
  pill?: boolean
  size?: keyof ButtonSizes
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      size = 'md',
      color = 'info',
      disabled = false,
      href,
      label,
      className,
      ...restProps
    },
    ref
  ) => {
    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'

    return (
      <Component
        disabled={disabled}
        href={href}
        type={isLink ? undefined : 'button'}
        className={classNames()}
        ref={ref as never}
        {...restProps}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

// const Button: FC<ButtonProps> = ({}) => {}
