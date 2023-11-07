import { useEffect, useState, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
import SideBar from '../components/SideBar'
import { StateContext } from '../context/StateContext'

export default function NewOrderPg ({ products }) {
  const [cart, setCart] = useState("")
  const navigate = useNavigate()
  const [stateContext] = useContext(StateContext)
  const { initialOrder, setInitialOrder } = stateContext

  const getCart = async (_id) => {
    try {
      const response = await fetch(`/api/order/${_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      setCart(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCart()
  }, [])


  return (
    <>
      <p>New Order Page Component</p>
      <div>
        <Header />
        <section >
            <MenuDisplay
              products={products}
              
            />
          </section>
      </div>
    </>
  )
}

{/* <section className='grid grid-cols-3 gap-4'>
<div className='col-span-1'>
  <SideBar categories={categories} />
</div>
<section className='col-span-2'>
  <MenuDisplay
    products={products}
  handleAddToOrder={handleAddToOrder}
  />
</section>
</section> */}