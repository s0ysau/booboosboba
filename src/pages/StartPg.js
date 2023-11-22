import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPg () {
  // const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  // const handleStartOrder = async () => {
  //   try {
  //     const response = await fetch('/api/order/',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           customer: null,
  //           lineItems: [],
  //           isPaid: false
  //         })
  //       })
  //     const data = await response.json()
  //     setOrder(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  //   navigate('/order')
  // }

  return (
    <>
      <h1>Welcome to Booboo's Boba!</h1>
      <button
        onClick={() => navigate('/order')}
      >
        Click here to start your order
      </button>
    </>
  )
}
