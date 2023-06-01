import { FC, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface CreateCardProps {
  onCreateCard: (data: CreateCardFormFields) => void
}

export interface CreateCardFormFields {
  card: {
    content: string
  }
}

export const CreateCard: FC<CreateCardProps> = ({ onCreateCard }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const { register, unregister, handleSubmit, reset } =
    useForm<CreateCardFormFields>({
      mode: 'onTouched',
    })

  const submit = handleSubmit(onCreateCard)

  const handleAddCardClick = () => {
    setVisible(true)
  }

  const handleCreateCard = async (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault()

      await submit()

      reset({
        card: {
          content: '',
        },
      })
    }
  }

  useEffect(() => {
    if (!visible) return

    const clickOutsideEvent = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setVisible(false)
        unregister('card.content')
      }
    }

    document.addEventListener('mousedown', clickOutsideEvent)

    return () => {
      document.removeEventListener('mousedown', clickOutsideEvent)
    }
  }, [unregister, visible])

  return (
    <div ref={ref} className="w-full flex flex-initial flex-col items-center">
      <button onClick={handleAddCardClick}>Add Card</button>
      {visible && (
        <div className="w-full h-20 border-2 rounded-lg">
          <textarea
            {...register('card.content')}
            className="w-full h-full p-2 focus:outline-none focus:shadow-md transition-shadow rounded-md"
            onKeyDown={handleCreateCard}
          />
        </div>
      )}
    </div>
  )
}
