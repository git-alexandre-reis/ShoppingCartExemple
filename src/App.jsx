import React from 'react';
import NavBar from './components/navBar/NavBar';
import { Context } from './context/Context';
import Content from './components/content/Content';
import Cart from './components/cart/Cart';

function App() {

  return (
    <>
      <Context>
        <NavBar/>
        <Cart/>
        <Content/>
      </Context>
    </>
  );
}

export default App;
