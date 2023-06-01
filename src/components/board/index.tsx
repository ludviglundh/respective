'use client'

import { FC, useCallback, useState } from 'react'
import { Card as PrismaCard, Column as PrismaColumn } from '@prisma/client'
import { CreateCardFormFields } from 'components/Card/CreateCard'
import { toast } from 'react-hot-toast'
import Column from './Column'

export interface ColumnType extends PrismaColumn {
  cards: PrismaCard[]
}

export interface BoardData {
  id: string
  name: string
  description?: string
  inviteLink: string
  columns: ColumnType[]
}

interface BoardProps {
  data: BoardData
  getBoardRequest: (id: string) => Promise<{ board: BoardData; status: number }>
}

const BoardComponent: FC<BoardProps> = ({
  data: initData,
  getBoardRequest,
}) => {
  const [data, setData] = useState<BoardData>(initData)

  const refreshData = useCallback(async () => {
    const req = getBoardRequest(data.id)

    toast.promise(req, {
      loading: 'Saving board...',
      success: 'Board refreshed!',
      error: 'Could not refresh board',
    })

    const { status, board } = await req

    setData(board)

    return { status, board }
  }, [data.id, getBoardRequest])

  const handleCreateCard = async (
    { card }: CreateCardFormFields,
    columnId: string
  ) => {
    const req = fetch('/api/cards/create', {
      method: 'POST',
      body: JSON.stringify({
        ...card,
        columnId,
      }),
    })

    await toast.promise(req, {
      loading: 'Creating card',
      success: 'Card created',
      error: 'Could not create card',
    })

    refreshData()
  }

  return (
    <div className="w-9/12 h-screen flex items-center justify-center py-20">
      <div className="container h-full flex flex-col justify-start border-2 p-8 pt-0 gap-2 bg-white rounded-lg">
        <div className="w-full border-b-2 flex flex-col gap-2 justify-center items-center h-fit p-4 pt-8">
          <span className="font-semibold flex text-center text-2xl">
            {data.name}
          </span>
          <span>{data.description}</span>
        </div>

        <div className="w-full h-full flex flex-1 flex-row items-center justify-center flex-wrap gap-2 overflow-hidden">
          {data.columns.map((column) => (
            <Column
              key={column.id}
              data={column}
              onCreateCard={handleCreateCard}
              refreshData={refreshData}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoardComponent
