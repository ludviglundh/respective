import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useTheme } from 'theme/ThemeContext'
import { useModalContext } from './ModalContext'
import classNames from 'classnames'

export type ModalBodyProps = PropsWithChildren<ComponentProps<'div'>>

export const ModalBody: FC<ModalBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const { popup } = useModalContext()
  const theme = useTheme().theme.modal.body

  return (
    <div
      className={classNames(
        theme.base,
        {
          [theme.popup]: popup,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
