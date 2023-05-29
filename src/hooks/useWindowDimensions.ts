import { useEffect, useState } from 'react'
import { DEVICE_SIZES } from 'utils/constants'

interface DimensionState {
  device: 'mobile' | 'desktop' | 'tablet'
  rotation: 'landscape' | 'portrait'
  width: number
  height: number
}

const getDevice = (width: number): 'mobile' | 'tablet' | 'desktop' => {
  if (width < DEVICE_SIZES.tablet) return 'mobile'
  if (width < DEVICE_SIZES.desktop) return 'tablet'
  return 'desktop'
}

const getWindowDimensions = (): DimensionState => {
  const { innerWidth: width, innerHeight: height } = window
  const rotation = width > height ? 'landscape' : 'portrait'

  const device = getDevice(width)
  return {
    device,
    rotation,
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<DimensionState>({
    device: 'mobile',
    rotation: 'portrait',
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions(getWindowDimensions())
    }
  }, [])

  useEffect(() => {
    function handleResize() {
      if (typeof window !== 'undefined') {
        setWindowDimensions(getWindowDimensions())
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
