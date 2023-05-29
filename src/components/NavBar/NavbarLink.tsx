import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeBoolean } from 'theme/types'

export interface NavbarLinkTheme {
  base: string
  item: {
    base: string
    active: {
      on: string
      off: string
    }
  }
  disabled: ThemeBoolean
}

export interface NavbarLinkProps extends PropsWithChildren<LinkProps> {
  className?: string
  disabled?: boolean
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  href,
  disabled,
  children,
  className,
  ...restProps
}): JSX.Element => {
  const theme = useTheme().theme.navbar.link
  const pathname = usePathname()
  const active = pathname === href

  return (
    <li
      className={classNames(
        theme.item.base,
        theme.item.active[active ? 'on' : 'off']
      )}
    >
      <Link
        href={href}
        className={classNames(
          theme.base,
          theme.disabled[disabled ? 'on' : 'off'],
          className
        )}
        {...restProps}
      >
        {children}
      </Link>
    </li>
  )
}
