import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import BackToMenuBtn from '../components/BackToMenuBtn'
import { products } from '../utilities/products-api'
import { ShopContext } from '../context/StateContext'
import CartItem from '../components/CartItem'

export default function CartPg () {
  const {cartItems} = useContext(ShopContext)
  // const [order, setOrder] = useState(null)

  // const getOrder = async (id) => {
  //   try {
  //     const response = await fetch(`api/cart/${id}`, {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //     const data = await response.json()
  //     setOrder(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getOrder()
  // }, [])

  return (
    <>
      <BackToMenuBtn />
      <h1>Cart Page</h1>
      <div>
        {
          products.map((product) => {
            if (cartItems[product.id] !== 0){
              return <CartItem key={product.id} product={product} />
            } 
          }
          
          )
        } 
      </div>
    </>
  )
}
