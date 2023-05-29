import classNames from 'classnames'
import { Bars } from 'components/Icon'
import { ComponentProps, FC } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { useNavbarContext } from './NavbarContext'

export interface NavbarToggleProps extends ComponentProps<'button'> {
  icon?: FC<ComponentProps<'svg'>>
}

export interface NavbarToggleTheme {
  base: string
  icon: string
}

export const NavbarToggle: FC<NavbarToggleProps> = ({
  icon: Icon = Bars,
  className,
  ...restProps
}): JSX.Element => {
  const { open, setOpen } = useNavbarContext()

  const toggle = () => {
    setOpen(!open)
  }

  const theme = useTheme().theme.navbar.toggle

  return (
    <button
      className={classNames(theme.base, className)}
      data-testid="theme-navbar-toggle"
      onClick={toggle}
      {...restProps}
    >
      <span className="sr-only">Open main menu</span>
      <Icon className={theme.icon} color="white" />
    </button>
  )
}
