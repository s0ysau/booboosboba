import { useEffect, useState, useRef } from 'react';
import Header from "../components/Header";
import ItemsDisplay from "../components/ItemsDisplay";
import SideBar from "../components/SideBar";


export default function NewOrderPg () {
  const [category, setCategory] = useState(null)

  // useEffect (function () {
  //   async function getProducts () {
  //     const products = await 
  //   }
  // })

  const getCategory = async () => {
    try {
      const response = await fetch ('api/products')
      const data = await response.json()
      setCategory(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategory()
  })

  return (
    <>
      <p>New Order Page Component</p>
      <div >
        <Header />
        <section className="grid grid-cols-3 gap-4">
          <SideBar category={category}/>
          <section className="col-span-2">
            <ItemsDisplay />
          </section>
        </section>
      </div>
    </>
  )
}