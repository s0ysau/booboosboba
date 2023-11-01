import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StateContext } from '../context/StateContext'
import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
import SideBar from '../components/SideBar'

export default function NewOrderPg ({ products }) {
  const navigate = useNavigate()
  const [ order, setOrder ] = useState(null)

  const getOrder = async () => {
    try {
      const response = await fetch(`/api/order/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      setOrder(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])

  console.log({order})

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