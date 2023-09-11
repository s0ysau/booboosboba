import { useParams } from 'react-router-dom'
import GridItemsDisplay from '../components/GridItemsDisplay'
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
                        <div key={product.key}>
                          <GridItemsDisplay product={product} />
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
