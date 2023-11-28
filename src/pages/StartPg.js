import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'

export default function StartPg () {
  const { emptyCart, setName, setPhoneNum } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleReset = () => {
    emptyCart()
    setName(null)
    setPhoneNum(null)
    navigate('/order')
  }

  return (
    <section className='flex flex-col justify-center items-center'>
      <h1>Welcome to Booboo's Boba!</h1>
      <button
        onClick={() => handleReset()}
      >
        Click here to start your order
      </button>
    </section>
  )
}
