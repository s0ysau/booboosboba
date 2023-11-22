import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'

export default function StartOverBtn ({ products }) {
  const { cartItems, emptyCart } = useContext(ShopContext)
  const navigate = useNavigate()

  // const handleStartOrder = async () => {
  //   try {
  //     await fetch(`/api/order/${cart.Id}`,
  //       {
  //         method: 'DELETE',
  //         headers: { 'Content-Type': 'application/json' }
  //       })
  //     // setOrder(!order)
  //   } catch (error) {
  //     console.error(error)
  //   }
  //   navigate('/')
  // }
  const handleCancelOrder = () => {
    emptyCart()
    navigate('/')
  }

  return (
    <>
      <button
        onClick={() =>
          handleCancelOrder()
        }
      >Start Over
      </button>
    </>
  )
}
