import classNames from 'classnames'
import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react'
import { useTheme } from 'theme/ThemeContext'
import { ButtonProps } from '.'

export interface PositionInButtonGroup {
  none: string
  start: string
  middle: string
  end: string
}

export interface ButtonGroupTheme {
  base: string
  position: PositionInButtonGroup
}

export type ButtonGroupProps = PropsWithChildren<
  ComponentProps<'div'> & Pick<ButtonProps, 'outline' | 'pill'>
>

const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  outline,
  pill,
  className,
  ...restProps
}): JSX.Element => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          pill,
          positionInGroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonProps>[]).length - 1
              ? 'end'
              : 'middle',
        })
      ),
    [children, outline, pill]
  )

  const theme = useTheme().theme.buttonGroup

  return (
    <div
      className={classNames(theme.base, className)}
      role="group"
      {...restProps}
    >
      {items}
    </div>
  )
}

ButtonGroup.displayName = 'Button.Group'
export default ButtonGroup
