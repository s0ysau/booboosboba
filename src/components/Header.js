import CartBtn from './CartBtn'
import SearchBar from './SearchBar'


export default function Header ({products}) {
  return (
    <div className='flex justify-between p-5 border-4 border-indigo-500/75'>
      <SearchBar products={products}/>
      <section className='flex justify-end items-center'>
        <CartBtn />
      </section>
    </div>
  )
}
