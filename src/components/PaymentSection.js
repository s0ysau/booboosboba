import { useContext, useState } from 'react'
import { ShopContext } from '../context/StateContext'
import ContShopBtn from './ContShopBtn'



export default function PaymentSection({setCheckOut}) {
  const { cartItems, getTotalAmount, name, setName, phoneNum, setPhoneNum } = useContext(ShopContext)
  const totalAmount = getTotalAmount()


  const digitalpayment = (evt) => {
    evt.preventDefault()
    const formData = {
      name: name,
      phoneNum: phoneNum,
    }
    if (name !== null && phoneNum !== null) {
    alert(`Thank you for your order, ${name}! Your order will be ready in 15 minutes.`)
  } else {
    alert('Please fill out the required fields.')
  }
}

  return (
    <section style={
      {backgroundColor: 'white',
      padding: '2rem',
      }
      }>
      {/* <section className='flex justify-items-end'>
        <button className='cursor-pointer ' onClick={() => setCheckOut(false)}><img src={process.env.PUBLIC_URL + 'images/black-X.png'} alt='black-X' className='w-5 h-5 m-2' /></button>
      </section> */}
      <button onClick={() => setCheckOut(false)} className='rounded-full p-2 bg-black text-white'>	&lt; Back To Cart</button>
      <ContShopBtn />
      <p>Ways to pay</p>
      <button>Debit/Credit Card</button>
      <button onClick={digitalpayment}>Apple Pay</button>
      <button onClick={digitalpayment}>Google Pay</button>
      <button onClick={digitalpayment}>Paypal</button>

      <p className='text-red-700 italic'>* Required</p>
      <label>
        Name: 
        <input type='text' placeholder='Name*' value={name} defaultValue={null}
        onChange={evt => setName(evt.target.value)}/>
      </label>
      <label>
        Phone Number:
      <input type='text' placeholder='Phone Number*' value={phoneNum} defaultValue={null}
      onChange={evt => setPhoneNum(evt.target.value)}/>
      </label>

      <p>Order Summary</p>
      <h1>${totalAmount}.00</h1>



    </section>
  )
}

{/* <button onClick={digitalpayment()}>Apple Pay</button>
<button onClick={digitalpayment()}>Google Pay</button>
<button onClick={digitalpayment()}>Paypal</button> */}