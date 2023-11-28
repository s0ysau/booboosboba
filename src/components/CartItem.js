import React from 'react'
import Counter from './Counter'

export default function CartItem ({ product }) {
  return (
    <div className='flex justify-evenly border rounded-xl drop-shadow-xl items-center w-[1050px] py-3 my-3'>
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} className='w-[100px] h-[100px]' />
      <h1 className='w-[180px]'>{product.name}</h1>
      <Counter product={product} />
      <p>${product.price}.00</p>
    </div>
  )
}
