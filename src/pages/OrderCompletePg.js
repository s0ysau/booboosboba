import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/StateContext'
import { useNavigate } from 'react-router-dom'

export default function OrderCompletePg() {
  const { name, phoneNum } = useContext(ShopContext)
  const navigate = useNavigate()
  
  let i = 0

  function timer () {
    const tt = setInterval(() => {
      i++
      if (i === 15) {
        clearInterval(tt)
        navigate('/')
      }
    }, 1000)
  }

  useEffect(() => {
    timer()
  } , [])

  return (
    <section className='flex flex-col justify-center items-center py-5'>
      <h1 className='text-6xl font-bold py-14'>We have received your order!</h1>
      <p className='py-2 text-lg'>Thank you for your order, {name}!</p>
      <p className='py-2'>We will contact you when your order is ready!</p>
      <p className='py-2'>Your receipt will be sent to {phoneNum}</p>
    </section>
  )
}