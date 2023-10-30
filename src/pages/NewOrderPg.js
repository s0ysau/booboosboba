import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ordersAPI from '../utilities/order-api'
import * as itemsAPI from '../utilities/item-api'
import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
import SideBar from '../components/SideBar'

export default function NewOrderPg ({ products }) {
  const [menuItem, setMenuItem] = useState([])
  const [cart, setCart] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getItems () {
      const items = await itemsAPI.getAll()
      setMenuItem(items)
    }
    getItems()
    async function getCart () {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, [])

  // event handlers
  // async function handleAddToOrder (itemId) {
  //   const updatedCart = ordersAPI.addItemToCart(itemId)
  //   setCart(updatedCart)
  // }

  const handleAddToOrder = (itemId, count) => {
    const updatedCart = { item: itemId, qty: count }
    setCart(updatedCart)
  }

  async function handleChangeQty (itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
    setCart(updatedCart)
  }

  // async function handleCheckout () {
  //   await ordersAPI.checkout()
  //   navigate('/order')
  // }

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