'use client'

import { FC, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm()

  return <FormProvider {...methods}>{children}</FormProvider>
}

export default Providers
