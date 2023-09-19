import './Content.css';
import { React, useContext, useEffect, useState } from 'react';
import Products from '../products/Products';
import fetchProducts from '../../data/fetchProducts';
import { Cartcontext } from '../../context/Context';
import Loader from '../../components/loader/Loader';
const Content = () => {
  const { searchState, setSearchState, loading, setLoading } = useContext(Cartcontext);

  const [nOfElements, seNOfElements] = useState(12);

  const loadMore = () => {
    seNOfElements(nOfElements + 6);
  };

  useEffect(() => {

    const fetchData = async () => {
      const products = await fetchProducts('geek');
      setSearchState(products);
      setLoading(false);
    };
  
    fetchData();
  }, []);
  
  return (
    <>
      {loading? <Loader/>:
        <div className="container">
          <div className="product-container">
            {searchState.slice(0, nOfElements).map(produto => 
              <Products
                key={produto.id} 
                data={
                  {
                    id:produto.id,
                    thumbnail: produto.thumbnail.replace(/\w\.jpg/gi, 'W.jpg'),
                    title: produto.title,
                    price: produto.price,
                    qty: 1,
                    amount: produto.price
                  }
                }
              />
            )}
          </div>

          <div className="carregarMais">
            <button type="button" onClick={() => loadMore()}>Carregar Mais</button>
          </div>
        </div>}
    </>
  );
};

export default Content;
