import { React, useContext } from 'react';
import './ItemCart.css';
import formatCurrency from '../../util/formatCurrency';
import { BsFillTrashFill } from 'react-icons/bs';
import { LuMinusCircle, LuPlusCircle } from 'react-icons/lu';
import { Cartcontext } from '../../context/Context';

const ItemCart = ( { data } ) => {
  const { title, thumbnail, price, qty, amount } = data;

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <>
      <div className="item-carrinho">
        <div className="imagem">
          <img src={thumbnail} alt=""/>
        </div>
        <div className="body-content">
          <div className="titulo">
            <h4>{title}</h4>
          </div>
          <div className="price-content">
            <div className="preco">
              <h3>{formatCurrency(price, 'BRL')}</h3>
            </div>
            <div className="qtde">
              <button
                type="button"
                disabled={qty <= 1 ? true : false}
                onClick={() => dispatch({ type: 'DECREASE', payload: data })}
              >
                <LuMinusCircle/>
              </button>
              <h3>{qty}</h3>
              <button 
                type="button" 
                onClick={() => dispatch({ type: 'INCREASE', payload: data })}
              >
                <LuPlusCircle/>
              </button>
            </div>
            <div className="preco">
              <h3>{formatCurrency(amount, 'BRL')}</h3>
            </div>
          </div>
        </div>
        <div className="excluir">
          <button 
            type="button" 
            onClick={() => dispatch({ type: 'REMOVE', payload: data })} 
          >
            <BsFillTrashFill/>
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
