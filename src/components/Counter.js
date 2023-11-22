import { useContext } from 'react'
import { ShopContext } from '../context/StateContext'

export default function Counter ({ product }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)
  const { id } = product

  return (
    <div className='flex flex-row gap-x-8'>
      <button
        onClick={() => removeFromCart(id)}
        className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
      >-
      </button>
      <input
        value={cartItems[id]}
        className='w-7 h-7 text-center'
      />
      <button
        onClick={() => addToCart(id)}
        className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
      >+
      </button>
    </div>
  )
}
