import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'
import { products } from '../utilities/products-api'

export default function SearchBar () {
  const { searchInput, setSearchInput, setSearchResults } = useContext(ShopContext)
  
  const fetchSearch = (value) => {
    const results =  products.filter((product) => {
      product.name.match(searchInput)
      return ( value && 
        product.name && 
        product.name.toLowerCase().includes(value) 
      // <Link to={`/${searchInput}`} />
      )
    })
    setSearchResults(results)
  }

  const handleChange = (evt) => {
    evt.preventDefault()
    setSearchInput(evt.target.value)
    fetchSearch(evt.target.value)
  }

  return (
    <input
      type='search'
      onChange={(evt) => handleChange(evt)}
      value={searchInput}
      placeholder=' Search'
      className='w-full ml-[10px] p-1 border-solid border-2 rounded-lg'
    />
  )
}
