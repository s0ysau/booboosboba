import { useParams } from 'react-router-dom'
import AddToCartBtn from './AddToCartBtn'
import BackToMenuBtn from './BackToMenuBtn'
import Counter from './Counter'

export default function SingleItemDisplay ({ products }) {
  const { params } = useParams()

  return (
    <>
      <BackToMenuBtn />
      {
        params
          ? (
            <section className='p-2'>
              {
              products.filter(element => element.params == params).map((element) => {
                return (
                  <div key={element._id} className='flex flex-row gap-x-4'>
                    <section className='basis-1/4'>
                      <img src={process.env.PUBLIC_URL + `${element.img}`} alt={element.name} className='w-[250px] h-[300px]' />
                    </section>
                    <section className='basis-1/2'>
                      <h1 className='font-bold text-xl'>{element.name}</h1>
                      <p>{element.description}</p>
                      <h2 className='text-lg'>${element.price}.00</h2>
                      <Counter />
                      <AddToCartBtn />
                    </section>
                  </div>
                )
              })
            }
            </section>
            )
        // <p>true</p>
          : 'Error'
      }

    </>
  )
}
