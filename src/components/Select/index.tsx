import classNames from 'classnames'
import HelperText from 'components/HelperText'
import { ComponentProps, PropsWithChildren, forwardRef } from 'react'
import { Sizes } from 'theme/types'

interface SelectProps extends PropsWithChildren<ComponentProps<'select'>> {
  title?: string
  helperText?: string
  sizing?: keyof SelectSizes
}

export interface SelectSizes extends Pick<Sizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { title, helperText, children, sizing = 'md', className, ...restProps },
    ref
  ) => {
    const sizeStyle: SelectSizes = {
      sm: 'p-2 sm:text-xs',
      md: 'p-2.5 text-sm',
      lg: 'sm:text-md p-4',
    }

    return (
      <div className={classNames('flex w-full', className)}>
        <div className="relative w-full flex flex-col gap-0.5">
          {title && (
            <span className="font-semibold text-sm ml-1 text-zinc-700">
              {title}
            </span>
          )}
          <select
            ref={ref}
            className={classNames(
              'block w-full border disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:shadow-md transition-shadow rounded-md',
              sizeStyle[sizing]
            )}
            {...restProps}
          >
            {children}
          </select>
        </div>
        {helperText && <HelperText>{helperText}</HelperText>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
