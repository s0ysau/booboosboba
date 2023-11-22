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

  const emptyCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - prev[productId] }))
  }

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    emptyCart,
    getTotalAmount
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

// const orderReducer = async (state, action) => {
//   switch (action.method) {
//     case "POST": {
//       // return [...state, action.payload]
//       const response = await fetch (`/api/order/cart`, {
//         method: action.method,
//         headers: {'Content-Type': 'application/json'}
//       })
//       const data = await response.json()
//       action.state(data)
//       break
//     }
//     case "PUT": {
//       // state._id === action.state._id ?
//       // action.state : state
//       const response = await fetch (`/api/order/cart/qty`, {
//         method: action.method,
//         headers: {'Content-Type': 'application/json'}
//       })
//       const data = await response.json()
//       action.state(data)
//       break
//     }
//     case "DELETE": {
//       // state._id !== action.state
//       const response = await fetch (`/api/order/${action.state}`, {
//         method: action.method,
//         headers: {'Content-Type': 'application/json'}
//       })
//       const data = await response.json()
//       action.state(data)
//       break
//     }

//     default: {
//       throw Error('Unknown action: ' + action.type);
//     }
//   }
// }

// const initialOrder = {
//   customer: null,
//   lineItems: [],
//   isPaid: false
// }
