import classNames from 'classnames'
import { Checkbox } from 'components/Checkbox'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { TableCell } from './TableCell'
import { useTableContext } from './TableContext'

export interface TableRowProps extends PropsWithChildren<ComponentProps<'tr'>> {
  checkbox?: boolean
  onCheckboxClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TableRow: FC<TableRowProps> = ({
  children,
  className,
  checkbox,
  onCheckboxClick,
  ...restProps
}) => {
  const theme = useTheme().theme.table.row
  const { striped, hoverable } = useTableContext()

  return (
    <tr
      data-testid="theme-table-row-element"
      className={classNames(
        striped && theme.striped,
        hoverable && theme.hovered,
        className
      )}
      {...restProps}
    >
      {checkbox && (
        <TableCell className="!p-4">
          <Checkbox onChange={onCheckboxClick} />
        </TableCell>
      )}
      {children}
    </tr>
  )
}
