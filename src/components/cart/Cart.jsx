import { React, useContext } from 'react';

import './Cart.css';

import formatCurrency from '../../util/formatCurrency';
import ItemCart from '../itemCart/ItemCart';
import { Cartcontext } from '../../context/Context';

import { MdClose } from 'react-icons/md';

const Cart = () => {
  const {products, isCartVisible, setIsCartVisible} = useContext(Cartcontext);

  const close = ()=>{
    setIsCartVisible(!isCartVisible);
  };
  
  const total = products.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  return (
    <>
      <div className={`cart_popup_modal ${isCartVisible ? 'active' : ''}`}>
        <div className="overlay" onClick={close}></div>
        {products.length === 0?
          <div className={`carrinho-vazio ${isCartVisible ? 'active' : ''}`} >
            <h2>Carrinho Vazio</h2>
          </div>:
          <div className="carrinho" >
            <div className="cartHeader">
              <h2>Shopping Cart</h2>
              <MdClose onClick={close}/>
            </div>
            <div className="itens-carrinho">
              {products.map(produto => 
                <ItemCart
                  key={produto.id} 
                  data={
                    {
                      id:produto.id,
                      thumbnail: produto.thumbnail.replace(/\w\.jpg/gi, 'W.jpg'),
                      title: produto.title,
                      price: produto.price,
                      qty: produto.qty,
                      amount: produto.amount * produto.qty
                    }
                  }
                />
              )}
            </div>
        
            <div className="total-carrinho">
              <div className="total">
                <h4>Total: <span>{formatCurrency(total, 'BRL')}</span> + frete</h4>
              </div>
              <div className="finalizar">
                <a href="#">Finalizar</a>
              </div>
            </div>
          </div>}
      </div>
    </>
  );
};

export default Cart;
