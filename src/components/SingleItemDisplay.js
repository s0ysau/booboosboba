import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
                  </div>
                )
              })
            }
            </section>
            )
        // <p>true</p>
          : 'Error'
      }
      {/* {
        product
          ? (
            <section>
              {
              product.map((item) => {
                return (
                  <div key={item._id}>
                    <p>{item.name}</p>
                  </div>
                )
              })
            }
            </section>
            )
          : 'Error'
      } */}
    </>
  )
}
