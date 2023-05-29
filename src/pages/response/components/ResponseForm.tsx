import type { FC } from 'react'
import type { ExplicitAny } from '@types'
import type { Event, Option } from '@prisma/client'
import type { ResponseFormFields } from '../[eventId]'
import type { InputWithOptions } from 'pages/events/components/Form'

import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Dropdown } from 'components/Dropdown'
import { Label } from 'components/Label'
import { Radio } from 'components/Radio'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import useTranslation from 'hooks/useTranslation'
import { Dayjs } from 'dayjs'

export type EventWithInputsAndOptions = Event & {
  inputs: InputWithOptions[]
  date: {
    start: Dayjs
    end: Dayjs
  }
}

interface ResponseFormProps {
  onSubmit: (data: ExplicitAny) => void
  data: EventWithInputsAndOptions
}

interface ResponseInputsProps {
  attending: string
  data: EventWithInputsAndOptions
}

interface InputProps {
  data: InputWithOptions
  index: number
}

const Input: FC<InputProps> = ({ data, index }) => {
  const {
    register,

    watch,
    control,
    formState: { errors },
  } = useFormContext<ResponseFormFields>()
  const values = watch()
  const { translate } = useTranslation()

  switch (data.type) {
    case 'CHECKBOX':
      return (
        <div className="flex flex-col gap-2" key={data.id}>
          <Label sizing="xl" value={data.title} />
          <div className="flex items-center gap-2 h-8">
            <Checkbox
              {...register(`inputs.${index}.${data.id}`, {
                required: {
                  value: data.required ?? false,
                  message: translate('common', 'required'),
                },
              })}
            />
            <Label value={data.label} />
          </div>
        </div>
      )
    case 'DROPDOWN':
      return (
        <div className="flex flex-col gap-2">
          <Label sizing="xl" value={data.title} />
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name={`inputs.${index}.${data.id}`}
              render={({ field: { onChange } }) => (
                <Dropdown
                  color="light"
                  label={values?.inputs?.[index]?.[data.id] ?? data.label}
                >
                  {data.options?.map((option: Option) => (
                    <Dropdown.Item
                      key={option.id}
                      value={option.value}
                      onClick={() => onChange(option.value)}
                    >
                      {option.value}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              )}
            ></Controller>
          </div>
        </div>
      )

    case 'RADIOBUTTON':
      return (
        <div className="flex flex-col gap-2">
          <Label sizing="xl" value={data.title} />
          {data.options?.map((option: Option) => (
            <div className="flex items-center gap-2" key={option.id}>
              <Radio
                value={option.value}
                {...register(`inputs.${index}.${data.id}`, {
                  required: {
                    value: data.required ?? false,
                    message: translate('common', 'required'),
                  },
                })}
              />
              <Label value={option.label} />
            </div>
          ))}
        </div>
      )

    case 'TEXTAREA':
      return (
        <div className="flex flex-col gap-2">
          <Label sizing="xl" value={data.title} />
          <div className="flex flex-col gap-1">
            <Label value={data.label} />
            <TextArea
              rows={10}
              placeholder={data?.placeholder ?? ''}
              {...register(`inputs.${index}.${data.id}`, {
                required: {
                  value: data.required ?? false,
                  message: translate('common', 'required'),
                },
              })}
              color={errors?.inputs?.[index]?.[data.id] && 'failure'}
            />
          </div>
        </div>
      )

    case 'TEXTINPUT':
      return (
        <div className="flex flex-col">
          <Label sizing="xl" value={data.title} />
          <div className="flex flex-col gap-1">
            <Label value={data.label} />
            <TextInput
              placeholder={data?.placeholder ?? ''}
              {...register(`inputs.${index}.${data.id}`, {
                required: {
                  value: data.required ?? false,
                  message: translate('common', 'required'),
                },
              })}
              color={errors?.inputs?.[index]?.[data.id] && 'failure'}
            />
          </div>
        </div>
      )
  }
}

const ResponseInputs: FC<ResponseInputsProps> = ({ attending, data }) => {
  const { translate } = useTranslation()
  const attendingBool = attending === 'true'

  if (!attendingBool) return <div className="h-full" />

  return (
    <div className="h-full w-full flex flex-col bg-white rounded-lg shadow-xl p-8 gap-8">
      <div className="mb-4">
        <Label sizing="lg">{translate('response', 'inputsHeader')}</Label>
      </div>
      {data.inputs.map((input: InputWithOptions, index: number) => {
        return <Input data={input} index={index} key={input.id} />
      })}
    </div>
  )
}

const ResponseForm: FC<ResponseFormProps> = ({ onSubmit, data }) => {
  const { translate } = useTranslation()
  const { register, watch, control, handleSubmit } =
    useFormContext<ResponseFormFields>()
  const values = watch()

  useFieldArray({ name: 'inputs', control })

  const submit = handleSubmit(onSubmit)

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-1 w-full justify-center py-8 px-6"
    >
      <div
        id="response-container"
        className="flex flex-1 flex-col items-center gap-8 w-full h-full"
      >
        <div className="flex flex-col items-center gap-6 bg-white py-20 shadow-xl rounded-lg w-full">
          <span className="text-3xl">
            {translate('response', 'attendingQuestion')}
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Radio
                value="true"
                {...register('attending', {
                  required: true,
                })}
              />
              <Label sizing="lg">{translate('response', 'yes')}</Label>
            </div>
            <div className="flex items-center gap-4">
              <Radio
                value="false"
                {...register('attending', {
                  required: true,
                })}
              />
              <Label sizing="lg">{translate('response', 'no')}</Label>
            </div>
          </div>
        </div>
        <ResponseInputs attending={values?.attending} data={data} />
        <Button onClick={submit} className="w-full">
          {translate('common', 'send')}
        </Button>
      </div>
    </form>
  )
}

export default ResponseForm
