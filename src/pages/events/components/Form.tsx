import { Event, Input, InputType, Option } from '@prisma/client'
import { Button } from 'components/Button'
import { Checkbox } from 'components/Checkbox'
import { Dropdown } from 'components/Dropdown'
import { Close, Information } from 'components/Icon'
import { Label } from 'components/Label'
import { Radio } from 'components/Radio'
import { Select } from 'components/Select'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { Tooltip } from 'components/Tooltip'
import { FC, useCallback, useEffect, useState } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { uuid } from 'utils/uuid'
import { EventFormFields } from '../create'
import { ExplicitAny } from '@types'
import { toast } from 'react-hot-toast'
import useTranslation from 'hooks/useTranslation'
import DatetimePicker from 'react-tailwind-datetime-picker'

export type InputWithOptions = Input & { options: Option[] }

const templateField: InputWithOptions = {
  id: uuid(),
  type: 'CHECKBOX',
  title: 'Exempel Titel',
  label: 'Exempel Label',
  placeholder: 'Exempel Placeholder',
  options: [
    {
      id: uuid(),
      value: 'Exempel värde',
      label: 'Exempel label',
      inputId: null,
    },
  ],
  eventId: null,
  required: false,
}

interface FieldLabelProps {
  label: string
  tooltip: string
}

const FieldLabel: FC<FieldLabelProps> = ({ label, tooltip }) => {
  return (
    <div className="mb-2 flex items-center gap-2">
      <Label value={label} />
      <Tooltip placement="right" content={tooltip}>
        <Information className="h-5 w-5 text-gray-900 dark:text-gray-400 cursor-pointer" />
      </Tooltip>
    </div>
  )
}

export interface FormProps {
  onSubmit: (data: ExplicitAny) => void
  data?: Event & { inputs: Input[] }
}

