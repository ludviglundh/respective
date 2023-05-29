import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ThemeBoolean, ThemeColors } from 'theme/types'
import { useNavbarContext } from './NavbarContext'

export interface NavbarCTAProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  color?: keyof NavbarCTAColors
}

export interface NavbarCTAColors
  extends Pick<
    ThemeColors,
    | 'blue'
    | 'dark'
    | 'failure'
    | 'gray'
    | 'green'
    | 'light'
    | 'purple'
    | 'red'
    | 'success'
    | 'warning'
    | 'yellow'
  > {
  [key: string]: string
}

export interface NavbarCTATheme {
  base: string
  color: NavbarCTAColors
  hidden: ThemeBoolean
}

export const NavbarCTA: FC<NavbarCTAProps> = ({
  children,
  color = 'info',
  className,
  ...restProps
}): JSX.Element => {
  const { open } = useNavbarContext()
  const theme = useTheme().theme.navbar.cta

  return (
    <div
      className={classNames(
        theme.base,
        theme.color[color],
        theme.hidden[open ? 'on' : 'off'],
        className
      )}
      data-testid="theme-navbar-cta"
      {...restProps}
    >
      {children}
    </div>
  )
}
