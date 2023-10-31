import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPg () {
  const [order, setOrder] = useState({
    itemIds: null,
    qty: 0
  })
  const navigate = useNavigate()


  const handleStartOrder =  async () => {
    try {
      const response = await fetch(`/api/order/`, 
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          itemIds: [],
          qty: 1
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
      <button onClick={handleStartOrder}>Click here to start your order</button>
    </>
  )
}
