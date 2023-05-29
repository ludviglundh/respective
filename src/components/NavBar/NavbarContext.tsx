import { createContext, useContext } from 'react'

type NavbarContext = {
  open?: boolean
  setOpen: (isOpen: boolean) => void
}

export const NavbarContext = createContext<NavbarContext | undefined>(undefined)

export const useNavbarContext = (): NavbarContext => {
  const context = useContext(NavbarContext)

  if (!context)
    throw new Error(
      'useNavbarContext should be used withing the NavbarContext Provider'
    )

  return context
}
