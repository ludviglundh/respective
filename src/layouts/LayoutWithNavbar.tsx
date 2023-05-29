import { Plus } from 'components/Icon'
import { NavbarComponent } from 'components/NavBar'
import Toaster from 'components/toaster'

import { Dropdown } from 'components/Dropdown'
import Link from 'next/link'

import { FC, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'
import classNames from 'classnames'
import { PAGE_NAMES } from 'utils/constants'
import { signOut } from 'next-auth/react'
import useTranslation from 'hooks/useTranslation'

const Navbar: FC = (): JSX.Element => {
  const { translate } = useTranslation()

  const navbarItemTheme = useTheme().theme.navbar.link
  const inlineTextTheme = useTheme().theme.dropdown

  return (
    <NavbarComponent rounded>
      <NavbarComponent.Brand />
      <NavbarComponent.Toggle />
      <NavbarComponent.Collapse>
        <li
          className={classNames(
            navbarItemTheme.item.base,
            'text-white text-lg'
          )}
        >
          <Dropdown
            inline
            label={
              <span className={classNames(inlineTextTheme.inlineText, 'pl-3')}>
                {translate('navbar', 'event.header')}
              </span>
            }
            trigger="hover"
          >
            <Dropdown.Item icon={() => <Plus />}>
              <Link href={PAGE_NAMES.createEvent}>
                {translate('navbar', 'event.dropdown.create')}
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href={PAGE_NAMES.events}>
                {translate('navbar', 'event.dropdown.all')}
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </li>
        <NavbarComponent.Link href={PAGE_NAMES.settings}>
          {translate('navbar', 'settings')}
        </NavbarComponent.Link>
      </NavbarComponent.Collapse>
      <NavbarComponent.CTA>
        <button onClick={() => signOut()}>
          {translate('navbar', 'signOut')}
        </button>
      </NavbarComponent.CTA>
    </NavbarComponent>
  )
}

const LayoutWithNavbar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex flex-col flex-col relative bg-gray-50">
      <Toaster />
      <Navbar />
      <main className="flex flex-1 justify-center overflow-y-auto">
        {children}
      </main>
      <div id="modal-portal"></div>
    </div>
  )
}

export default LayoutWithNavbar
