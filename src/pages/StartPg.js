import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StartPg () {
  const navigate = useNavigate()

  return (
    <>
      <h1>Welcome to Booboo's Boba!</h1>
      <button
        onClick={() => navigate('/order')}
      >
        Click here to start your order
      </button>
    </>
  )
}
