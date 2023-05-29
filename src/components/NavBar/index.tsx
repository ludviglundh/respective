import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren, useState } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeBoolean } from 'theme/types'
import { NavbarBrand, NavbarBrandTheme } from './NavbarBrand'
import { NavbarCollapse, NavbarCollapseTheme } from './NavbarCollapse'
import { NavbarContext } from './NavbarContext'
import { NavbarCTA, NavbarCTATheme } from './NavbarCTA'
import { NavbarLink, NavbarLinkTheme } from './NavbarLink'
import { NavbarToggle, NavbarToggleTheme } from './NavbarToggle'

export interface NavbarComponentProps
  extends PropsWithChildren<ComponentProps<'nav'>> {
  menuOpen?: boolean
  fluid?: boolean
  rounded?: boolean
  border?: boolean
}

export interface NavbarTheme {
  root: NavbarRootTheme
  collapse: NavbarCollapseTheme
  toggle: NavbarToggleTheme
  brand: NavbarBrandTheme
  link: NavbarLinkTheme
  cta: NavbarCTATheme
}

interface NavbarRootTheme {
  base: string
  rounded: ThemeBoolean
  border: ThemeBoolean
  inner: {
    base: string
    fluid: ThemeBoolean
  }
}

const Navbar: FC<NavbarComponentProps> = ({
  menuOpen,
  fluid = false,
  rounded,
  border,
  className,
  children,
  ...restProps
}): JSX.Element => {
  const [open, setOpen] = useState(menuOpen)

  const theme = useTheme().theme.navbar.root

  return (
    <NavbarContext.Provider value={{ open, setOpen }}>
      <nav
        className={classNames(
          theme.base,
          theme.border[border ? 'on' : 'off'],
          theme.rounded[rounded ? 'on' : 'off'],
          className
        )}
        {...restProps}
      >
        <div
          className={classNames(
            theme.inner.base,
            theme.inner.fluid[fluid ? 'on' : 'off']
          )}
        >
          {children}
        </div>
      </nav>
    </NavbarContext.Provider>
  )
}

Navbar.displayName = 'Navbar'
NavbarToggle.displayName = 'Navbar.Toggle'
NavbarCollapse.displayName = 'Navbar.Collapse'
NavbarBrand.displayName = 'Navbar.Brand'
NavbarLink.displayName = 'Navbar.Link'
NavbarCTA.displayName = 'Navbar.CTA'

export const NavbarComponent = Object.assign(Navbar, {
  Brand: NavbarBrand,
  Toggle: NavbarToggle,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  CTA: NavbarCTA,
})
