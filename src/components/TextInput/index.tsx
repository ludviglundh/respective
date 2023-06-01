'use client'

import { ComponentProps, forwardRef } from 'react'
import { Sizes, ThemeColors } from 'theme/types'
import classNames from 'classnames'
import HelperText from 'components/HelperText'

export interface TextInputSizes extends Pick<Sizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export interface TextInputColors
  extends Pick<ThemeColors, 'info' | 'failure' | 'warning' | 'success'> {
  [key: string]: string
}

interface TextInputProps
  extends Omit<ComponentProps<'input'>, 'ref' | 'color'> {
  sizing?: keyof TextInputSizes
  shadow?: boolean
  helperText?: string
  title?: string
  color?: keyof TextInputColors
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      title,
      sizing = 'md',
      shadow = true,
      color = 'info',
      helperText,
      className,
      ...restProps
    },
    ref
  ) => {
    const sizeStyle: TextInputSizes = {
      sm: 'p-2 sm:text-xs',
      md: 'p-2.5 text-sm',
      lg: 'p-4 sm:text-md',
    }

    const colorStyle: TextInputColors = {
      info: '',
      failure:
        'border-red-500 text-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-500 dark:focus:ring-red-500',
      warning:
        'border-yellow-500 text-yellow-500 placeholder-yellow-500 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
      success:
        'border-green-500  text-green-500 placeholder-green-500 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:focus:border-green-500 dark:focus:ring-green-500',
    }

    const helperTextColorStyle: TextInputColors = {
      info: '',
      failure: 'text-red-500',
      warning: '',
      success: '',
    }

    return (
      <div className={classNames('flex w-full flex-col mb-2', className)}>
        <div className="relative w-full flex flex-col gap-0.5">
          {title && (
            <span className="font-semibold text-sm ml-1 text-zinc-700">
              {title}
            </span>
          )}
          <input
            ref={ref}
            className={classNames(
              'block w-full border disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus:shadow-md transition-shadow rounded-md',
              sizeStyle[sizing],
              colorStyle[color],
              shadow ? 'shadow-sm dark:shadow-sm-light' : ''
            )}
            {...restProps}
          />
        </div>
        <HelperText className={classNames(helperTextColorStyle[color])}>
          {helperText}
        </HelperText>
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
