import React, { createContext, useReducer } from "react";
import fetch from "../api/fetchData";

const myReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTION":
      return {
        transactions: [...action.payload.transactions],
        categories: [...action.payload.categories],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

// Create context
export const GlobalContext = createContext();

// Provider component
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myReducer, []);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  const getTransactions = async () => {
    try {
      const transactions = await fetch.get("/transaction");
      const categories = await fetch.get("/category");
      // console.log(`transactions`, transactions.data);
      // console.log(`categories`, categories.data);
      dispatch({
        type: "GET_TRANSACTION",
        payload: {
          transactions: transactions.data,
          categories: categories.data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        categories: state.categories,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Initial state
