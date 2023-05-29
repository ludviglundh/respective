import classNames from 'classnames'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { Sizes, ThemeColors } from 'theme/types'

export interface BadgeTheme {
  root: BadgeRootTheme
  icon: BadgeIconTheme
}

export interface BadgeRootTheme {
  base: string
  color: BadgeColors
  href: string
  size: BadgeSizes
}

export interface BadgeIconTheme {
  off: string
  on: string
  size: BadgeSizes
}

export interface BadgeColors
  extends Pick<
    ThemeColors,
    'failure' | 'gray' | 'indigo' | 'info' | 'pink' | 'purple' | 'success'
  > {
  [key: string]: string
}

export interface BadgeSizes extends Pick<Sizes, 'xs' | 'sm'> {
  [key: string]: string
}

export interface BadgeProps
  extends PropsWithChildren<Omit<ComponentProps<'span'>, 'color'>> {
  color?: keyof BadgeColors
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  size?: keyof BadgeSizes
}

export const Badge: FC<BadgeProps> = ({
  children,
  color = 'info',
  href,
  icon: Icon,
  size = 'xs',
  className,
  ...props
}): JSX.Element => {
  const theme = useTheme().theme.badge

  const Content = (): JSX.Element => (
    <span
      className={classNames(
        theme.root.base,
        theme.root.color[color],
        theme.icon[Icon ? 'on' : 'off'],
        theme.root.size[size],
        className
      )}
      data-testid="theme-badge"
      {...props}
    >
      {Icon && (
        <Icon
          aria-hidden
          className={theme.icon.size[size]}
          data-testid="theme-badge-icon"
        />
      )}
      {children && <span>{children}</span>}
    </span>
  )

  return href ? (
    <a className={theme.root.href} href={href}>
      <Content />
    </a>
  ) : (
    <Content />
  )
}
