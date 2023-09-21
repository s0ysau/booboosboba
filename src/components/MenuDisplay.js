import { Link } from 'react-router-dom'
import SingleItemDisplay from './SingleItemDisplay'

export default function MenuDisplay ({ products }) {
  return (
    <>
      <p>Menu Display component</p>
      <div className='overflow-y-auto h-fit'>
        {
          products
            ? (
              <ul className='grid grid-rows-4 grid-cols-3 gap-4'>
                {
              products.map((product) => {
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
              })
            }
              </ul>
              )
            : <p>No items to display</p>
        }
      </div>
    </>
  )
}
