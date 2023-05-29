import type { ComponentProps, FC, MouseEvent, PropsWithChildren } from 'react'
import type { Sizes, ThemeBoolean, ThemePositions } from 'theme/types'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ModalHeader } from './ModalHeader'
import { ModalBody } from './ModalBody'
import { ModalFooter } from './ModalFooter'
import { ModalContext } from './ModalContext'
import { useTheme } from 'theme/ThemeContext'
import classNames from 'classnames'
import useKeyDown from 'hooks/useKeyDown'

export interface ModalTheme {
  base: string
  show: ThemeBoolean
  content: {
    base: string
    inner: string
  }
  body: {
    base: string
    popup: string
  }
  header: {
    base: string
    popup: string
    title: string
    close: {
      base: string
      icon: string
    }
  }
  footer: {
    base: string
    popup: string
  }
  sizes: ModalSizes
  positions: ModalPositions
}

export interface ModalPositions extends ThemePositions {
  [key: string]: string
}

export interface ModalSizes extends Omit<Sizes, 'xs'> {
  [key: string]: string
}

export interface ModalProps extends PropsWithChildren<ComponentProps<'div'>> {
  onClose?: () => void
  position?: keyof ModalPositions
  popup?: boolean
  root?: HTMLElement
  open?: boolean
  size?: keyof ModalSizes
  dismissible?: boolean
}

const ModalComponent: FC<ModalProps> = ({
  children,
  open,
  popup,
  size = '2xl',
  position = 'center',
  dismissible = false,
  onClose,
  className,
  ...restProps
}) => {
  const theme = useTheme().theme.modal

  const portalRef = useRef<Element | null>(null)

  useKeyDown('Escape', () => {
    if (dismissible && onClose) {
      onClose()
    }
  })

  useEffect(() => {
    portalRef.current = document.getElementById('modal-portal')
  }, [])

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (dismissible && e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  return portalRef.current
    ? createPortal(
        <ModalContext.Provider value={{ popup, onClose }}>
          <div
            aria-hidden={!open}
            className={classNames(
              theme.base,
              theme.positions[position],
              open ? theme.show.on : theme.show.off,
              className
            )}
            data-testid="theme-modal"
            role="dialog"
            onClick={handleOnClick}
            {...restProps}
          >
            <div className={classNames(theme.content.base, theme.sizes[size])}>
              <div className={classNames(theme.content.inner)}>{children}</div>
            </div>
          </div>
        </ModalContext.Provider>,
        portalRef.current
      )
    : null
}

ModalComponent.displayName = 'Modal'
ModalHeader.displayName = 'Modal.Header'
ModalBody.displayName = 'Modal.Body'
ModalFooter.displayName = 'Modal.Footer'

const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
export default Modal
