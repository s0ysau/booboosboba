import { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
import SideBar from '../components/SideBar'

export default function NewOrderPg ({ products, categories }) {
  // const [products, setProducts] = useState(null)
  // const [categories, setCategories] = useState(null)

  // const getProducts = async () => {
  //   try {
  //     const response = await fetch('/api/products')
  //     const data = await response.json()
  //     setProducts(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const getCategories = async () => {
  //   try {
  //     const response = await fetch('/api/category')
  //     const data = await response.json()
  //     setCategories(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getProducts()
  //   getCategories()
  // }, [])

  return (
    <>
      <p>New Order Page Component</p>
      <div>
        <Header />
        <section className='grid grid-cols-3 gap-4'>
          <SideBar categories={categories} />
          <section className='col-span-2'>
            <MenuDisplay products={products} />
          </section>
        </section>
      </div>
    </>
  )
}
