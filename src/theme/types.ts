import { BadgeTheme } from 'components/Badge'
import { ButtonTheme } from 'components/Button'
import { ButtonGroupTheme } from 'components/Button/ButtonGroup'
import { CheckboxTheme } from 'components/Checkbox'
import { DropdownTheme } from 'components/Dropdown'
import { HelperTextTheme } from 'components/HelperText'
import { LabelTheme } from 'components/Label'
import { ModalTheme } from 'components/Modal'
import { NavbarTheme } from 'components/NavBar'
import { PageTheme } from 'components/Page'
import { RadioTheme } from 'components/Radio'
import { SelectTheme } from 'components/Select'
import { SpinnerTheme } from 'components/Spinner'
import { TableTheme } from 'components/Table'
import { TextAreaTheme } from 'components/TextArea'
import { TextInputTheme } from 'components/TextInput'
import { TooltipTheme } from 'components/Tooltip'

export interface Theme {
  navbar: NavbarTheme
  page: PageTheme
  dropdown: DropdownTheme
  button: ButtonTheme
  buttonGroup: ButtonGroupTheme
  label: LabelTheme
  textInput: TextInputTheme
  helperText: HelperTextTheme
  textarea: TextAreaTheme
  radio: RadioTheme
  checkbox: CheckboxTheme
  select: SelectTheme
  tooltip: TooltipTheme
  table: TableTheme
  spinner: SpinnerTheme
  modal: ModalTheme
  badge: BadgeTheme
}

export interface ThemeBoolean {
  off: string
  on: string
}

export interface StateColors {
  info: string
  failure: string
  success: string
  warning: string
}

export interface ThemeColors extends StateColors {
  [key: string]: string
  blue: string
  cyan: string
  dark: string
  gray: string
  green: string
  indigo: string
  light: string
  lime: string
  pink: string
  purple: string
  red: string
  teal: string
  yellow: string
}

export interface GradientColors extends Omit<StateColors, 'warning'> {
  [key: string]: string
  cyan: string
  lime: string
  pink: string
  purple: string
  teal: string
}

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface ThemePositions {
  'bottom-left': string
  'bottom-right': string
  'bottom-center': string
  'top-left': string
  'top-center': string
  'top-right': string
  'center-left': string
  center: string
  'center-right': string
}

export interface Sizes {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
}
