import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableHeadProps
  extends PropsWithChildren<ComponentProps<'thead'>> {}

export const TableHead: FC<TableHeadProps> = ({
  children,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.table

  return (
    <thead className={classNames(theme.base, className)} {...restProps}>
      <tr>{children}</tr>
    </thead>
  )
}
