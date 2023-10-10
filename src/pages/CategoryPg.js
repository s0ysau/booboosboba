import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleItemDisplay from '../components/SingleItemDisplay'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

export default function CategoryPg ({ products, categories }) {
  const { params } = useParams()

  return (
    <>
      <div>
        <Header />
        <section className='grid grid-cols-3 gap-4'>
          <SideBar categories={categories} />
        </section>
        <h1>{params}</h1>
        <section className='col-span-2'>
          {
            products
              ? (
                <ul>
                  {
                  products.map(product => {
                    if (product.tags == params) {
                      return (
                        <div key={product._id} className='h-full class border-2 drop-shadow-xl'>
                          <Link to={`/${product.params}`} element={<SingleItemDisplay product={product} />}>
                            <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} class='w-20 h-25' />
                            <p>{product.name}</p>
                            <p>${product.price}.00</p>
                            <p>{product.tags}</p>
                          </Link>
                        </div>
                      )
                    }
                  })
                }
                </ul>
                )
              : 'error'
          }
        </section>
      </div>
    </>
  )
}

// return (
//   <div key={product._id} className='h-full class border-2 drop-shadow-xl'>
//   <Link to={`/${product.params}`} element={<SingleItemDisplay product={product} />}>
//     <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} class='w-20 h-25' />
//     <p>{product.name}</p>
//     <p>${product.price}.00</p>
//     <p>{product.tags}</p>
//   </Link>
// </div>
// )
