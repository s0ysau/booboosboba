import { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories, products, addOns, sweeetness, ice } from '../utilities/products-api'
import * as ordersAPI from '../utilities/order-api'
import * as itemsAPI from '../utilities/item-api'

export default function StartPg () {
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
      <h1>Welcome to Booboo's Boba!</h1>
      <Link to='/order'>
        <button>Click here to start your order</button>
      </Link>
    </>
  )
}
