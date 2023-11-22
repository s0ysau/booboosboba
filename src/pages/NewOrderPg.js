import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
// import SideBar from '../components/SideBar'
import { ShopContext } from '../context/StateContext'

export default function NewOrderPg ({ products }) {
  const navigate = useNavigate()
  // const [ShopContext] = useContext(ShopContext)

  // const getCart = async () => {
  //   try {
  //     const response = await fetch(`/api/order`, {
  //       method: 'GET',
  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //     const data = await response.json()
  //     setCart(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getCart()
  // }, [])

  return (
    <>
      <div>
        <Header />
        <section>
          <MenuDisplay products={products} />
        </section>
      </div>
    </>
  )
}

{ /* <section className='grid grid-cols-3 gap-4'>
<div className='col-span-1'>
  <SideBar categories={categories} />
</div>
<section className='col-span-2'>
  <MenuDisplay
    products={products}
  handleAddToOrder={handleAddToOrder}
  />
</section>
</section> */ }
