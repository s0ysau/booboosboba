import React from 'react'

export default function CartItem ({ product }) {
  return (
    <div className='flex flex-nowrap justify-between items-center py-3'>
      <h1>{product.name}</h1>
      <p>${product.price}.00</p>
    </div>
  )
}
