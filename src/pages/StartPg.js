import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function StartPg () {
  const [order, setOrder] = useState({
    item: "",
    qty: 1
  })

  const handleStartOrder =  async () => {
    try {
      const response = await fetch(`/api/order/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...order})
      })
      const data = await response.json()
      setOrder(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1>Welcome to Booboo's Boba!</h1>
      <Link 
      to='/order'
      onClick={handleStartOrder}>
        <button>Click here to start your order</button>
      </Link>
    </>
  )
}
