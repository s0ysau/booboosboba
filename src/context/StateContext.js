import React, { createContext, useState, useReducer } from 'react'
import { products } from '../utilities/products-api'
export const StateContext = createContext()

// export const StateDispatchContext = createContext();

const getDefaultCart = () => {
  const cart = {}
  for (let i = 100; i < products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const StateProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] + 1 }))
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => ({ ...prev, [productId]: prev[productId] - 1 }))
  }

  const stateContext = {
    cartItems,
    addToCart,
    removeFromCart
  }

  console.log(cartItems)

  return (
    <StateContext.Provider value={[stateContext]}>
      {/* <StateDispatchContext.Provider value={dispatch}> */}
      {props.children}
      {/* </StateDispatchContext.Provider> */}
    </StateContext.Provider>
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
