import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableHeadCellProps
  extends PropsWithChildren<ComponentProps<'th'>> {}

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.table.head.cell
  return (
    <th className={classNames(theme.base, className)} {...restProps}>
      {children}
    </th>
  )
}
