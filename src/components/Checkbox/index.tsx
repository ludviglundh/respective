import classNames from 'classnames'
import { ComponentProps, forwardRef } from 'react'
import { useTheme } from 'theme/ThemeContext'

export interface CheckboxTheme {
  base: string
}

export const Checkbox = forwardRef<
  HTMLInputElement,
  Omit<ComponentProps<'input'>, 'type' | 'ref'>
>(({ className, ...restProps }, ref) => {
  const theme = useTheme().theme.checkbox

  return (
    <input
      ref={ref}
      className={classNames(theme.base, className)}
      type="checkbox"
      {...restProps}
    />
  )
})

Checkbox.displayName = 'Checkbox'
