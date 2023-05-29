import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableCellProps
  extends PropsWithChildren<ComponentProps<'td'>> {}

export const TableCell: FC<TableCellProps> = ({
  children,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.table.cell

  return (
    <td className={classNames(theme.base, className)} {...restProps}>
      {children}
    </td>
  )
}
