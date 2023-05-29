import { useEffect } from 'react'

const useKeyDown = (key: string, callback: () => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === key) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, callback])
}

export default useKeyDown
