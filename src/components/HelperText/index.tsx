import classNames from 'classnames'
import { ComponentProps, FC, PropsWithChildren } from 'react'

export const HelperText: FC<PropsWithChildren<ComponentProps<'p'>>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <p className={classNames('text-sm h-2', className)} {...restProps}>
      {children}
    </p>
  )
}

export default HelperText
