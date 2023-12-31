import React, { useContext } from 'react'
import { ShopContext } from '../context/StateContext'
import CartBtn from './CartBtn'
import SearchBar from './SearchBar'
import SearchResultsList from './SearchResultsList'

export default function Header() {

  return (
    <div className='flex justify-between items-center p-5 border-4 bg-[#753600] border-[#eba736]'>
      <p>Logo</p>
      <h1 className='font-script text-white text-3xl'>Booboo's Boba</h1>
      <section className='basis-1/2 justify-self-stretch'>
        <SearchBar/>
        <div className='absolute'>

        <SearchResultsList/>
        </div>
      </section>
      <section className='flex justify-end items-center'>
        <CartBtn />
      </section>
    </div>
  )
}
