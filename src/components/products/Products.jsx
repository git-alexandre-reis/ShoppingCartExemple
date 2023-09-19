import './Products.css';
import { React, useContext } from 'react';
import { Cartcontext } from '../../context/Context';
import formatCurrency from '../../util/formatCurrency';

const Products = ({data}) => {
  
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  const { id, title, thumbnail, price } = data;
  
  return (
    <>
      <div className='card' key={id}>
        <div className="imagem">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="titulo">
          <h3>{title}</h3>
        </div>
        <div className="preco">
          <h2>{formatCurrency(price, 'BRL')}</h2>
        </div>
        
        <button 
          type="button" 
          title="Adicionar ao carrinho" 
          onClick={() => dispatch({ type: 'ADD', payload: data })}>
          Add to Cart
        </button>
       
      </div>
    </>
  );
};

export default Products;
