import Board, { BoardData } from 'components/board'

async function getData(
  id: string
): Promise<{ board: BoardData; status: number }> {
  'use server'

  const env = 'http://localhost:3000'
  const res = await fetch(`${env}/api/boards/${id}`, {
    method: 'GET',
  })

  const board = await res.json()
  const status = res.status

  return { board, status }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { board } = await getData(params.slug)

  return <Board data={board} getBoardRequest={getData} />
}
