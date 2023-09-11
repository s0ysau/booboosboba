import { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  const adding = () => {
    setCount(count + 1)
  }

  const subtracting = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='flex flex-row gap-x-8'>
      <button
        onClick={subtracting}
        className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
      >-
      </button>
      <div>{count}</div>
      <button
        onClick={adding}
        className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
      >+
      </button>
    </div>
  )
}
