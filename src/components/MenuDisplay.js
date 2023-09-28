import { Link } from 'react-router-dom'
import SingleItemDisplay from './SingleItemDisplay'

export default function MenuDisplay({ products }) {


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
                      <Link 
                      key={product.id} 
                      to={`/${product.params}`}
                      state={{ value: product }}
                      className='h-full class border-2 drop-shadow-xl'>
                        <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.id} className='w-20 h-25' />
                        <p>{product.name}</p>
                        <p>${product.price}.00</p>
                        <p>{product.tags}</p>
                      </Link>
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
