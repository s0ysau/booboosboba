import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddToCart from './AddToCart'
import Counter from './Counter'

export default function SingleItemDisplay ({ products }) {
  const { params } = useParams()

  return (
    <>
      <p>{params}</p>
      {
        params
          ? (
            <section>
              {
              products.filter(element => element.params == params).map((element) => {
                return (
                  <div key={element._id}>
                    <img src={process.env.PUBLIC_URL + `${element.img}`} alt={element.name} className='w-25 h-30' />
                    <h1>{element.name}</h1>
                    <p>{element.description}</p>
                    <h2>{element.price}</h2>
                    {/* <p>{element.tags}</p> */}
                  </div>
                )
              })
            }
            </section>
            )
        // <p>true</p>
          : 'Error'
      }
      <Counter />
      <AddToCart />
    </>
  )
}
