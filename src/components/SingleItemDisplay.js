import {  useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import * as ordersAPI from '../utilities/order-api'
import AddToCartBtn from './AddToCartBtn'
import Counter from './Counter'
import BackToMenuBtn from './BackToMenuBtn'
import AddOns from './AddOns'
import SweetnessLvl from './SweetnessLvl'
import IceLvl from './IceLvl'

export default function SingleItemDisplay() {
  const [count, setCount] = useState(1)
  const location = useLocation()
  const { value } = location.state
  
  const [cart, setCart] = useState(null)
  const handleAddToOrder = (itemId, count) => {
    const updatedCart = ordersAPI.addItemToCart({item: itemId, qty: count})
    setCart(updatedCart)
  }

  const adding = () => {
    setCount(count + 1)
  }

  const subtracting = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

  console.log(cart)

  return (
    <>
      <BackToMenuBtn />
      <section className='p-2'>
        <div key={value.id} className='flex flex-row gap-x-4'>
          <section className='basis-1/4'>
            <img src={process.env.PUBLIC_URL + `${value.img}`} alt={value.name} className='w-[250px] h-[300px]' />
          </section>
          <section className='basis-1/2'>
            <h1 className='font-bold text-xl'>{value.name}</h1>
            <p>{value.description}</p>
            <h2 className='text-lg'>${value.price}.00</h2>
            <section>
              <SweetnessLvl />
              <IceLvl />
            </section>
            <AddOns />
            {/* <Counter /> */}
            <div className='flex flex-row gap-x-8'>
              <button
                onClick={subtracting}
                className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
              >-
              </button>
              <div>{count}</div>
              <button
                onClick={adding}
                className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
              >+
              </button>
            </div>
            {/* <AddToCartBtn /> */}
            <button
            //onChange={handleSubmit}
              onClick={(evt) => 
                handleAddToOrder(value.id, count)
              // console.log({item: value.id, qty: count})
            }
              className='rounded-full bg-sky-300 px-[10px] py-[5px]'>Add To Cart
            </button>
          </section>
        </div>
      </section>
    </>
  )
}


// return (
//   <>
//     <BackToMenuBtn />
//     {
//       product
//         ? (
//           <section className='p-2'>
//             {
//               product.map((item) => {
//                 return (
//                   <div key={product.id} className='flex flex-row gap-x-4'>
//                     <section className='basis-1/4'>
//                       <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} className='w-[250px] h-[300px]' />
//                     </section>
//                     <section className='basis-1/2'>
//                       <h1 className='font-bold text-xl'>{product.name}</h1>
//                       <p>{product.description}</p>
//                       <h2 className='text-lg'>${product.price}.00</h2>
//                       <section>
//                         <SweetnessLvl />
//                         <IceLvl />
//                       </section>
//                       <AddOns />
//                       {/* <Counter /> */}
//                       <div className='flex flex-row gap-x-8'>
//                         <button
//                           onClick={subtracting}
//                           className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
//                         >-
//                         </button>
//                         <div>{count}</div>
//                         <button
//                           onClick={adding}
//                           className=' bg-sky-300 w-7 h-7 rounded-full flex justify-center items-center'
//                         >+
//                         </button>
//                       </div>
//                       {/* <AddToCartBtn /> */}
//                       <button
//                         onClick={handleSubmit}
//                         className='rounded-full bg-sky-300 px-[10px] py-[5px]'>Add To Cart
//                       </button>
//                     </section>
//                   </div>
//                 )
//               })
//             }
//           </section>
//         )
//         : 'Error'
//     }
//   </>
// )
