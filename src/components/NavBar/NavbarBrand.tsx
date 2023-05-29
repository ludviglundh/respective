import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { PAGE_NAMES } from 'utils/constants'
import logo from '../../../public/logo.png'

export interface NavbarBrandTheme {
  base: string
  logo: string
}

export interface NavbarBrandProps {
  href?: string
  className?: string
}

export const NavbarBrand: FC<NavbarBrandProps> = ({
  href = PAGE_NAMES.root,
  className,
  ...restProps
}): JSX.Element => {
  const theme = useTheme().theme.navbar.brand

  return (
    <Link
      href={href}
      className={(classNames(theme.base), className)}
      {...restProps}
    >
      <Image
        className={classNames(theme.logo)}
        alt="navbar-brand-logo"
        width={100}
        src={logo}
      />
    </Link>
  )
}
