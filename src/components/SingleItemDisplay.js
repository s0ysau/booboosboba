import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import * as ordersAPI from '../utilities/order-api'
// import AddToCartBtn from './AddToCartBtn'
// import Counter from './Counter'
import BackToMenuBtn from './BackToMenuBtn'
import { StateContext } from '../context/StateContext'
// import AddOns from './AddOns'
// import SweetnessLvl from './SweetnessLvl'
// import IceLvl from './IceLvl'

export default function SingleItemDisplay () {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(StateContext)
  const location = useLocation()
  const { value } = location.state
  const navigate = useNavigate()

  // const handleAddToCart = async () => {
  //   try {
  //     const response = await fetch(`/api/order/cart`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         itemIds: value.id,
  //         qty: count
  //       })
  //     })
  //       const data = await response.json()
  //       // setCart(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  //   navigate(`/order`)
  //   console.log({item: value.id, qty: count})
  // }

  const adding = () => {
    setCount(count + 1)
  }

  const subtracting = () => {
    if (count >= 1) {
      setCount(count - 1)
    }
  }

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
            {/* <section>
              <SweetnessLvl />
              <IceLvl />
            </section>
            <AddOns /> */}
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
              onClick={() =>
                addToCart(value.id)
              // console.log({item: value.id, qty: count})
            }
              className='rounded-full bg-sky-300 px-[10px] py-[5px]'
            >Add To Cart
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
