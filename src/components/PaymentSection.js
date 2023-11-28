import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'
import { products } from '../utilities/products-api'

import ContShopBtn from './ContShopBtn'
import OrderSummaryItem from './OrderSummaryItem'
import OrderCompletePg from '../pages/OrderCompletePg'

export default function PaymentSection({ setCheckOut }) {
  const navigate = useNavigate()
  const { cartItems, getSubtotalAmount, name, setName, phoneNum, setPhoneNum, horizontalLine } = useContext(ShopContext)
  const SubtotalAmount = getSubtotalAmount()


  const digitalpayment = (evt) => {
    evt.preventDefault()
    const formData = {
      name: name,
      phoneNum: phoneNum,
    }

    if (name == null || name == "" || phoneNum == null || phoneNum == "") {
      alert('Please fill out the required fields.')
    } else {
      navigate('/complete')
    }
  }

  return (
    <section style={
      {
        backgroundColor: 'white',
        padding: '2rem',
      }
    }>
      <section className='flex flex-nowrap justify-between py-3'>
        <button onClick={() => setCheckOut(false)} className='rounded-full py-1 px-3 bg-black text-white'>	&lt; Back To Cart</button>
        <ContShopBtn />
      </section>

      <section className='py-3'>
        <p>Enter Contact Information</p>
        <label>
          Name:
          <input type='text' placeholder='Name*' value={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={evt => setName(evt.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type='text' placeholder='Phone Number*' value={phoneNum} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={evt => setPhoneNum(evt.target.value)} />
        </label>
        <p className='text-red-700 italic'>* Required</p>
      </section>
      <h1><b className='text-xl'>Order Summary</b></h1>
      <hr style={horizontalLine} />
      <div>
        {
          products.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <OrderSummaryItem key={product.id} product={product} />
            }
          })
        }
      </div>
      <hr style={horizontalLine} />
      <p className='flex justify-between py-1'><p>Subtotal:&nbsp;</p><p> &nbsp; ${SubtotalAmount}.00</p></p>
      <p className='flex justify-between py-1'><p>Tax:&nbsp;</p> <p> &nbsp; ${(SubtotalAmount * 0.07).toFixed(2)}</p></p>
      <hr style={horizontalLine} />
      <p className='flex justify-between pt-1'><b>Order Total:</b>&nbsp; <b>&nbsp; ${(SubtotalAmount * 1.07).toFixed(2)}</b></p>


      <p className='text-lg pt-5'>Ways to pay</p>
      <section className='flex flex-nowrap justify-around py-3'>
        <button onClick={digitalpayment}>
          <img src={process.env.PUBLIC_URL + 'images/creditcardbtn.png'} alt='creditcard' className='w-35 h-10 m-2' />
        </button>
        <button onClick={digitalpayment}>
          <img src={process.env.PUBLIC_URL + 'images/applepaybtn.png'} alt='applepay' className='w-30 h-10 m-2' />
        </button>
        <button onClick={digitalpayment}>
          <img src={process.env.PUBLIC_URL + 'images/googlepaybtn.png'} alt='googlepay' className='w-30 h-10 m-2' />
        </button>
        <button onClick={digitalpayment}>
          <img src={process.env.PUBLIC_URL + 'images/paypalbtn.png'} alt='paypal' className='w-30 h-10 m-2' />
        </button>
      </section>

    </section>
  )
}
