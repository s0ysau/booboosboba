import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar ({ products }) {
  const [searchInput, setSearchInput] = useState('')

  const handleChange = (evt) => {
    evt.preventDefault()
    setSearchInput(evt.target.value)
  }

  if (searchInput.length > 0) {
    products.filter((product) => {
      product.name.match(searchInput)
      return <Link to={`/${searchInput}`} />
    })
  }

  return (
    <input
      type='search'
      onChange={(evt) => handleChange(evt)}
      value={searchInput}
      placeholder=' Search'
      className='w-1/2 ml-[10px] p-1 border-solid border-2 rounded-lg'
    />
  )
}
