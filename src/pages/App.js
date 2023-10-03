import { useEffect, useState, useRef } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { categories, products, addOns, sweeetness, ice } from '../utilities/products-api'
import * as ordersAPI from '../utilities/order-api'
import * as itemsAPI from '../utilities/item-api'
import StartPg from './StartPg'
import NewOrderPg from './NewOrderPg'
import SingleItemDisplay from '../components/SingleItemDisplay'
import CategoryPg from './CategoryPg'
import CartPg from './CartPg'
import './App.css'

export default function App () {
  const [menuItem, setMenuItem] = useState([])
  const [cart, setCart] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function getItems () {
      const items = await itemsAPI.getAll()
      setMenuItem(items)
    }
    async function getCart () {
      const cart = await ordersAPI.getCart()
      setCart(cart)
    }
    getCart()
  }, [])

  // event handlers 
  async function handleAddToOrder (itemId) {
    const updatedCart = ordersAPI.addItemToCart(itemId)
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
      <Routes>
        <Route path='/' element={<StartPg />} />
        <Route path='/order' element={<NewOrderPg products={products} categories={categories} />} />
        <Route path='/order/cart' element={<CartPg products={products} order={cart} handleChangeQty={handleChangeQty}/>} />
        {/* <Route path='/category/:params' element={<CategoryPg products={products} categories={categories} />} /> */}
        <Route path='/:params' element={<SingleItemDisplay products={products} handleAddToOrder={handleAddToOrder}/>} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}
