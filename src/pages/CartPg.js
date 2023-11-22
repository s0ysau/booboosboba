import { useContext } from 'react'
import { products } from '../utilities/products-api'
import { ShopContext } from '../context/StateContext'
import BackToMenuBtn from '../components/BackToMenuBtn'
import CartItem from '../components/CartItem'
import StartOverBtn from '../components/StartOverBtn'
import CheckoutBtn from '../components/CheckoutBtn'
import ContShopBtn from '../components/ContShopBtn'

export default function CartPg () {
  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  return (
    <>
      <h1>Your Cart</h1>
      <div>
        {
          products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} product={product} />
            }
          })
        }
      </div>
      {
        totalAmount > 0
          ? (
            <div>
              <p>Subtotal: ${totalAmount}</p>
              <StartOverBtn products={products} />
              <ContShopBtn />
              <CheckoutBtn />
            </div>

            )
          : (
            <div>
              <BackToMenuBtn />
              <h1>Your cart is empty</h1>
            </div>
            )
      }

    </>
  )
}