const DropdownOptions = ({ parentIndex }: { parentIndex: number }) => {
  const {
    register,
    unregister,
    formState: { errors },
    watch,
  } = useFormContext<EventFormFields>()

  const values = watch()

  const contextOptions = values?.inputs?.[parentIndex]?.options
  const [options, setOptions] = useState<number[]>(
    Array.from(Array(contextOptions?.length ?? 1))
  )
  const [hydrated, setHydrated] = useState<boolean>(false)

  useEffect(() => {
    if (!hydrated) setHydrated(true)
  }, [hydrated])

  useEffect(() => {
    return () => {
      contextOptions?.forEach(() => {
        unregister(`inputs.${parentIndex}.options`)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreateOption = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const prevOptions = [...options]
    const nextOptions = [...prevOptions, options.push(1)]
    setOptions(nextOptions)
  }

  const handleDeleteOption = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    e.preventDefault()
    if (options.length > 1) {
      // remove from form context
      unregister(`inputs.${parentIndex}.options.${index}`)

      // then remove from our array of option fields
      const prevOptions = [...options]
      const nextOptions = [...prevOptions].slice(0, -1)
      return setOptions(nextOptions)
    }

    toast.error('Cant have less than 1 dropdown option')
  }

  return (
    <div className="mb-4">
      <FieldLabel
        label="Val"
        tooltip="vad vill du att valen i din dropdown ska vara?"
      />
      <div className="flex flex-col gap-2 pb-4">
        {options.map((_, index) => (
          <div
            key={index}
            className="flex items-center max-md:justify-between gap-4 max-md:gap-2 pl-4"
          >
            <span className="w-2">{index + 1}</span>
            <div className="rounded-full h-2 w-2 border border-gray-300"></div>
            <TextInput
              {...register(`inputs.${parentIndex}.options.${index}.value`, {
                required: true,
              })}
              color={
                errors?.inputs?.[parentIndex]?.options?.[index]?.value
                  ? 'failure'
                  : 'gray'
              }
              className="w-3/6 flex max-md:flex-1"
            />
            <button onClick={(e) => handleDeleteOption(e, index)}>
              <Close />
            </button>
          </div>
        ))}
      </div>

      <Button color="light" onClick={handleCreateOption} className="">
        Skapa fält
      </Button>
    </div>
  )
}

const RadioOptions = ({ parentIndex }: { parentIndex: number }) => {
  const {
    register,
    unregister,
    formState: { errors },
    watch,
  } = useFormContext<EventFormFields>()
  const values = watch()

  const contextOptions = values?.inputs?.[parentIndex]?.options
  const [options, setOptions] = useState<number[]>(
    Array.from(Array(contextOptions?.length ?? 1))
  )
  const [hydrated, setHydrated] = useState<boolean>(false)

  useEffect(() => {
    if (!hydrated) setHydrated(true)
  }, [hydrated])

  useEffect(() => {
    return () => {
      contextOptions?.forEach(() => {
        unregister(`inputs.${parentIndex}.options`)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreateOption = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const prevOptions = [...options]
    const nextOptions = [...prevOptions, options.push(1)]
    setOptions(nextOptions)
  }

  const handleDeleteOption = (
    e: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    e.preventDefault()
    if (options.length > 1) {
      // remove from form context
      unregister(`inputs.${parentIndex}.options.${index}`)

      // then remove from our array of option fields
      const prevOptions = [...options]
      const nextOptions = [...prevOptions].slice(0, -1)
      return setOptions(nextOptions)
    }

    toast.error('Cant have less than 1 dropdown option')
  }

  return (
    <div className="mb-4">
      <FieldLabel
        label="Val"
        tooltip="vad vill du att valen i din radiogrupp ska vara?"
      />
      <div className="flex flex-col gap-2 pb-4">
        {options.map((_, index) => (
          <div
            key={index}
            className="flex items-center max-md:justify-between gap-4 max-md:gap-2 pl-4"
          >
            <span className="w-2">{index + 1}</span>
            <div className="rounded-full h-2 w-2 border border-gray-300"></div>
            <TextInput
              {...register(`inputs.${parentIndex}.options.${index}.value`, {
                required: true,
              })}
              color={
                errors?.inputs?.[parentIndex]?.options?.[index]?.value
                  ? 'failure'
                  : 'gray'
              }
              className="w-3/6 flex max-md:flex-1"
            />
            <button onClick={(e) => handleDeleteOption(e, index)}>
              <Close />
            </button>
          </div>
        ))}
      </div>

      <Button color="light" onClick={handleCreateOption} className="">
        Skapa fält
      </Button>
    </div>
  )
}

const Form: FC<FormProps> = ({ onSubmit, data }) => {
  const { translate } = useTranslation()
  const [hydrated, setHydrated] = useState<boolean>(false)
  const [inputFields, setInputFields] = useState<Input[]>(
    data?.inputs ?? [templateField]
  )

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, isValid },
    watch,
  } = useFormContext<EventFormFields>()

  const values = watch()

  useFieldArray({ name: 'inputs', control })

  const submitDisabled = !isValid

  const submit = handleSubmit(onSubmit)

  const handleCreateInputField = useCallback(() => {
    setInputFields([...inputFields, { ...templateField, id: uuid() }])
  }, [inputFields])

  useEffect(() => {
    trigger()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setHydrated(true) //fix for react hydration
  }, [])

  if (!hydrated) return null //temp fix for react hydration

  return (
    <div className="flex flex-col flex-1 bg-white h-full p4 rounded-md shadow-md border-gray-100">
      <form
        className="flex flex-col h-full justify-between"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="flex flex-col h-full gap-4 p-8 max-md:p-2">
          <div className="flex flex-col gap-2">
            <div className="font-xl font-semibold mb-3">
              <span>{translate('event', 'datetime.label')}</span>
            </div>
            <div>
              <div className="mb-2 block">
                <Label value={translate('event', 'date.label')} />
              </div>

              <div className="pb-10">
                <Controller
                  control={control}
                  name="date"
                  render={({ field: { onChange } }) => (
                    <DatetimePicker onChange={onChange} />
                  )}
                />
              </div>
            </div>
          </div>
          <div className="font-xl font-semibold mt-3">
            <span>{translate('event', 'information.label')}</span>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value={translate('event', 'name.label')} />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder={translate('event', 'name.placeholder')}
              color={errors?.name && 'failure'}
              helperText={errors?.name?.message}
              {...register('name', {
                required: 'Får inte vara tomt',
              })}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="description"
                value={translate('event', 'description.label')}
              />
            </div>
            <TextArea
              id="title"
              rows={10}
              placeholder={translate('event', 'description.placeholder')}
              color={errors?.description && 'failure'}
              helperText={errors?.description?.message}
              {...register('description', {
                required: translate('validation', 'required'),
              })}
            />
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div className="font-xl font-semibold mb-3">
              <span>{translate('event', 'fields.header')}</span>
            </div>
            {inputFields.map((field: Input, index: number) => (
              <div key={field.id} className="flex w-full max-md:flex-col">
                <div className="flex flex-row justify-center items-center gap-2 h-fit px-4 py-2 max-md:flex-col max-md:pb-2 max-md:px-2">
                  <span className="text-center text-xl">{index + 1}</span>
                  <div className="rounded-full h-2 w-2 border border-gray-300"></div>
                </div>

                <div className=" w-full rounded-md p-4 shadow-lg border border-gray-100">
                  <div>
                    <div className="mb-4">
                      <FieldLabel
                        label={translate('event', 'fields.required.label')}
                        tooltip={translate('event', 'fields.required.tooltip')}
                      />
                      <div className="flex items-center gap-2">
                        <Checkbox {...register(`inputs.${index}.required`)} />
                        <Label
                          value={translate('common', 'required')}
                          className="text-red-500"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <FieldLabel
                        label={translate('event', 'fields.type.label')}
                        tooltip={translate('event', 'fields.type.tooltip')}
                      />
                      <Select
                        {...register(`inputs.${index}.type`, {
                          required: translate('validation', 'required'),
                        })}
                        color={errors?.inputs?.[index]?.type && 'failure'}
                      >
                        <option value={InputType.CHECKBOX}>
                          {translate('inputFields', 'checkbox')}
                        </option>
                        <option value={InputType.DROPDOWN}>
                          {translate('inputFields', 'dropdown')}
                        </option>
                        <option value={InputType.RADIOBUTTON}>
                          {translate('inputFields', 'radio')}
                        </option>
                        <option value={InputType.TEXTINPUT}>
                          {translate('inputFields', 'textInput')}
                        </option>
                        <option value={InputType.TEXTAREA}>
                          {translate('inputFields', 'textArea')}
                        </option>
                      </Select>
                    </div>

                    <div className="mb-4">
                      <FieldLabel
                        label={translate('event', 'fields.title.label')}
                        tooltip={translate('event', 'fields.title.tooltip')}
                      />
                      <TextInput
                        {...register(`inputs.${index}.title`, {
                          required: translate('validation', 'required'),
                        })}
                        placeholder={translate(
                          'event',
                          'fields.title.placeholder'
                        )}
                        helperText={errors?.inputs?.[index]?.title?.message}
                        color={errors?.inputs?.[index]?.title && 'failure'}
                      />
                    </div>

                    {values.inputs?.[index]?.type !== InputType.RADIOBUTTON && (
                      <div className="mb-4">
                        <FieldLabel
                          label={translate('event', 'fields.label.label')}
                          tooltip={translate('event', 'fields.title.tooltip')}
                        />
                        <TextInput
                          {...register(`inputs.${index}.label`, {
                            required: translate('validation', 'required'),
                          })}
                          placeholder={translate(
                            'event',
                            'fields.title.placeholder'
                          )}
                          helperText={errors?.inputs?.[index]?.label?.message}
                          color={errors?.inputs?.[index]?.label && 'failure'}
                        />
                      </div>
                    )}

                    {(values.inputs?.[index]?.type === InputType.TEXTINPUT ||
                      values.inputs?.[index]?.type === InputType.TEXTAREA) && (
                      <div className="mb-4">
                        <FieldLabel
                          label={translate('event', 'fields.placeholder.label')}
                          tooltip={translate(
                            'event',
                            'fields.placeholder.tooltip'
                          )}
                        />
                        <TextInput
                          {...register(`inputs.${index}.placeholder`, {
                            required: translate('validation', 'required'),
                          })}
                          placeholder={translate(
                            'event',
                            'fields.placeholder.placeholder'
                          )}
                          color={
                            errors?.inputs?.[index]?.placeholder && 'failure'
                          }
                          helperText={
                            errors?.inputs?.[index]?.placeholder?.message
                          }
                        />
                      </div>
                    )}

                    {values?.inputs?.[index]?.type === InputType.DROPDOWN && (
                      <DropdownOptions parentIndex={index} />
                    )}
                    {values?.inputs?.[index]?.type ===
                      InputType.RADIOBUTTON && (
                      <RadioOptions parentIndex={index} />
                    )}
                  </div>

                  <div className="flex flex-col gap-2 mt-20">
                    <Label
                      sizing="xl"
                      value={translate('common', 'event.fields.preview')}
                    />
                    {(() => {
                      switch (values.inputs?.[index]?.type) {
                        case 'CHECKBOX':
                          return (
                            <div className="flex flex-col gap-2">
                              <Label
                                className="h-4"
                                value={values?.inputs?.[index]?.title}
                              />
                              <div className="flex items-center gap-2 h-8">
                                <Checkbox disabled value="Checkbox" />
                                <Label
                                  value={values.inputs?.[index]?.label ?? ''}
                                />
                              </div>
                            </div>
                          )
                        case 'DROPDOWN':
                          return (
                            <div className="flex flex-col gap-2">
                              <Label
                                className="h-4"
                                value={values?.inputs?.[index]?.title}
                              />
                              <div className="flex flex-col gap-2">
                                <Dropdown
                                  color="light"
                                  label={
                                    values?.inputs?.[index]?.label ??
                                    values?.inputs?.[index]?.options[0].value
                                  }
                                >
                                  {values?.inputs?.[index]?.options?.map(
                                    (
                                      option: { value: string },
                                      optionIndex: number
                                    ) => {
                                      return (
                                        <Dropdown.Item
                                          key={`${option.value}-${optionIndex}`}
                                        >
                                          {option.value}
                                        </Dropdown.Item>
                                      )
                                    }
                                  )}
                                </Dropdown>
                              </div>
                            </div>
                          )

                        case 'RADIOBUTTON':
                          return (
                            <div className="flex flex-col gap-2">
                              <Label
                                className="h-4"
                                value={values?.inputs?.[index]?.title}
                              />
                              <div className="flex flex-col gap-2">
                                {values?.inputs?.[index]?.options?.map(
                                  (option: Option, optionIndex: number) => (
                                    <div
                                      key={option.id}
                                      className="flex items-center gap-2"
                                    >
                                      <Radio value={option.value} />
                                      <Label
                                        value={
                                          values.inputs?.[index]?.options?.[
                                            optionIndex
                                          ]?.value
                                        }
                                      />
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        case 'TEXTAREA':
                          return (
                            <div className="flex flex-col gap-2">
                              <Label
                                className="h-4"
                                sizing="lg"
                                value={values?.inputs?.[index]?.title}
                              />
                              <div className="flex flex-col gap-1">
                                <Label
                                  className="h-4"
                                  value={values?.inputs?.[index]?.label}
                                />
                                <TextArea
                                  rows={10}
                                  placeholder={
                                    values?.inputs?.[index]?.placeholder ?? ''
                                  }
                                />
                              </div>
                            </div>
                          )
                        case 'TEXTINPUT':
                          return (
                            <div className="flex flex-col">
                              <Label
                                className="h-6"
                                sizing="lg"
                                value={values?.inputs?.[index]?.title}
                              />
                              <div className="flex flex-col gap-1">
                                <Label
                                  className="h-5"
                                  value={values?.inputs?.[index]?.label}
                                />
                                <TextInput
                                  placeholder={
                                    values?.inputs?.[index]?.placeholder ?? ''
                                  }
                                />
                              </div>
                            </div>
                          )
                      }
                    })()}
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="rounded-full h-2 w-2 mt-4 border border-gray-300"></div>
              <Button
                color="light"
                className="flex w-6/12"
                onClick={handleCreateInputField}
              >
                {translate('common', 'createField')}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full p-4">
          <Button onClick={submit} disabled={submitDisabled} className="w-full">
            {translate('common', 'createEvent')}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
