import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/StateContext'

export default function SearchResultsList () {
  const { searchResults } = useContext(ShopContext)

  return (
    <div className='flex flex-col w-auto bg-white rounded-xl mt-4 max-h-[300px] overflow-y-scroll'>
      {searchResults.map((result) => {
        return (
        <div 
        key={result.id}
        className='py-1 px-2'
        >
          <Link 
          to={`/${result.params}`} 
          state={{ value: result }}
          >
          <p>{result.name}</p>
          </Link>
        </div>
        )
        }
      )}
    </div>
  )
}