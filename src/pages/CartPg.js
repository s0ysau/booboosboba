import { useContext, useState } from 'react'
import { products } from '../utilities/products-api'
import { ShopContext } from '../context/StateContext'
import BackToMenuBtn from '../components/BackToMenuBtn'
import CartItem from '../components/CartItem'
import StartOverBtn from '../components/StartOverBtn'
// import CheckoutBtn from '../components/CheckoutBtn'
import ContShopBtn from '../components/ContShopBtn'
import Modal from '../components/Modal'
import PaymentSection from '../components/PaymentSection'

export default function CartPg() {
  const [checkOut, setCheckOut] = useState(false)
  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()

  return (
    <section>
      <h1 className='flex justify-center py-5'>Your Cart</h1>
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
            <div className='py-3'>
              <p className='flex justify-center'>Subtotal:&nbsp; <b>&nbsp; ${totalAmount}.00</b></p>
              <div className='flex flex-nowrap justify-evenly py-5'>
                <StartOverBtn />
                <ContShopBtn />
                <button onClick={() => setCheckOut(true)} className='rounded-full bg-sky-300 px-[10px] py-[5px]'>Checkout</button>
              </div>
            </div>

          )
          : (
            <div>
              <BackToMenuBtn />
              <h1>Your cart is empty</h1>
            </div>
          )
      }
      <div>
      {
        checkOut
          ? (
            <Modal>
              <PaymentSection setCheckOut={setCheckOut}/>
            </Modal>
          ) : null
      }
      </div>
    </section>
  )
}
