import React, { createContext, useState, useReducer } from 'react';
export const StateContext = createContext();
// export const StateDispatchContext = createContext();

export const StateProvider = (props) => {
  // const [order, dispatch] = useReducer(orderReducer, initialOrder) 

  const [initialOrder, setInitialOrder] = useState(null)

  const stateContext = {
    initialOrder: initialOrder,
    setInitialOrder: setInitialOrder
  }
  

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