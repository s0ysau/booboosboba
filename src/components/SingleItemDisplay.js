import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import AddToCartBtn from './AddToCartBtn'
import BackToMenuBtn from './BackToMenuBtn'
import { ShopContext } from '../context/StateContext'
import AddOns from './AddOns'
import SweetnessLvl from './SweetnessLvl'
import IceLvl from './IceLvl'

export default function SingleItemDisplay() {
  const { addToCart } = useContext(ShopContext)
  const location = useLocation()
  const { value } = location.state
  const navigate = useNavigate()

  const handleAddToCart = async () => {
    addToCart(value.id)
    navigate('/order')
  }

  return (
    <section className='p-3'>
      <BackToMenuBtn />
      <section className='pt-10'>
        <div key={value.id} className='flex flex-row gap-x-4 justify-center'>
          <section className='basis-1/4 '>
            <img src={process.env.PUBLIC_URL + `${value.img}`} alt={value.name} className='w-[300px] h-[400px]' />
          </section>
          <section className='basis-1/2'>
            <h1 className='font-bold text-4xl pb-4'><b>{value.name}</b></h1>
            <p className='py-3'>{value.description}</p>
            <h2 className='text-xl py-4'>${value.price}.00</h2>
            <section className='flex flex-row justify-center '>
              <SweetnessLvl />
              <IceLvl />
              <AddOns />
            </section>
            <button
              onClick={() => handleAddToCart()}
              className='rounded-full bg-sky-300 mt-5 px-[10px] py-[5px]'
            >Add To Cart
            </button>
          </section>
        </div>
      </section>
    </section>
  )
}
