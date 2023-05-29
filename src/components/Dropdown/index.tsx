import type {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react'
import React, { Children, useMemo, useState } from 'react'
import {
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
} from 'react-icons/hi'
import { useTheme } from 'theme/ThemeContext'
import { ExplicitAny } from '@types'

import type { ButtonProps } from '../Button'
import { Button } from '../Button'
import type { FloatingProps, FloatingTheme } from '../Floating'

import { DropdownItem } from './DropdownItem'
import { uuid } from 'utils/uuid'
import { Floating } from '../Floating'

export interface DropdownFloatingTheme extends FloatingTheme {
  header: string
  item: {
    base: string
    icon: string
  }
  divider: string
}

export interface DropdownTheme {
  floating: DropdownFloatingTheme
  content: string
  inlineWrapper: string
  inlineText: string
  arrowIcon: string
}

export interface DropdownProps
  extends PropsWithChildren<Pick<FloatingProps, 'placement' | 'trigger'>>,
    ButtonProps {
  label: ReactNode
  inline?: boolean
  floatingArrow?: boolean
  arrowIcon?: boolean
  dismissOnClick?: boolean
}

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
}

const DropdownComponent: FC<DropdownProps> = ({
  children,
  className,
  dismissOnClick = true,
  ...props
}) => {
  const theme = useTheme().theme.dropdown
  const theirProps = props as DropdownProps
  const {
    placement = props.inline ? 'bottom-start' : 'bottom',
    trigger = 'click',
    label,
    inline,
    floatingArrow = false,
    arrowIcon = true,
    ...buttonProps
  } = theirProps

  const Icon = useMemo(() => {
    const [p] = placement.split('-')
    return icons[p] ?? HiOutlineChevronDown
  }, [placement])

  const [closeRequestKey, setCloseRequestKey] = useState<string | undefined>(
    undefined
  )

  // Extends DropdownItem's onClick to trigger a close request to the Floating component
  const attachCloseListener: ExplicitAny = (node: ReactNode) => {
    if (!React.isValidElement(node)) return node
    if ((node as ReactElement).type === DropdownItem)
      return React.cloneElement(node, {
        onClick: () => {
          node.props.onClick?.()
          dismissOnClick && setCloseRequestKey(uuid())
        },
      } as ExplicitAny)
    if (node.props.children && typeof node.props.children === 'object') {
      return React.cloneElement(node, {
        // @ts-ignore
        children: Children.map(node.props.children, attachCloseListener),
      })
    }
    return node
  }

  const content = useMemo(
    () => (
      <ul className={theme.content}>
        {Children.map(children, attachCloseListener)}
      </ul>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, theme]
  )

  const TriggerWrapper: FC<ButtonProps> = ({ children }): JSX.Element =>
    inline ? (
      <button className={theme.inlineWrapper}>{children}</button>
    ) : (
      <Button {...buttonProps}>{children}</Button>
    )

  return (
    <Floating
      content={content}
      theme={theme.floating}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={floatingArrow}
      trigger={trigger}
      closeRequestKey={closeRequestKey}
      className={className}
    >
      <TriggerWrapper>
        {label}
        {arrowIcon && <Icon className={theme.arrowIcon} />}
      </TriggerWrapper>
    </Floating>
  )
}

DropdownComponent.displayName = 'Dropdown'
DropdownItem.displayName = 'Dropdown.Item'

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
})
