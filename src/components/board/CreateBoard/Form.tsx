import { useFieldArray, useForm } from 'react-hook-form'

import { Board, Column } from '@prisma/client'
import TextInput from 'components/TextInput'
import Select from 'components/Select'
import { ChangeEvent, FC, useCallback } from 'react'
import { uuid } from 'utils/uuid'

export interface FormFields extends Board {
  columns: Column[]
}

interface FormProps {
  onSubmit: (data: FormFields) => void
}

const templateColumn = {
  id: uuid(),
  title: '',
  description: '',
  boardId: uuid(),
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    watch,
  } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues: {
      columns: [templateColumn],
    },
  })

  console.log('errors', errors)

  const submit = handleSubmit(onSubmit)

  const { fields, append, replace } = useFieldArray({
    name: 'columns',
    control,
  })

  const handleCreateColumns = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = Number(event.target.value)
      const currentColumnsCount = fields.length

      if (value === currentColumnsCount) return

      const columnsToCreate = Array.from(
        { length: Math.abs(value - currentColumnsCount) },
        () => ({
          ...templateColumn,
          id: uuid(),
          boardId: uuid(),
        })
      )

      if (currentColumnsCount === 0 || value > currentColumnsCount) {
        append(columnsToCreate)
      } else {
        const nextFields = fields.slice(0, value)
        replace(nextFields)
      }
    },
    [fields, append, replace]
  )

  return (
    <form
      className="flex flex-col items-center justify-between gap-4 shadow-lg p-8 rounded-lg container"
      onSubmit={submit}
    >
      <div className="w-full mb-8 flex flex-col gap-2">
        <TextInput
          title="Name"
          color={errors?.name && 'failure'}
          helperText={errors?.name?.message}
          {...register('name', { required: 'Required' })}
        />

        <TextInput
          title="Description"
          {...register('description')}
          color={errors?.description && 'failure'}
        />
      </div>

      <Select title="Columns" onChange={handleCreateColumns}>
        {Array.from(Array(11).keys())
          .filter((item) => item !== 0)
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </Select>

      <div className="w-full flex justify-start items-start gap-4 flex-row flex-wrap">
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="flex grow shrink-0 flex-col gap-4 border border-2 px-4 pb-8 pt-2 rounded-lg items-center justify-center bg-white"
          >
            <TextInput
              title="Title"
              color={errors?.columns?.[index]?.title && 'failure'}
              helperText={errors?.columns?.[index]?.title?.message}
              {...register(`columns.${index}.title`, { required: 'Required' })}
            />
            <TextInput
              title="Description"
              color={errors?.columns?.[index]?.description && 'failure'}
              helperText={errors?.columns?.[index]?.description?.message}
              {...register(`columns.${index}.description`)}
            />
          </div>
        ))}
      </div>
      <button onClick={submit}>Create Board</button>
    </form>
  )
}

export default Form
