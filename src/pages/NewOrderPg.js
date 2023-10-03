import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'
import SideBar from '../components/SideBar'

export default function NewOrderPg ({ products, categories }) {
  return (
    <>
      <p>New Order Page Component</p>
      <div>
        <Header />
        <section className='grid grid-cols-3 gap-4'>
          <div className='col-span-1'>
            {/* <SideBar categories={categories} /> */}
          </div>
          <section className='col-span-2'>
            <MenuDisplay products={products} />
          </section>
        </section>
      </div>
    </>
  )
}
