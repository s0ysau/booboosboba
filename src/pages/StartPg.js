import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'

export default function StartPg() {
  const { emptyCart, setName, setPhoneNum } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleReset = () => {
    emptyCart()
    setName(null)
    setPhoneNum(null)
    navigate('/order')
  }

  return (
    <section className="bg-[url('../public/images/boba_wallpaper.jpeg')] h-screen">
      <div className='flex flex-col items-center'>
        <h1 className='text-8xl pt-10 font-script'>Welcome to Booboo's Boba!</h1>
        <button
        className=' rounded-full bg-white font-black my-20 px-[10px] py-[5px] text-3xl'
          onClick={() => handleReset()}
        >
          Click here to start your order
        </button>
      </div>
    </section>
  )
}
