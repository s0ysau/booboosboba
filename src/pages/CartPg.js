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

export default function CartPg () {
  const [checkOut, setCheckOut] = useState(false)
  const { cartItems, getSubtotalAmount } = useContext(ShopContext)
  const subTotalAmount = getSubtotalAmount()

  return (
    <section className='px-5'>
      <h1 className='flex justify-center py-5 text-3xl'>Your Shopping Cart</h1>
      <div className='flex flex-col justify-center items-center'>
        {
          products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} product={product} />
            }
          })
        }
      </div>
      {
        subTotalAmount > 0
          ? (
            <div className='py-3'>
              <p className='flex justify-evenly py-1'><p>Subtotal:&nbsp;</p> <b className='text-2xl'>&nbsp; ${subTotalAmount}.00</b></p>
              <p className='flex justify-around py-1 text-slate-700 text-xs'>Taxes and Total will be calculated at checkout.</p>
              <div className='flex flex-nowrap justify-evenly py-20'>
                <StartOverBtn />
                <ContShopBtn />
                <button onClick={() => setCheckOut(true)} className='rounded-full bg-green-500 px-[10px] py-[5px]'>Checkout</button>
              </div>
            </div>

            )
          : (
            <section>
              <BackToMenuBtn />
              <div className='flex justify-center'>
                <h1 className='text-lg text-red-600'>Your cart is empty</h1>
              </div>
            </section>
            )
      }
      <div>
        {
        checkOut
          ? (
            <Modal>
              <PaymentSection setCheckOut={setCheckOut} />
            </Modal>
            )
          : null
      }
      </div>
    </section>
  )
}
