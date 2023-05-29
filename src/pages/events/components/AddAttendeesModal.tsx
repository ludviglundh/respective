import type { FC } from 'react'
import type { ContactFormFields } from '../[eventId]'
import type { ExplicitAny } from '@types'
import { Button } from 'components/Button'
import { Label } from 'components/Label'
import { TextInput } from 'components/TextInput'
import { useFormContext } from 'react-hook-form'
import Modal from 'components/Modal'
import useTranslation from 'hooks/useTranslation'

interface AddAttendeesModalProps {
  open: boolean
  onClose: () => void
  onFooterButtonClick: (data: ExplicitAny) => void
}

const AddAttendeesModal: FC<AddAttendeesModalProps> = ({
  open,
  onFooterButtonClick,
  onClose,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext<ContactFormFields>()
  const { translate } = useTranslation()
  const submit = handleSubmit(onFooterButtonClick)

  return (
    <Modal open={open} onClose={onClose} dismissible>
      <form onSubmit={onFooterButtonClick}>
        <Modal.Header>Lägg till deltagare</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <Label value={translate('common', 'name')} />
              <TextInput
                {...register('name', { required: true })}
                color={errors?.name && 'failure'}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <Label value={translate('common', 'email')} />
              <TextInput
                {...register('email', { required: true })}
                color={errors?.email && 'failure'}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <Button onClick={submit} className="w-full">
            {translate('common', 'add')}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default AddAttendeesModal
