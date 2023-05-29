import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeBoolean } from 'theme/types'
import { useNavbarContext } from './NavbarContext'

export interface NavbarCollapseTheme {
  base: string
  list: string
  hidden: ThemeBoolean
}

export const NavbarCollapse: FC<PropsWithChildren<ComponentProps<'div'>>> = ({
  className,
  children,
  ...restProps
}): JSX.Element => {
  const { open } = useNavbarContext()
  const theme = useTheme().theme.navbar.collapse

  return (
    <div
      className={classNames(
        theme.base,
        theme.hidden[!open ? 'on' : 'off'],
        className
      )}
      data-testid="theme-navbar-collapse"
      {...restProps}
    >
      <ul className={theme.list}>{children}</ul>
    </div>
  )
}
