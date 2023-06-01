import { FC, useCallback } from 'react'
import { Card as PrismaCard, Column as PrismaColumn } from '@prisma/client'
import { CreateCard, CreateCardFormFields } from 'components/Card/CreateCard'
import { BoardData } from '..'
import Card from '../Card'

export interface ColumnType extends PrismaColumn {
  cards: PrismaCard[]
}

interface ColumnProps {
  data: ColumnType
  onCreateCard: (card: CreateCardFormFields, columnId: string) => void
  refreshData: () => Promise<{
    status: number
    board: BoardData
  }>
}

const Column: FC<ColumnProps> = ({ data, onCreateCard, refreshData }) => {
  const handleCreateCard = useCallback(
    (card: CreateCardFormFields) => {
      onCreateCard(card, data.id)
    },
    [data.id, onCreateCard]
  )

  return (
    <div className="flex flex-1 grow shrink-0 h-full flex-col gap-4 border border-2 px-4 pb-8 pt-2 rounded-lg items-center justify-start bg-white overflow-y-auto scrollbar-thin">
      {data.title}
      <CreateCard onCreateCard={handleCreateCard} />

      <div className="w-full flex flex-col gap-2">
        {data.cards?.map((card) => (
          <Card key={card.id} data={card} refreshData={refreshData} />
        ))}
      </div>
    </div>
  )
}

export default Column
