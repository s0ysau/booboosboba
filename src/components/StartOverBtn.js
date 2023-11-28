import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'

export default function StartOverBtn () {
  const { emptyCart, name, setName, phoneNum, setPhoneNum } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleCancelOrder = () => {
    emptyCart()
    setName(null)
    setPhoneNum(null)
    navigate('/')
  }

  return (
    <button onClick={() => handleCancelOrder()}
    className='rounded-full p-2 bg-red-600 text-white'>Start Over</button>
  )
}
