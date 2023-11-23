import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal ({ children }) {
  const elRef = useRef(null)

  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)
    // removes child from the DOM
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}
