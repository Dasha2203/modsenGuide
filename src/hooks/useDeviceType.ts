import { useEffect, useState } from 'react'

export function useDeviceType(windowWidth: number = 768) {
  const [isMobile, setMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < windowWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile }
}