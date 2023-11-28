import { useContext, useEffect } from 'react'
import { ShopContext } from '../context/StateContext'
import { useNavigate } from 'react-router-dom'

export default function OrderCompletePg() {
  const { cartItems, getSubtotalAmount, name, phoneNum } = useContext(ShopContext)
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
    <section>
      <h1>Order Complete</h1>
      <p>Thank you for your order, {name}! Your order will be ready in 15 minutes.</p>
      <p>You will be contacted via {phoneNum}</p>
    </section>
  )
}