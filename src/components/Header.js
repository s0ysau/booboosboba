import CartBtn from './CartBtn'
import SearchBar from './SearchBar'


export default function Header ({products}) {
  return (
    <div className='flex justify-between p-5 border-4 border-indigo-500/75'>
      <p>Logo</p>
      <h1>Booboo's Boba</h1>
      <SearchBar products={products}/>
      <section className='flex justify-end items-center'>
        <CartBtn />
      </section>
    </div>
  )
}
