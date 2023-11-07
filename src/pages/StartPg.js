import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../context/StateContext'

export default function StartPg () {
  const [order, setOrder] = useState(null)
  const navigate = useNavigate()
  const [stateContext] = useContext(StateContext)
  const { initialOrder, setInitialOrder } = stateContext


  const handleStartOrder =  async () => {
    try {
      const response = await fetch(`/api/order/`, 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: null,
          lineItems: [],
          isPaid: false
        })
      })
      const data = await response.json()
      setOrder(data)
    } catch (error) {
      console.error(error)
    }
    navigate(`/order`)
  }

  return (
    <>
      <h1>Welcome to Booboo's Boba!</h1>
      <button 
      onClick={handleStartOrder}>
      Click here to start your order
      </button>
    </>
  )
}
