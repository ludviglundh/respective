import { Placement } from '@floating-ui/react'
import { Floating, FloatingTheme } from 'components/Floating'
import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import { useTheme } from 'theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TooltipTheme extends FloatingTheme {}

export interface TooltipProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'style'>> {
  content: ReactNode
  placement?: 'auto' | Placement
  trigger?: 'hover' | 'click'
  style?: 'dark' | 'light' | 'auto'
  animation?: false | `duration-${number}`
  arrow?: boolean
}

export const Tooltip: FC<TooltipProps> = ({
  animation = 'duration-180',
  arrow = true,
  children,
  content,
  placement = 'top',
  style = 'dark',
  trigger = 'hover',
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.tooltip

  return (
    <Floating
      theme={theme}
      content={content}
      style={style}
      animation={animation}
      placement={placement}
      trigger={trigger}
      arrow={arrow}
      className={className}
      {...restProps}
    >
      {children}
    </Floating>
  )
}
