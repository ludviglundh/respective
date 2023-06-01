'use client'

import Link from 'next/link'

const CreateNewBoard = () => {
  const handleCreateNewBoard = () => console.log('hello')

  return (
    <div className="flex flex-col gap-2 p-4 items-center justify-between shadow-md rounded-lg">
      <span>Welcome to Respective!</span>
      <b>
        <Link href={`/boards/create`}>Create a new board</Link>
      </b>
      <span>or</span>
      <b>
        <button>Sign in to access your saved boards</button>
      </b>
    </div>
  )
}

export default CreateNewBoard
