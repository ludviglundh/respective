import type { ComponentProps, FC, PropsWithChildren } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TableBodyProps
  extends PropsWithChildren<ComponentProps<'tbody'>> {}

export const TableBody: FC<TableBodyProps> = ({ children, ...restProps }) => {
  return <tbody {...restProps}>{children}</tbody>
}
