import { React, useContext } from 'react';

import './Cart.css';

import formatCurrency from '../../util/formatCurrency';
import ItemCart from '../itemCart/ItemCart';
import { Cartcontext } from '../../context/Context';

const Cart = () => {
  const {products, isCartVisible} = useContext(Cartcontext);
  
  const total = products.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  return (
    <>
      { products.length === 0?
        <div className={`carrinho-vazio ${isCartVisible ? 'active' : ''}`} >
          <h2>Carrinho Vazio</h2>
        </div>:
        <div className={`carrinho ${isCartVisible ? 'active' : ''}`} >
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
    </>
  );
};

export default Cart;
