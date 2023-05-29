import { ReactNode } from 'react'
import Toaster from 'components/toaster'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen flex bg-gray-50">
      <Toaster />
      {children}
    </div>
  )
}

export default RootLayout
