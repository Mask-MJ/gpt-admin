import * as React from 'react'

// @see https://usehooks.com/useLockBodyScroll.
export function useLockBodyScroll() {
  React.useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])
}
