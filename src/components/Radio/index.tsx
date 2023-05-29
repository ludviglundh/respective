import classNames from 'classnames'
import { ComponentProps, forwardRef } from 'react'
import { useTheme } from 'theme/ThemeContext'

export interface RadioTheme {
  base: string
}

export const Radio = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'type' | 'ref'>
>(({ className, ...restProps }, ref) => {
  const theme = useTheme().theme.radio

  return (
    <input
      ref={ref}
      className={classNames(theme.base, className)}
      type="radio"
      {...restProps}
    />
  )
})

Radio.displayName = 'Radio'
