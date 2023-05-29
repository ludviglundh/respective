import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableContext, TableContextType } from './TableContext'
import { TableHead } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableRow } from './TableRow'

export interface TableTheme {
  base: string
  wrapper: string
  head: {
    base: string
    cell: {
      base: string
    }
  }
  row: {
    hovered: string
    striped: string
  }
  cell: {
    base: string
  }
}

export type TableProps = PropsWithChildren<
  ComponentProps<'table'> & TableContextType
>

const TableComponent: FC<TableProps> = ({
  children,
  striped,
  hoverable,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.table

  return (
    <div
      data-testid="theme-table-element"
      className={classNames(theme.wrapper)}
    >
      <TableContext.Provider value={{ striped, hoverable }}>
        <table className={classNames(theme.base, className)} {...restProps}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  )
}

TableComponent.displayName = 'Table'
TableHead.displayName = 'Table.Head'
TableHeadCell.displayName = 'Table.HeadCell'
TableBody.displayName = 'Table.Body'
TableRow.displayName = 'Table.Row'
TableCell.displayName = 'Table.Cell'

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  HeadCell: TableHeadCell,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
})
