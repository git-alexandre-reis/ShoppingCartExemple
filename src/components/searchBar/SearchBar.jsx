import './SearchBar.css';
import fetchProducts from '../../data/fetchProducts';
import { React, useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Cartcontext } from '../../context/Context';

const SearchBar = () => {

  const { setSearchState, searchValue, setSearchValue, setLoading } = useContext(Cartcontext);

  const handleSearch = async (event)  => {
    event.preventDefault();
    setLoading(true);

    setSearchValue('');
      
    const products = await fetchProducts(searchValue);
    setSearchState(products);
      
    setLoading(false);
  };

  return (
    <form className="buscador" onSubmit={handleSearch}>
      <input 
        type="search" 
        placeholder="Pesquisar..." 
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
      <div className="button">
        <button type="submit"> <BsSearch/> </button>
      </div>
    </form>
  );
};

export default SearchBar;
