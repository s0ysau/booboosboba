import React, { createContext, useState, useReducer } from 'react'
import { products } from '../utilities/products-api'
export const ShopContext = createContext()

// export const StateDispatchContext = createContext();

const getDefaultCart = () => {
  const cart = {}
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [name, setName] = useState(null)
  const [phoneNum, setPhoneNum] = useState(null)
  const [searchInput, setSearchInput] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getSubtotalAmount = () => {
    let subTotalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item))
        subTotalAmount += itemInfo.price * cartItems[item]
      }
    }
    return subTotalAmount
  }

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }))
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }))
  }

  const emptyCart = () => {
    setCartItems(() => getDefaultCart())
  }

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    emptyCart,
    getSubtotalAmount,
    name,
    setName,
    phoneNum,
    setPhoneNum,
    searchInput,
    setSearchInput,
    searchResults,
    setSearchResults,

    horizontalLine: {
      height: '2px',
      width: '100%',
      borderWidth: '1px',
      color: 'gray',
      backgroundColor: 'gray'
    }
  }

  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {/* <StateDispatchContext.Provider value={dispatch}> */}
      {props.children}
      {/* </StateDispatchContext.Provider> */}
    </ShopContext.Provider>
  )
}
