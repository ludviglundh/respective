import { Theme } from './types'

const theme: Theme = {
  page: {
    base: 'container py-8',
    header: 'border-b-4 border-gray-100 font-xl font-semibold mb-3 max-md:px-2',
  },
  navbar: {
    root: {
      base: 'lg:h-20 lg:flex lg:flex-row lg:items-center bg-primary px-5 max-md:py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 drop-shadow-md z-10',
      rounded: {
        on: 'rounded-br-lg rounded-bl-lg',
        off: '',
      },
      border: {
        on: 'border',
        off: '',
      },
      inner: {
        base: 'mx-auto h-full flex flex-wrap items-center justify-between max-md:gap-0 gap-10',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
    brand: {
      base: 'flex items-center',
      logo: 'object-contain w-full h-full relative',
    },
    collapse: {
      base: 'lg:flex lg:items-center w-full md:block md:w-auto lg:h-full bg-primary lg:flex-1 max-md:pb-8',
      list: 'mt-4 flex flex-col lg:items-center lg:h-full md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: 'z-100 h-fit',
      },
    },
    toggle: {
      base: 'inline-flex items-center md:hidden p-2 ',
      icon: 'h-8 w-8 shrink-0 fill-white',
    },
    link: {
      item: {
        base: 'lg:px-8 h-full flex lg:items-center lg:pt-4 max-md:pt-2 max-md:border-b-0 border-b-4',
        active: {
          on: 'border-secondary',
          off: 'border-primary',
        },
      },
      base: 'block py-2 pr-4 pl-3 md:pl-0 md:p-0 text-lg text-white font-light max-md:w-full',
      disabled: {
        on: 'text-gray-300 hover:cursor-default dark:text-gray-600',
        off: '',
      },
    },
    cta: {
      base: 'lg:px-8 flex lg:items-center lg:pt-4 max-md:pt-2 max-md:border-b-2 border-b-4 border-transparent font-light text-lg text-white max-md:pl-3',
      hidden: {
        on: '',
        off: 'max-md:hidden',
      },
      color: {
        blue: 'bg-blue-50 dark:bg-blue-900',
        dark: 'bg-dark-50 dark:bg-dark-900',
        failure: 'bg-red-50 dark:bg-red-900',
        gray: 'bg-alternative-50 dark:bg-alternative-900',
        green: 'bg-green-50 dark:bg-green-900',
        light: 'bg-light-50 dark:bg-light-900',
        red: 'bg-red-50 dark:bg-red-900',
        purple: 'bg-purple-50 dark:bg-purple-900',
        success: 'bg-green-50 dark:bg-green-900',
        yellow: 'bg-yellow-50 dark:bg-yellow-900',
        warning: 'bg-yellow-50 dark:bg-yellow-900',
      },
    },
  },
  dropdown: {
    floating: {
      target: 'w-fit',
      base: 'z-50 w-fit rounded-lg divide-y divide-gray-100 shadow',
      animation: 'transition-opacity',
      hidden: 'invisible opacity-0',
      style: {
        dark: 'bg-gray-700 text-white dark:bg-gray-700',
        light: 'border border-gray-200 border-2 bg-white text-gray-900',
        auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
      },
      header: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
      content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
      arrow: {
        base: 'absolute z-10 h-2 w-2 rotate-45',
        style: {
          dark: 'bg-gray-700 dark:bg-gray-700',
          light: 'bg-white',
          auto: 'bg-white dark:bg-gray-700',
        },
        placement: '-4px',
      },
      item: {
        base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white z-50',
        icon: 'mr-2 h-4 w-4',
      },
      divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
    },
    arrowIcon: 'ml-2 h-4 w-4',
    inlineWrapper: 'flex items-center text-lg font-light',
    inlineText: 'text-md text-white',
    content: 'py-1',
  },
  button: {
    base: 'group flex h-min items-center justify-center p-0.5 text-center font-light focus:z-10',
    fullSized: 'w-full',
    color: {
      dark: 'text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800',
      failure:
        'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 dark:disabled:hover:bg-red-600',
      gray: 'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-2 dark:disabled:hover:bg-gray-800',
      info: 'text-white bg-primary border border-transparent hover:bg-primaryDark focus:ring-4 focus:ring-blue-300 disabled:hover:primaryDark dark:bg-blue-600 dark:hover:primaryDark dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-white dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700',
      purple:
        'text-white bg-purple-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:disabled:hover:bg-purple-600',
      success:
        'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 dark:disabled:hover:bg-green-600',
      warning:
        'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400 dark:focus:ring-yellow-900 dark:disabled:hover:bg-yellow-400',
    },
    disabled: 'cursor-default opacity-50',
    inner: {
      base: 'flex items-center',
      position: {
        none: '',
        start: 'rounded-r-none',
        middle: '!rounded-none',
        end: 'rounded-l-none',
      },
      outline: 'border border-transparent',
    },
    label:
      'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800',
    outline: {
      color: {
        gray: 'border border-gray-900 dark:border-white',
        default: 'border-0',
        light: '',
      },
      off: '',
      on: '!block bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
      pill: {
        off: 'rounded-md',
        on: 'rounded-full',
      },
    },
    pill: {
      off: 'rounded-lg',
      on: 'rounded-full',
    },
    size: {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-2.5',
      xl: 'text-base px-6 py-3',
    },
  },
  buttonGroup: {
    base: 'inline-flex',
    position: {
      none: 'focus:!ring-2',
      start: 'rounded-r-none',
      middle: '!rounded-none border-l-0 pl-0',
      end: 'rounded-l-none border-l-0 pl-0',
    },
  },
  label: {
    base: 'text-sm font-medium',
    colors: {
      default: 'text-gray-900 dark:text-gray-300',
      info: 'text-blue-500 dark:text-blue-600',
      failure: 'text-red-700 dark:text-red-500',
      warning: 'text-yellow-500 dark:text-yellow-600',
      success: 'text-green-700 dark:text-green-500',
    },
    sizes: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    disabled: 'opacity-50',
  },
  textInput: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
      },
      rightIcon: {
        base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
      },
      input: {
        base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        sizes: {
          sm: 'p-2 sm:text-xs',
          md: 'p-2.5 text-sm',
          lg: 'sm:text-md p-4',
        },
        colors: {
          gray: 'bg-white border-gray-300 border-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
        },
        withRightIcon: {
          on: 'pr-10',
          off: '',
        },
        withIcon: {
          on: 'pl-10',
          off: '',
        },
        withAddon: {
          on: 'rounded-r-lg',
          off: 'rounded-lg',
        },
        withShadow: {
          on: 'shadow-sm dark:shadow-sm-light',
          off: '',
        },
      },
    },
  },
  textarea: {
    base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
    colors: {
      gray: 'bg-white border-gray-300 border-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
      info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
      failure:
        'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
      warning:
        'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
      success:
        'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    },
    withShadow: {
      on: 'shadow-sm dark:shadow-sm-light',
      off: '',
    },
  },
  helperText: {
    base: 'mt-2 text-sm h-2',
    colors: {
      gray: 'text-gray-500 dark:text-gray-400',
      info: 'text-blue-700 dark:text-blue-800',
      success: 'text-green-600 dark:text-green-500',
      failure: 'text-red-600 dark:text-red-500',
      warning: 'text-yellow-500 dark:text-yellow-600',
    },
  },
  radio: {
    base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-blue-600 dark:focus:ring-blue-600',
  },
  checkbox: {
    base: 'h-4 w-4 rounded border border-2 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600',
  },
  select: {
    base: 'flex',
    addon:
      'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
        svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
      },
      select: {
        base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
        withIcon: {
          on: 'pl-10',
          off: '',
        },
        withAddon: {
          on: 'rounded-r-lg',
          off: 'rounded-lg',
        },
        withShadow: {
          on: 'shadow-sm dark:shadow-sm-light',
          off: '',
        },
        sizes: {
          sm: 'p-2 sm:text-xs',
          md: 'p-2.5 text-sm',
          lg: 'sm:text-md p-4',
        },
        colors: {
          gray: 'bg-gray-50 border-2 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          info: 'border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 dark:border-blue-400 dark:bg-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-500',
          failure:
            'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
          warning:
            'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
          success:
            'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
        },
      },
    },
  },
  tooltip: {
    target: 'w-fit',
    base: 'absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
    animation: 'transition-opacity',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-gray-700 text-white dark:bg-gray-700',
      light: 'border border-gray-200 bg-white text-gray-900',
      auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
    },
    content: 'relative z-20',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-gray-700 dark:bg-gray-700',
        light: 'bg-white',
        auto: 'bg-white dark:bg-gray-700',
      },
      placement: '-4px',
    },
  },
  table: {
    wrapper: 'relative overflow-x-auto shadow-lg sm:rounded-lg',
    base: 'w-full text-left text-sm text-gray-500 bg-gray-200 dark:text-gray-400',
    head: {
      base: 'border-2 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
      cell: {
        base: 'px-6 py-3',
      },
    },
    row: {
      hovered: 'hover:bg-gray-50 dark:hover:bg-gray-600',
      striped:
        'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
    },
    cell: {
      base: 'px-6 py-4',
    },
  },
  spinner: {
    base: 'inline animate-spin text-gray-200',
    color: {
      failure: 'fill-red-600',
      gray: 'fill-gray-600',
      info: 'fill-blue-600',
      pink: 'fill-pink-600',
      purple: 'fill-purple-600',
      success: 'fill-green-500',
      warning: 'fill-yellow-400',
    },
    light: {
      off: {
        base: 'dark:text-gray-600',
        color: {
          failure: '',
          gray: 'dark:fill-gray-300',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: '',
        },
      },
      on: {
        base: '',
        color: {
          failure: '',
          gray: '',
          info: '',
          pink: '',
          purple: '',
          success: '',
          warning: '',
        },
      },
    },
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
  },
  modal: {
    base: 'fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
    show: {
      on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
      off: 'hidden',
    },
    content: {
      base: 'relative h-full w-full p-4 md:h-auto',
      inner: 'relative rounded-lg bg-white shadow dark:bg-gray-700',
    },
    body: {
      base: 'p-6',
      popup: 'pt-0',
    },
    header: {
      base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
      popup: '!p-2 !border-b-0',
      title: 'text-xl font-medium text-gray-900 dark:text-white',
      close: {
        base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
        icon: 'h-5 w-5',
      },
    },
    footer: {
      base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
      popup: 'border-t',
    },
    sizes: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
    },
    positions: {
      'top-left': 'items-start justify-start',
      'top-center': 'items-start justify-center',
      'top-right': 'items-start justify-end',
      'center-left': 'items-center justify-start',
      center: 'items-center justify-center',
      'center-right': 'items-center justify-end',
      'bottom-right': 'items-end justify-end',
      'bottom-center': 'items-end justify-center',
      'bottom-left': 'items-end justify-start',
    },
  },
  badge: {
    root: {
      base: 'flex h-fit items-center gap-1 font-semibold',
      color: {
        info: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
        gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
        failure:
          'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
        success:
          'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
        warning:
          'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
        indigo:
          'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
        purple:
          'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
        pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
      },
      href: 'group',
      size: {
        xs: 'p-1 text-xs',
        sm: 'p-1.5 text-sm',
      },
    },
    icon: {
      off: 'rounded px-2 py-0.5',
      on: 'rounded-full p-1.5',
      size: {
        xs: 'w-3 h-3',
        sm: 'w-3.5 h-3.5',
      },
    },
  },
}

export default theme
