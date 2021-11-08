import React, { createContext, useReducer } from 'react';

const myReducer = (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }

 

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, {
    transactions: [
      {id:1,text:'Test 1',amount:200},
      {id:2,text:'Test 2',amount:-200},
      {id:3,text:'Test 3',amount:20},
      {id:4,text:'Test 4',amount:230},
    ]
  });

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}

// Initial state
