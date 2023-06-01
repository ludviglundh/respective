import { useEffect } from 'react'

// const useKeyDown = (key: string, callback: () => void) => {
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === key) {
//         callback()
//       }
//     }
//     document.addEventListener('keydown', handleKeyDown)

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown)
//     }
//   }, [key, callback])
// }

export enum KeyboardKey {
  escape = 'Escape',
  enter = 'Enter',
}

export const useKeyDown = (callback: () => void, keys: KeyboardKey[]) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onKeyDown = (event: KeyboardEvent) => {
    const wasAnyKeyPressed = keys.some((key) => event.key === key)

    if (wasAnyKeyPressed) {
      event.preventDefault()
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])
}

export default useKeyDown
