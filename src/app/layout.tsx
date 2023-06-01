import '../styles/globals.scss'
import type { FC, ReactNode } from 'react'
import Toaster from 'components/toaster'
import Providers from 'providers'

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="w-full min-h-screen flex bg-gray-50 flex items-center justify-center">
          <Toaster />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
