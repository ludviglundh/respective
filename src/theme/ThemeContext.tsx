import type { FC, ReactNode } from 'react'
import { createContext, useContext } from 'react'
import defaultTheme from './defaultTheme'
import { Theme } from './types'

export type Mode = 'light' | 'dark'

export interface ThemeContextProps {
  theme: Theme
  mode?: Mode
  toggleMode?: () => void | null
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
})

interface ThemeProviderProps {
  children: ReactNode
  value: ThemeContextProps
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext)
}
