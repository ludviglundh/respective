import classNames from 'classnames'
import Head from 'next/head'
import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'

export interface PageProps extends PropsWithChildren<ComponentProps<'div'>> {
  children: ReactNode
  header?: string
  head?: string
}

export interface PageTheme {
  base: string
  header: string
}

const Page: FC<PageProps> = ({
  children,
  header,
  head,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.page

  return (
    <div className={classNames(theme.base, className)} {...restProps}>
      <Head>
        <title>{head ?? header}</title>
      </Head>
      {header && (
        <div className={theme.header}>
          <span>{header}</span>
        </div>
      )}
      {children}
    </div>
  )
}

export default Page
