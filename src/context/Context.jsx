import { React, createContext, useReducer, useState } from 'react';

export const Cartcontext = createContext();

export const Context = (props) => {
  const reducer = (products, action) => {
    switch (action.type) {
    case 'ADD':
      const tempstate = products.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        return products;
      } else {
        return [...products, action.payload];
      }
    case 'REMOVE':
      const tempstate3 = products.filter(
        (item) => item.id !== action.payload.id
      );
      return tempstate3;
    case 'INCREASE':
      const tempstate1 = products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return tempstate1;
    case 'DECREASE':
      const tempstate2 = products.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return tempstate2;

    default:
      return products;
    }
  };

  const [ isCartVisible, setIsCartVisible ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [ searchState, setSearchState ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');
  const [ products, dispatch ] = useReducer(reducer, []);

  const value = { 
    products,
    dispatch,
    isCartVisible,
    setIsCartVisible, 
    loading,
    setLoading,
    searchState,
    setSearchState,
    searchValue,
    setSearchValue
  };

  return (
    <Cartcontext.Provider value={value}>{props.children}</Cartcontext.Provider>
  );
};
