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



  const getTotalAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item))
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
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
    getTotalAmount,
    name: name,
    setName: setName,
    phoneNum: phoneNum,
    setPhoneNum: setPhoneNum,
    
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