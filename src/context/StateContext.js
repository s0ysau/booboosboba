import React, { createContext, useState, useReducer } from 'react';
export const StateContext = createContext();

export const StateProvider = (props) => {
  const [order, setOrder] = useState({
    customer: null,
    lineItems: null,
    isPaid: false
  })

  const stateContext = {
    order: order,
    setOrder: setOrder,
  }


  return (
    <StateContext.Provider value={[stateContext]}>
      {props.children}
    </StateContext.Provider>
  )
}