import { FC, useCallback } from 'react'
import { Card as PrismaCard } from '@prisma/client'
import { BoardData } from '..'
import { ThumbUp, Trash } from 'components/Icon'

interface CardProps {
  data: PrismaCard
  refreshData: () => Promise<{ status: number; board: BoardData }>
}

const Card: FC<CardProps> = ({ data, refreshData }) => {
  const handleUpvote = useCallback(async () => {
    const res = await fetch('/api/cards/upvote', {
      method: 'POST',
      body: JSON.stringify({
        id: data.id,
      }),
    })

    if (res.status === 200) refreshData()
  }, [data.id, refreshData])

  const handleDownvote = useCallback(async () => {
    const res = await fetch('/api/cards/downvote', {
      method: 'POST',
      body: JSON.stringify({
        id: data.id,
      }),
    })

    if (res.status === 200) refreshData()
  }, [data.id, refreshData])

  const handleDelete = useCallback(async () => {
    const res = await fetch('/api/cards/delete', {
      method: 'POST',
      body: JSON.stringify({
        id: data.id,
      }),
    })

    if (res.status === 200) refreshData()
  }, [data.id, refreshData])

  return (
    <div className="w-full border-2 rounded-lg max-h-fit min-h-min p-4 flex shrink-0 relative hover:shadow-md transition-shadow rounded-md">
      <div className="flex flex-col h-full w-full gap-2 text-zinc-800">
        <span>{data.content}</span>

        <div className="flex w-full justify-between items-center">
          <div className="w-fit flex gap-2 px-4 py-1 border-2 rounded-lg shadow-sm stroke-blue-400 text-blue-400 border-blue-200">
            <button onClick={handleUpvote}>
              <ThumbUp className="h-5 w-5 cursor-pointer stroke-blue-400 hover:scale-110 transition transform duration-y" />
            </button>
            <button onClick={handleDownvote}>
              <ThumbUp className="rotate-180 h-5 w-5 cursor-pointer stroke-red-400 hover:scale-110 transition transform duration-y" />
            </button>
            <span className="cursor-default">{data.votes}</span>
          </div>

          <button onClick={handleDelete}>
            <Trash className="w-5 h-5 stroke-orange-400" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
