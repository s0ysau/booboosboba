import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  const adding = () => {
    setCount(count + 1)
  }

  const subtracting = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <button
        onClick={subtracting}
      >-
      </button>
      <div>{count}</div>
      <button
        onClick={adding}
      >+
      </button>
    </>
  )
}
