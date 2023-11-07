import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import BackToMenuBtn from '../components/BackToMenuBtn'

export default function CartPg ({ cart, products, handleChangeQty }) {
  const [order, setOrder] = useState(null)

  const getOrder = async (id) => {
    try {
      const response = await fetch(`api/order/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      setOrder(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])

  return (
    <>
      <BackToMenuBtn />
      <h1>Cart Page</h1>
      <p>{order}</p>
    </>
  )
}
