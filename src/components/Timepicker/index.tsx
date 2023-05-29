import { Floating } from 'components/Floating'
import { TextInput } from 'components/TextInput'
import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react'
import { ExplicitAny } from '@types'
import { CiClock2 } from 'react-icons/ci'

const theme = {
  floating: {
    target: 'w-full h-fit',
    base: 'z-50 w-fit rounded-lg divide-y divide-gray-100 shadow',
    animation: 'transition-opacity',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-gray-700 text-white dark:bg-gray-700',
      light: 'border border-gray-200 border-2 bg-white text-gray-900',
      auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
    },
    header: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
    content:
      'py-1 text-sm text-gray-700 dark:text-gray-200 h-44 overflow-hidden',
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
}

interface TimepickerProps {
  onChange: (selectedTime: string) => void
  value: string
  hoursLabel: string
  minutesLabel: string
  secondsLabel: string
  placeholder: string
}

type Time = {
  hour: string
  minute: string
  second: string
}

const Timepicker = forwardRef<ExplicitAny, TimepickerProps>(
  (
    {
      onChange,
      value,
      hoursLabel = 'Hours',
      minutesLabel = 'Minutes',
      secondsLabel = 'Seconds',
      placeholder = '00:00:00',
    },
    ref
  ) => {
    const [selectedTime, setSelectedTime] = useState<Time>({
      hour: '00',
      minute: '00',
      second: '00',
    })

    const generateHoursMinutesAndSeconds = (): {
      hours: string[]
      minutes: string[]
      seconds: string[]
    } => {
      const hours = Array.from(Array(25).keys())
        .slice(1, 25)
        .map((hour) =>
          hour.toString().length < 2 ? `0${hour}` : hour.toString()
        )

      const minutes = Array.from(Array(61).keys())
        .slice(0, 61)
        .map((minute) =>
          minute.toString().length < 2 ? `0${minute}` : minute.toString()
        )

      const seconds = Array.from(Array(61).keys())
        .slice(0, 61)
        .map((seconds) =>
          seconds.toString().length < 2 ? `0${seconds}` : seconds.toString()
        )

      return { hours, minutes, seconds }
    }

    const { hours, minutes, seconds } = generateHoursMinutesAndSeconds()

    const list = 'flex flex-col gap-2 overflow-y-scroll scrollbar-thin'
    const item = 'text-center px-2 hover:bg-gray-800 cursor-pointer rounded-md'

    const handleSelectTime = useCallback(
      ({
        hour,
        minute,
        second,
      }: {
        hour?: string
        minute?: string
        second?: string
      }) => {
        setSelectedTime((prev) => ({
          hour: hour ?? prev.hour,
          minute: minute ?? prev.minute,
          second: second ?? prev.second,
        }))
      },
      []
    )

    useEffect(() => {
      onChange(
        `${selectedTime.hour}:${selectedTime.minute}:${selectedTime.second}`
      )
    }, [onChange, selectedTime.hour, selectedTime.minute, selectedTime.second])

    const content = useMemo(
      () => (
        <div className="flex text-white p-2 gap-4 h-full">
          <div className="flex flex-col items-center gap-2">
            <span>{hoursLabel}</span>
            <ul className={list}>
              {hours.map((hour) => (
                <li
                  key={hour}
                  className={item}
                  onClick={() => handleSelectTime({ hour })}
                >
                  {hour}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>{minutesLabel}</span>
            <ul className={list}>
              {minutes.map((minute) => (
                <li
                  key={minute}
                  className={item}
                  onClick={() => handleSelectTime({ minute })}
                >
                  {minute}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>{secondsLabel}</span>
            <ul className={list}>
              {seconds.map((second) => (
                <li
                  key={second}
                  className={item}
                  onClick={() => handleSelectTime({ second })}
                >
                  {second}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
      [
        handleSelectTime,
        hours,
        hoursLabel,
        minutes,
        minutesLabel,
        seconds,
        secondsLabel,
      ]
    )

    return (
      <div className="w-full" ref={ref as never}>
        <Floating
          content={content}
          theme={theme.floating}
          placement="bottom"
          arrow={false}
        >
          <TextInput
            className="w-full flex-1"
            placeholder={placeholder}
            defaultValue={value}
            rightIcon={() => <CiClock2 />}
          />
        </Floating>
      </div>
    )
  }
)

Timepicker.displayName = 'Timepicker'

export default Timepicker
