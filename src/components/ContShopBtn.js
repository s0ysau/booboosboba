import { Link } from 'react-router-dom'


export default function ContShopBtn() {
  return (
    <section>
      <Link to='/order'>
        <button
          className='rounded-full bg-sky-300 px-[10px] py-[5px]'
        >
          Continue Shopping
        </button>
      </Link>
    </section>
  )
}



